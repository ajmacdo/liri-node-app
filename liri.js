//At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:

require("dotenv").config();

// Add the code required to import the keys.js file and store it in a variable.
// var keys = require("./keys.js");

//You should then be able to access your keys information like so
//var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var inquirer = require("inquirer");

function searchMovie() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What movie would you like to search?",
          name: "movie",
        },
      ])
      .then(function (movieResponse) {
          var searchTerm = movieResponse.movie

          console.log(searchTerm);
        // We then run the request with axios module on a URL with a JSON
        axios
          .get(
            `http://www.omdbapi.com/?t=${searchTerm}&y=&plot=short&apikey=trilogy`)
          
          .then(function (response) {
            // Then we print out the movie data
            console.log(response.data);
            console.log("The movie's title is: " + response.data.Title);
            console.log("The year the movie came out is: " + response.data.Year);
            console.log("The movie's IMDB rating is: " + response.data.imdbRating);
            console.log("The movie's Rotten Tomatoes rating is: " +
                JSON.stringify(response.data.Ratings[1], ["Value"]));
            console.log("The movie was produced in: " + response.data.Country);
            console.log("The movie language is: " + response.data.Language);
            console.log("The movie's plot is: " + response.data.Plot);
            console.log("The movie's actors are: " + response.data.Actors);
          });
      });
  }

  function searchBands() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What band would you like to search?",
          name: "band",
        },
      ])
      .then(function (bandResponse) {
          var searchTerm = bandResponse.band
          console.log(searchTerm);
        // We then run the request with axios module on a URL with a JSON
        axios
          .get(
            `https://rest.bandsintown.com/artists/` + searchTerm + `/events?app_id=${process.env.BINKEY}`)
          
          .then(function (response) {
            // Then we print out the band data
            //data is an array. For each index in array, want to console log certain info...
            //console.log(response.data);
            //console.log(response.data.venue.name);
            //console.log(response.data.venue.location);
            console.log(JSON.stringify(response.data));

          });
      });
  }
//This is the function to set up the initial set of prompts for the user to select from the list of search options. 
function getStarted() {
  inquirer
    .prompt([
      // Here we give the user a list to choose from.
      {
        type: "list",
        message: "What would you like to do?",
        choices: [
          "movie-this",
          "concert-this",
          "spotify-this-song",
          "do-what-it-says",
        ],
        name: "options",
      },
    ])
    .then(function (inquirerResponse) {
      switch (inquirerResponse.options) {
        case "movie-this":
          searchMovie();
          break;
        case "concert-this":
          searchBands();
          break;
        // case "spotify-this-song":
        //   searchSpotify(searchInput);
        //   break;
        //   case "do-what-it-says":
        //   searchDo(searchInput)
        //   break;
        default:
        // code block
      }
    });
}


getStarted();




//     if (inquirerResponse.confirm) {
//       console.log("\nWelcome " + inquirerResponse.username);
//       console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
//     }
//     else {
//       console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
//     }
//   });
