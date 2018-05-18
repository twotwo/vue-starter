# Git Commit Package

<https://github.com/marionebl/commitlint>

## Getting started

```bash
# Install commitlint cli and angular config
npm install --save-dev @commitlint/{config-conventional,cli}
# For Windows:
npm install --save-dev @commitlint/config-conventional @commitlint/cli

# Configure commitlint to use angular config
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

<http://marionebl.github.io/commitlint/#/guides-local-setup>

## Message Type

```bash
➜  vuex-webpack4 git:(master) ✗ echo 'foo: bar' |npx commitlint
⧗   input:
foo: bar

✖   type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test] [type-enum]
✖   found 1 problems, 0 warnings
```
