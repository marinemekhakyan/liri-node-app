# liri-node-app

Liri will search Spotify for your favorite music, OMDB for your favorite films and Bands In Town for upcoming concerts you don't want to miss. Use below commands to control Liri.

## Node packages used

Node-Spotify-API [npm install --save node-spotify-api]
Axios [ npm install axios]
Moment [npm install moment]
DotEnv [npm install dotenv]

### node liri.js concert-this <artist/band name here>

This will search the Bands in Town Artist Events API for an artist and render the following information about each event:

Name of the venue
Venue location
Date of the Event


### node liri.js spotify-this-song '<song name here>'

This will show the following information about the song:

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from


### node liri.js movie-this '<movie name here>'

This will output the following information:

* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.


### node liri.js do-what-it-says

This command will output whatever command is currently in the random.txt file. Currently set to spotify-this-song "I Want it That Way". 








