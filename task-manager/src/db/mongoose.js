const mongoose = require('mongoose')
const validator = require('validator')
const express = require('express')
const User = require('../models/users')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const app = express()



// const mohamed = new User({
//     name: 'Mohamed',
//     email: 'msbadreldin@gmail.com',
//     password: 'mohamed@1234',
//     age: 35
// })

// mohamed.save().then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(`error: ${error}`)
// })



// const project = new Tasks({
//     description: '  develop the website  ',

// })

// project.save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`app started listening to port ${port}`);    
})