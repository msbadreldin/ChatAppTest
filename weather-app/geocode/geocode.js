const request = require('request')

module.exports.geocode = (address, callback) => {
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDG-Hoar31C8Ed9c48SNl9c1Y9yqa1no-c&address=${address}`,
        json: true
    }, (err, response, body) => {
        if (err) {
            switch (err.code) {
                case 'ENOTFOUND':
                    callback('Unable to connect google servers')

                    break;

                default:
                    callback(err)
                    break;
            }



            // if (err.code === 'ENOTFOUND'){
            //     callback('Unable to connect google servers')
            // } else {
            //     callback(err)
            // }

        } else {
            callback(undefined, {
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            })
        }

    })
}