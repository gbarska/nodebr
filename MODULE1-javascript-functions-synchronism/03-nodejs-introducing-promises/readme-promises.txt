Pending: initial state, it is not finished yet or it wasn't rejected

Fullfiled: when it has already been executed with success

Rejected: when operation has failed

//handling promises:

2 functions can be used: 

//success 

.then(resolverWhenFinished)

//or Rejected

.catch(handleError)

error handling:

.catch(handleError)

// or second parameter to .then(,)

.then(resolverWhenFinished, handleError)


