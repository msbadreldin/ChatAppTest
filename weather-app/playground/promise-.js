const yargs = require('yargs')
const request = require('request')
// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })

//     .help()
//     .alias('help', 'h')
//     .argv;

var encodedAddress = encodeURIComponent('EL Mahallah El Kubra Egypt');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        
            request({
                url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDG-Hoar31C8Ed9c48SNl9c1Y9yqa1no-c&address=${address}`,
                json: true
            }, (err, response, body) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(JSON.stringify(body, undefined, 2))
                }
            })
        
    })
}

geocodeAddress(encodedAddress).then((cordinates) => {
    console.log(cordinates);

}, (errorMessage) => {
    console.log(errorMessage);

})