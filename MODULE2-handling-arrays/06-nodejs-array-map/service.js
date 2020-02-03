const axios = require('axios');
const URL = `https://swapi.co/api/people`;

async function getPeople(name){
    const url = `${URL}/?search=${name}&format=json`
    const response = await axios.get(url)
    return response.data;
}

module.exports = {
    getPeople
}

//testing 

// getPeople('r2')
//     .then(function (result){
//         console.log('result',result);
//     })
//     .catch(function (error){
//         console.log('There was an error', error);
//     })