module.exports = {
    preset: 'jest-expo',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ],
    setupFiles: [
        './node_modules/react-native-gesture-handler/jestSetup.js'
    ],
    setupFilesAfterEnv: [
        '@testing-library/jest-native/extend-expect'
    ],
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|redux-persist|sentry-expo|native-base|@sentry/.*)'
    ]
};
