// fetch('http://localhost:3000/weather?address=!').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error);

//         } else {
//             console.log(JSON.stringify(data, undefined, 2))
//         }

//     })
// })

var weatherForm = document.querySelector('form');
var address = document.querySelector('input')
var message1 = document.querySelector('#message-1')
var message2 = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    var location = encodeURIComponent(address.value)
    message1.textContent = 'Loading...';
    message2.textContent = '';
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message1.textContent = data.error;

            } else {
                message1.textContent = `Temperature: ${data.weather}`;
                message2.textContent = `Location: ${data.location}`;

            }

        })
    })
})


