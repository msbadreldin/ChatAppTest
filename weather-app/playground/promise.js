var somepromise = new Promise((resolve, reject) => {
resolve('task comleted successfully');
reject('Task failed')
})

somepromise.then((message) =>{
console.log(message);

}, (error)=>{
console.log(error);

})
