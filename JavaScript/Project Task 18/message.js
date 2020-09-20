const mod = require( './messageMixer' );
function displayMessage() {
  console.log(mod.countCharacter("What is the color of the sky?", "t"));
  console.log(mod.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(mod.reverseWord("What is the color of the sky?"));
  console.log(mod.reverseAllWords("What is the color of the sky?"));
  console.log(mod.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(mod.encode("What is the color of the sky?"));
}

displayMessage();
