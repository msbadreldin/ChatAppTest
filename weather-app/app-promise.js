const yargs = require('yargs')
const axios = require('axios')


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



// axios.get(geolocationURL)
//     .then((response) => {
//         if (response.data.status === 'ZERO_RESULTS') {
//             throw new Error('Unable to get this address')
//         }
//         var lat = response.data.results[0].geometry.location.lat;
//         var lng = response.data.results[0].geometry.location.lng;
//         var weatherURL = `https://api.darksky.net/forecast/90f66a753567859c72d35cdc523ed320/${lat},${lng}`;

//         var address = response.data.results[0].formatted_address
//         console.log(address)
//         return axios.get(weatherURL)

//     }).then((response) => {
//         var temperature = response.data.currently.temperature;
//         console.log(`Cuurent temperature is ${temperature} in ${address}`)

//     }).catch((e) => {
//         if (e.code === 'ENOTFOUND') {
//             console.log('unable to connect to API servers');
//         } else {
//             console.log(e.message);
//         }

//     })
// How to pass avariable from then to another? like address in previous example
// Here is the solution

module.exports.getWeather = async (address) => {
    try {
        var encodedAddress = encodeURIComponent(address);
        var geolocationURL = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDG-Hoar31C8Ed9c48SNl9c1Y9yqa1no-c&address=${encodedAddress}`;
        const cordinates = await axios.get(geolocationURL);
        if (cordinates.data.status === 'OK') {
            this.address = cordinates.data.results[0].formatted_address;
            var lat = cordinates.data.results[0].geometry.location.lat;
            var lng = cordinates.data.results[0].geometry.location.lng;
        }

    } catch (error) {
        throw new Error(`Unable to get data for this address ${address}`)
    };

    try {
        var weatherURL = `https://api.darksky.net/forecast/90f66a753567859c72d35cdc523ed320/${lat},${lng}`;
        const weather = await axios.get(weatherURL);
        this.temperature = weather.data.currently.temperature
        return {
            temperature: this.temperature,
            location: this.address
        }
    } catch (error) {
        throw new Error('unable to fitch data for this address, please try another')
    }
}



