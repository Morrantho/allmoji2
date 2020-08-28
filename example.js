let allmoji = require("./allmoji");
let emojis = allmoji("microsoft");

console.log(emojis["1f60b"]);
emojis = allmoji("apple");
console.log(emojis.egg);
emojis = allmoji("twitter");
console.log(emojis["sandwich"]);