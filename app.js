var express = require('express');
var app = express();
var spotify = require('spotify');
var spotifyPlaylist = require('spotify-playlist');

app.use("/web", express.static(__dirname + "/web"));

app.get('/', function (req, res) {
    res.render('index.ejs', {error: false});
});

app.get('/playlist/:user/:playlist', function (req, res) {
    var array = [];
    var callback = function (err, result) {

        var playlist = result.playlist.tracks;
        if (playlist.length === 0) {
            res.render('index.ejs', {error: true});
        } else {
            for (var i in playlist) {
                array.push([
                    playlist[i].number,
                    playlist[i].name + ' - ' + playlist[i].artists,
                    playlist[i].href,
                    'Erreur'
                ])
            }
            console.log('array = ',array);
            res.render('playlist.ejs', {playlist: array});
        }

    }
    spotifyPlaylist.playlist(req.params.user, req.params.playlist, callback);



});


app.listen(8080);