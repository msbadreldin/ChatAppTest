const request = require('request')

module.exports.getTemp = (cordinates, callback) => {
    request({
    url: `https://api.darksky.net/forecast/90f66a753567859c72d35cdc523ed320/${cordinates.lat},${cordinates.lng}`,
    json: true
}, (err, response, body) => {
    callback(undefined, body.currently.temperature);
    
})
}