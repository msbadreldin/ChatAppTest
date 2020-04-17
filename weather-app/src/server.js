const express = require('express')
const hbs = require('hbs')
const fs = require('fs')
const weather = require('../app-promise')
const app = express()

hbs.registerPartials(__dirname + '/../views/partials')
hbs.registerHelper('getCurrentDate', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase()
})

app.set('view engine', 'hbs')

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    fs.appendFile('./server.log', log + '\n', (error) => {
        if (error) {
            console.log(error)
        }
    })
    next()
})

app.use(express.static('public'))

// app.use((req, res, next) => {
//     res.render('maintenance', {
//         title: 'This website is under maintenance'
//     })
// })

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        title: 'Weather',
        welcomeMessage: 'Welcome to my website'
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        title: 'About us'
    })
})

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        pageTitle: 'projects Page',
        title: 'Projects',
    })
})

app.get('/weather', (req, res) => { 
    if (!req.query.address){
        return res.send({
            error: 'Please provide the address',
            code: 400
        
        })
    }
    weather.getWeather(req.query.address).then((result) => {
        console.log(result);
        
        res.send({
            
            weather: result.temperature,
            location: result.location
        })
    }).catch((e) =>  {
        res.send({
           error: e.message
        })
    })
    
})


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server started listening to port ${port}`);

})