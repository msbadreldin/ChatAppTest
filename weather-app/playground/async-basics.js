var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Mohamed'
    };
        callback(user)
}

getUser(10, (userObject)=>{console.log(userObject);
})