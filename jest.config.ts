export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy",
        "^@/(.*)$": "<rootDir>/src/$1",
        "^@mocks/(.*)$": "<rootDir>/__mocks__/$1"
      },
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    testPathIgnorePatterns: [
      "/node_modules/",
    ],
    transform: {
      "^.+\\.tsx?$": [
        "ts-jest",
        {
          "isolatedModules": true
        }
      ]
    },
    transformIgnorePatterns: [
      "/node_modules/"
    ]
};