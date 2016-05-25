
# indento

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/indento.svg)](https://www.npmjs.com/package/indento) [![Downloads](https://img.shields.io/npm/dt/indento.svg)](https://www.npmjs.com/package/indento) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Indent strings.

## :cloud: Installation

```sh
$ npm i --save indento
```


## :clipboard: Example



```js
const indento = require("indento");

console.log(indento("Hello World", 4));
// => "Hello World"

console.log(indento("Hello\nMars", 1));
// =>
//  Hello
//  Mars

console.log(indento("Hello\nPluto", 2, "a"));
// =>
// aaHello
// aaPluto
```

## :memo: Documentation


### `indento(input, width, char)`
Indents the input string.

#### Params
- **String** `input`: The input string.
- **Number** `width`: The indent width.
- **String** `char`: The character to use for indentation (default: `" "`).

#### Return
- **String** The indented string.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`bgm`](https://github.com/egoist/bgm#readme) (by EGOIST)—Display bangumi list in CLI.
 - [`emoji-logger`](https://github.com/IonicaBizau/emoji-logger#readme)—Logging library based on flat colors and Emoji.
 - [`testen`](https://github.com/egoist/testen#readme) (by EGOIST)—Run tests for multiple versions of Node.js in local env.
 - [`tilda`](https://github.com/IonicaBizau/tilda)—Tiny module for building command line tools.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
