//At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:

require("dotenv").config();

// Add the code required to import the keys.js file and store it in a variable.
var keys = require("./keys.js");

//You should then be able to access your keys information like so
var spotify = new Spotify(keys.spotify);

//Make it so liri.js can take in one of the following commands:
// concert-this
// spotify-this-song
// do-what-it-says
// movie-this

var axios = require("axios");

// We then run the request with axios module on a URL with a JSON
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // Then we print out the imdbRating
    console.log("The movie's rating is: " + response.data.imdbRating);
  }
);

var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "Which Pokemon do you choose?",
      choices: ["movie-this", "concert-this", "spotify-this-song", "do-what-it-says"],
      name: "options"
    }
  ])
  
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    console.log(inquirerResponse)
    if (inquirerResponse.confirm) {
      console.log("\nWelcome " + inquirerResponse.username);
      console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
    }
    else {
      console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    }
  });


