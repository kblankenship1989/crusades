import {ColorSchemeName} from 'react-native';

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
export const useColorScheme = (): NonNullable<ColorSchemeName> => {
  return 'light';
};
