let allmoji = require("./allmoji");

console.log(allmoji.get("fire")); // by shortname
allmoji.setvendor("apple"); // by vendor
console.log(allmoji.get("1F441")); // or hex
allmoji.setvendor("twitter");
console.log(allmoji.get("burrito"));