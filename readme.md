# all-the-clis

Collects all of the command line executables available from npm packages. Each CLI name links to a list of packages which provide that executable.

## Installation

```sh
yarn add all-the-clis
```

## Usage

```js
const clis = require('all-the-clis')

Object.keys(clis).length
// 105340

clis['html-beautify']
// [
//   'js-beautify-ejsx',
//   'js-beautify-nahid',
//   'js-beautify2',
//   'beautify-less',
//   'js-prettify',
//   'sublime-beautify',
//   'js-beautify',
//   '@bmewburn/js-beautify'
// ]
```

## Tests

```sh
yarn && yarn test
```

## License

MIT
