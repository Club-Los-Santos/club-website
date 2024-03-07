
var query = require('samp-query')

var options = {
    host: 'gta.clubroleplay.com',
    port: 7776
}

query(options, function (error, response) {
    if(error)
        console.log(error)
    else 
    {
        document.getElementById('player-count').textContent = `${response.online} players online`;
    }
    
})