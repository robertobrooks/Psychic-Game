keyPress = [];
charSet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
keyRandom = [];
var i = 9;
var wins = 0;
var losses = 0;

  document.getElementById("kn").innerHTML = i;
  document.getElementById("wi").innerHTML = wins;
  document.getElementById("lo").innerHTML = 0;

  document.onkeypress = function(event) {
    pressedLetter = String.fromCharCode(event.keyCode).toLowerCase();
    keyPress.push(String.fromCharCode(event.keyCode).toLowerCase());

 //Get a random number between 0 and 25 - this is the number of letters in the English language charSet[array]
    var randomNumber = Math.floor(Math.random() * 25);
    var randomLetter = charSet[randomNumber];
    keyRandom.push(charSet[randomNumber]);
    i--;

//Check if the key coincides with the random key
    if (pressedLetter === randomLetter) {
      document.getElementById("wi").innerHTML = wins+1;
      wins++;
      keyPress = [];
    };

//Check if the number of guesses was greater than 10
    if (i <= 0) {
      document.getElementById("lo").innerHTML = losses+1;
      losses++;
      keyPress = [];
      i = 9;
    }

    document.getElementById("kn").innerHTML = i;
    document.getElementById("kp").innerHTML = keyPress.join(", ");
  };