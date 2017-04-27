// Artists
$('#search-artist').on('click', function(e) {
    e.preventDefault()
    var nameArtist = $('#artist-name').val()
    var urlSearchArtist = 'https://api.spotify.com/v1/search?type=artist&query=' + nameArtist
    $.ajax({
        url: urlSearchArtist,
        success: function(data) {
            var artistsFound = data.artists.items
            var optionsArtists = '<option selected disabled>Select an artist</option>'
            artistsFound.forEach(function(artistData) {
                optionsArtists += '<option value="' + artistData.id + '">' + artistData.name + '</option>'
            })
            $('#artists-selection').html(optionsArtists)
        }
    })
})

$('#artists-selection').on('change', function(e) {
    var idArtist = $(this).val();
    urlAlbums = 'https://api.spotify.com/v1/artists/' + idArtist + '/albums'
    
    $.ajax({
        url: urlAlbums,
        success: function(data) {
            var albumsFound = data.items
            var optionsAlbums = '<option selected disabled>Select an album</option>'
            albumsFound.forEach(function(albumData) {
                optionsAlbums += '<option value="' + albumData.id + '">' + albumData.name + '</option>'
            })
            $('#albums-selection').html(optionsAlbums)
        }
    })

})

$('#albums-selection').on('change', function(e) {
    var idAlbum = $(this).val();
    urlTracks = 'https://api.spotify.com/v1/albums/' + idAlbum + '/tracks'
    
    $.ajax({
        url: urlTracks,
        success: function(data) {
            var tracksFound = data.items
            var listTracks = ''
            tracksFound.forEach(function(trackData) {
                listTracks += '<li class="list-group-item"><a href="'+ trackData.external_urls.spotify +'" target="_blank">' + trackData.name + '</a></li>'
            })
            $('#tracks-selection').html(listTracks)
        }
    })
})
