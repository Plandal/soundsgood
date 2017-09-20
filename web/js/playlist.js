console.log('js de playlist');

var viewPlaylist = function (data) {
    console.log('div = ', $('#dtt'));
    $('#dtt').DataTable({
        data: data,
        columns: [
            {title: "Position du titre dans la playlist spotify"},
            {title: "Titre - Artiste"},
            {title: "Lien track Spotify"},
            {title: "Lien track Deezer"},
        ]
    });
};




