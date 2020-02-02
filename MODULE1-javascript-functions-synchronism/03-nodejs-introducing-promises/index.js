/*
0- get a user
1- get user's telephone number by id
2-get user's address by id
*/

//import an internal module of nodejs
const util = require('util')
const getAddressAsync = util.promisify(getAddress)

function getUser(){
    //when fetched successfully calls -> resolve
    //if an error occurs calls -> reject
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() => {         
            //example of throwing an error
            // return reject(new Error('There was an extremely big error!'))
            return resolve({
                 id: 1,
                 name: 'Aladin',
                 dateOfBirth: new Date()
                 }
                )
           }, 1000);
    });  
}

//convention: callback is always the last parameter
function getTelephone(userId){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                 number: '44444444',
                 ddd: '11'
                }
                );
           }, 2000);
    });
}

//convention: callback is always the last parameter
//this function will be converted to a promise automatically by the promisify function ***
function getAddress(userId, callback){
    setTimeout(() => {
        return callback(null, {
            street: 'London st',
            number: 0
        });
    });
}

const userPromise = getUser()
//to handle success we call -> .then()
//to handle error we call -> .catch()
userPromise
    //the resolver returned on the previous promise is piped to the next .then() and so on
    .then(function (user){
        return getTelephone(user.id)
            .then(function resolverTelephone(result){
                return {
                    user: {
                        name: user.name,
                        id: user.id
                    },
                    telephone: result                
                }
            });
    })
    .then(function (userAndTelephone){
        const address = getAddressAsync(userAndTelephone.user.id)
        return address.then(function resolverAddress(address){
            return {
                user: userAndTelephone.user,
                telephone: userAndTelephone.telephone,
                address: address
            }
        });
    })
    .then(function (result){
        console.log(`
            Name: ${result.user.name}
            Telephone: (${result.telephone.ddd}) ${result.telephone.number}
            Address: ${result.address.street}, ${result.address.number} 
        `);
    })
    .catch(function (error){
        console.log('Error', error);
    });
