# indento [![Support this project][donate-now]][paypal-donations]

Indent strings.

## Installation

```sh
$ npm i indento
```

## Example

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

## Documentation

### `indento(input, width, char)`
Indents the input string.

#### Params
- **String** `input`: The input string.
- **Number** `width`: The indent width.
- **String** `char`: The character to use for indentation (default: `" "`).

#### Return
- **String** The indented string.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

MIT © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
