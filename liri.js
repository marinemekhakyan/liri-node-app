require("dotenv").config();
var fs = require("fs");
var axios = require("axios");
// var keys = require("./keys.js");
// var Spotify = require('node-spotify-api');
// var spotify = new Spotify({
//     id: keys.id,
//     secret: keys.secret
// });


var command = process.argv[2]
var search = process.argv[3]


switch (command) {
    case "concert-this": 
        bandsInTown(search);
        break;
    // case "spotify-this-song":
    //     spotifyThis(search);
    //     break;
    case "movie-this":
        movieThis(search);
        break;
    case "do-what-it-says":
        randomChoice();
        break;
}

function bandsInTown(artist) {
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(queryURL).then(
        function(response) {
            if(response.data[0].venue != undefined) {
                console.log("----------------")
                console.log("Event Venue: " + response.data[0].venue.name);
                console.log("Event location: " + response.data[0].venue.city);
                var eventDateTime = moment(response.data[0].datetime);
                console.log("Event Date & Time: " + eventDateTime.format("dddd, MMMM Do YYYY"));
                console.log("-----------------")
            }
            else {
                console.log("We found no results.");
            }
        }
    ).catch(function (error) {
        console.log (error);
    });
}