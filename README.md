# postxml-image-size
[![npm version][npm-image]][npm-url]

> [PostXML] plugin adds sizes to local images.

## Installation
`npm i postxml-image-size --save-dev`

## Usage
[Postxml]

## Options
### cwd
**Directory of parsing file. It is needed for images' urls.**<br>
Type: `String`<br>
Default: `''`

### round
**Enable rounding sizes**<br>
Type: `String`<br>
Default: `true`

## Example

### Input
```html
<img src="image.png">
```

### Output
```html
<img src="image.png" width="255" height="180">
```

## Licence
MIT

[PostXML]: https://github.com/postxml/postxml

[npm-url]: https://www.npmjs.org/package/postxml-image-size
[npm-image]: http://img.shields.io/npm/v/postxml-image-size.svg?style=flat-square
