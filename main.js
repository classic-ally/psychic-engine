//Dependencies? What are those?
var WebTorrent = require('webtorrent')

      var torrentId = "magnet:?xt=urn:btih:256f0b2aad3d10b735fdee22bf71332186071cff&dn=UW+From+Above.m4v&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com"
      var client = new WebTorrent()

      client.on('error', function (err) {
        console.error('ERROR: ' + err.message)
      })

      client.add(torrentId, onTorrent)
      

      function onTorrent (torrent) {
        // Render all files into to the page
        torrent.files.forEach(function (file) {
          file.appendTo('.log')
          //render.append(file)
        })
      }

      function log (str) {
        var p = document.createElement('p')
        p.innerHTML = str
        document.querySelector('.log').appendChild(p)
      }
//require('render-media')
