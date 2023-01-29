const OPTIONS = {
  OFF: 0,
  WARN: 1,
  ERROR: 2,
}

module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: ['@tinkin'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    endOfLine: OPTIONS.OFF,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'no-magic-numbers': OPTIONS.OFF,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'no-extra-parens': OPTIONS.OFF,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'no-param-reassign': OPTIONS.OFF,
  },
}
