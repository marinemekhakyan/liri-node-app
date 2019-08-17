require("dotenv").config();
var fs = require("fs");
var axios = require("axios");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var Spotify = require('node-spotify-api');

var spotifyTest = process.env.SPOTIFY_ID
var command = process.argv[2]
var search = process.argv[3]

