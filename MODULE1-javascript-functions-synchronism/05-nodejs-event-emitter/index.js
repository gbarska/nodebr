const EventEmitter = require('events');

class MyEmitter extends EventEmitter{

}

const myEmitter = new MyEmitter();
const clickEvent = 'user:click';

myEmitter.on(clickEvent, function(click){
    console.log('a user has clicked', click);
})

//example that keep resolving 

// myEmitter.emit(clickEvent, 'scrollbar');
// myEmitter.emit(clickEvent,'okButton');

// let count = 0;

// setInterval(() => {
//     myEmitter.emit(clickEvent, 'okButton' + (count++));
// }, 1000);

const stdin = process.openStdin();


//example resolves once :

//promises are intended to be used with code that should be resolved only once ***IMPORTANT***
//whenever we need to keep listening to some data that might be resolved multiple times we should use eventemitters
function main(){
    return new Promise(function (resolve, reject){
        stdin.addListener('data', function (value){
            // console.log(`you wrote: ${value.toString().trim()}`);
            return resolve(value);
        });
    });
}

main().then(function(result){
    console.log('result', result.toString());
})