require("dotenv").config();
var fs = require("fs");
var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
    id: keys.id,
    secret: keys.secret
});


var command = process.argv[2]
var search = process.argv[3]


switch (command) {
    case "concert-this": 
        bandsInTown(search);
        break;
    case "spotify-this-song":
        spotifyThis(search);
        break;
    case "movie-this":
        movieThis(search);
        break;
    case "do-what-it-says":
        randomChoice();
        break;
}

