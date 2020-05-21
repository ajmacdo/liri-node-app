//At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:

// require("dotenv").config();

// Add the code required to import the keys.js file and store it in a variable.
// var keys = require("./keys.js");

//You should then be able to access your keys information like so
//var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var inquirer = require("inquirer");
//Make it so liri.js can take in one of the following commands:
// concert-this
// spotify-this-song
// do-what-it-says
//movie-this

//Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "What would you like to do?",
      choices: ["movie-this", "concert-this", "spotify-this-song", "do-what-it-says"],
      name: "options"
    }
  ])

 // .then(function(inquirerResponse) {
    // console.log(inquirerResponse)
//     if (inquirerResponse.confirm) {
//       console.log("\nWelcome " + inquirerResponse.username);
//       console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
//     }
//     else {
//       console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
//     }
//   });


// We then run the request with axios module on a URL with a JSON
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // Then we print out the movie data
    console.log(response.data);
    console.log("The movie's title is: " + response.data.Title);
    console.log("The year the movie came out is: " + response.data.Year);
    console.log("The movie's IMDB rating is: " + response.data.imdbRating);
    console.log("The movie's Rotten Tomatoes rating is: " + JSON.stringify(response.data.Ratings[1], ['Value']));
    console.log("The movie was produced in: " + response.data.Country);
    console.log("The movie language is: " + response.data.Language);
    console.log("The movie's plot is: " + response.data.Plot);
    console.log("The movie's actors are: " + response.data.Actors);
  }
);

