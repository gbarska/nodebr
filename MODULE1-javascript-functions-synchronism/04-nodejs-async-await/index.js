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


// 1- add the keyword: async -> it will automatically return a Promise
main()
async function main(){
    try{
        console.time('time-promise')
        const user = await getUser();
        
        //this way the code takes more time to handle because we added two await in the process separetely
        // const telephone = await getTelephone(user.id);
        // const address = await getAddressAsync(user.id);
        //it would be a need process if one of the promises depending on the other example: if address depend of telephone's result


        //with Promise.all we create a pipe with an array of promises but that don't need to wait the other promise
        //to get fullfiled before handling eachother
        const result = await Promise.all([
            getTelephone(user.id),
            getAddressAsync(user.id)
        ]);   

        const telephone = result[0];
        const address = result[1];

        console.log(`
                     Name: ${user.name}
                     Telephone: (${telephone.ddd}) ${telephone.number}
                     Address: ${address.street}, ${address.number} 
                 `);

        console.timeEnd('time-promise');
    }
    catch{
        console.log('There was an error',error);
    }
}

// const userPromise = getUser()
// //to handle success we call -> .then()
// //to handle error we call -> .catch()
// userPromise
//     //the resolver returned on the previous promise is piped to the next .then() and so on
//     .then(function (user){
//         return getTelephone(user.id)
//             .then(function resolverTelephone(result){
//                 return {
//                     user: {
//                         name: user.name,
//                         id: user.id
//                     },
//                     telephone: result                
//                 }
//             });
//     })
//     .then(function (userAndTelephone){
//         const address = getAddressAsync(userAndTelephone.user.id)
//         return address.then(function resolverAddress(address){
//             return {
//                 user: userAndTelephone.user,
//                 telephone: userAndTelephone.telephone,
//                 address: address
//             }
//         });
//     })
//     .then(function (result){
//         console.log(`
//             Name: ${result.user.name}
//             Telephone: (${result.telephone.ddd}) ${result.telephone.number}
//             Address: ${result.address.street}, ${result.address.number} 
//         `);
//     })
//     .catch(function (error){
//         console.log('Error', error);
//     });
