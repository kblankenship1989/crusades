const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
    preset: "jest-expo",
    moduleFileExtensions: [
        "ts",
        "tsx"
    ],
    setupFilesAfterEnv: [
        "@testing-library/jest-native/extend-expect"
    ],
    transform: {
        ...tsjPreset.transform,
    }
};
