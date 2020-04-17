// const yargs = require('yargs')
// const location = require('./geocode/geocode')
// const getTemp = require('./weatherInfo/weather')

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

// var encodedAddress = encodeURIComponent(argv.address);

// location.geocode(encodedAddress, (errorMessage, result) => {
//     if (errorMessage) {
//         console.log(errorMessage)
//     } else {
//         getTemp.getTemp(result, (err, temprature) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(temprature);
//             }
//         })
//     }

// })
