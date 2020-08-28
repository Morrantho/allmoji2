# allmoji2

## Every emoji. From every vendor. Ever. All in one place.

### API / Library:

```js
function allmoji(vendor);
```
Returns all of the supplied vendors emojis as a map. Keys can be shortnames or codepoints.

### Example:
```js
// Require allmoji
let allmoji = require("./allmoji");
// Call it and pick a vendor. Valid vendors can be found in both the emojis/ or json/ folders.
let emojis = allmoji("microsoft");
// Getting an emoji by codepoint:
console.log(emojis["1f60b"]);
// Switching vendor:
emojis = allmoji("apple");
// Getting an emoji by shortname:
console.log(emojis.egg);
// Switching vendor again:
emojis = allmoji("twitter");
// Also getting an emoji by key:
console.log(emojis["sandwich"]);
```
### Output:
![Example Output](https://github.com/Morrantho/allmoji2/blob/master/example.png)
