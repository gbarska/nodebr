/*
0- get a user
1- get user's telephone number by id
2-get user's address by id
*/

function getUser(callback){
    setTimeout(
        function() {
        return callback(null,
            { id: 1, name: 'Aladin', dateOfBirth: new Date() }
            )
       }, 1000);
}


//callback is always the last parameter
function getTelephone(userId, callback){
    setTimeout( () => {
        return callback(null,
            { number: '44444444', ddd: '11'}
            )
       }, 1000);
}

function getAddress(userId, callback){
    setTimeout(() => {
        return callback(null, {
            street: 'London st',
            number: 0
        });
    });
}

// function resolveUser(error,user){
//     console.log('user', user)
// }


getUser(function resolveUser(error,user){
    // null || "" || 0 === false 
    if(error){
        console.log('There was a error while fetching user data', error);
        return;
    }

    getTelephone(user.id,function resolveTelephone(error1, telephone){
        if(error1){
            console.log('There was an error while fetching telephone data', error1);
            return;
        }


        getAddress(user.id,function resolveAddress(error2, address){
            if(error2){
                console.log('There was an error while fetching address data', error2);
                return;
            }
            console.log(`
            Nome: ${user.name},
            Address: ${address.street}, ${address.number}
            Telefone: (${telephone.ddd}) ${telephone.number}
            `)
        });
    
    });

   

})

// const user = getUser()
// const telephoneNumber = getTelephoneNumber(user.id)


// console.log('user', user)
// console.log('telephone number', telephoneNumber)
