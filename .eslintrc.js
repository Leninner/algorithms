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
  extends: ['standard-with-typescript', '@tinkin'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    endOfLine: OPTIONS.OFF,
  },
}
