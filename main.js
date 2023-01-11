const axios = require('axios');

async function getData() {
    let data = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data.data
}

getData()
    .then((a) => console.log(a))
