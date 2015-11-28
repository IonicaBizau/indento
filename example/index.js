const indento = require("../lib");

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
