import _ from 'lodash';

import variable from './variables/platform';
import getNBTheme from './components';
import getCustomTheme from './custom';

export default (variables = variable) => {
    const theme = {
        ...getNBTheme(variables),
        ...getCustomTheme(variables)
    };
    const cssifyTheme = (grandparent, parent, parentKey) => {
        _.forEach(parent, (style, styleName) => {
            if (
                styleName.indexOf('.') === 0 &&
        parentKey &&
        parentKey.indexOf('.') === 0
            ) {
                if (grandparent) {
                    if (!grandparent[styleName]) {
                        grandparent[styleName] = {};
                    } else {
                        grandparent[styleName][parentKey] = style;
                    }
                }
            }
            if (
                style &&
        typeof style === 'object' &&
        styleName !== 'fontVariant' &&
        styleName !== 'transform'
            ) {
                cssifyTheme(parent, style, styleName);
            }
        });
    };

    cssifyTheme(null, theme, null);

    return theme;
};
