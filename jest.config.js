module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: ['**/*.spec.ts'],
  transform: {
    '^.+\\.(ts|js|mjs|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json'
      }
    ]
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  transformIgnorePatterns: [
    'node_modules/(?!@angular|rxjs)',
    '\\.pnp\\.[^\\/]+$'
  ],
  globals: {},
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg|css|scss)$': 'identity-obj-proxy'
  }
};
