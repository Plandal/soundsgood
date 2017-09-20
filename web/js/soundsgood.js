var search = function (user, playlist) {
    if (user && playlist) {
        document.location.href = "http://localhost:8080/playlist/" + $('#sginputUser').val() + "/" + $('#sginputPlaylist').val();
    } else {
        alert('des informations manques');
    }
}

$('#sgbtn').on('click', function () {
    search($('#sginputUser').val(), $('#sginputPlaylist').val())
});

$('#sgExample').on('click', function () {
    $('#sginputUser').val('syknyk');
    $('#sginputPlaylist').val('0Idyatn0m08Y48tiOovNd9');
});



