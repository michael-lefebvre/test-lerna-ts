module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'clover'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  globals: {
    'ts-jest': {
      extends: './babel.config.js',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  modulePathIgnorePatterns: ['dist','node_modules'],
  moduleNameMapper: {
    '@michael-lefebvre/(.+)$': '<rootDir>packages/$1/src',
  },
  notify: true,
  notifyMode: 'always',
  rootDir: '../../',
  roots: ['<rootDir>packages'],
  // testMatch: ['**/__tests__/*.+(ts|tsx|js)', '**/*.test.+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>jest/setupTests.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/(node_modules)/',
    '<rootDir>/packages/.*/dist/',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
