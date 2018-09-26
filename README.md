# combine-yaml-cli

This is borrowed heavily from [merge-yaml-cli](https://github.com/brainsiq/merge-yaml-cli) and [mergeyaml](https://github.com/Khezen/mergeyaml).

What it does different is instead of a merges YAML files, it combines!

It will combine all yaml files into one on the same level.

Properties which aren't list are merged the same.

The main difference is when a property is of type array it will combine (concat) and not merge.

Still using [glob](https://www.npmjs.com/package/glob) patterns to specify input files, with a CLI to
write out the result as a file.

#### Usage

```shell
npm i -g combine-yaml-cli
combine-yaml -i example.yaml includes/*.yml -o merged.yml
```

#### Node.js API

```
const combineYaml = require('combine-yaml-cli')

combineYaml.on('files', console.log('Files found: ', files))

const result = combineYaml.combine(['example.yml', 'includes/*.yml'])
```

#### Tests

The repo contains one simple test case. `tests/base.yml` is merged with `includes/*.yml` and the output is compared with `expected.yml`.

The test can be run with `yarn test` or `npm test` but requires Docker and Docker Compose to be installed.
