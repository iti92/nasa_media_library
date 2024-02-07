export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|style|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
    '^.+.(css|style|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    "^.+\\.svg$": "jest-svg-transformer",
},
}