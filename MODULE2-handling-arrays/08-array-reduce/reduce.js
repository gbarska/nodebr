//using destruct to create an object called getPeople from the imported file
const { getPeople }  = require('./service');

Array.prototype.myReduce = function (callback, initialValue) {
   let finalValue = typeof initialValue !== undefined ? initialValue : this[0];
    for (let index = 0; index <= this.length -1; index++) {
        finalValue = callback(finalValue, this[index], this);
    }
    return finalValue;
}

main()
async function main(){
    try{
    // const { results } = await getPeople('a');
    // console.log(results);

    // const heights = results.map(item => parseInt(item.height));
    // console.log(`heights`, heights);
    
    //second parameter: initial value in case you pass an empty array it's a good practice to pass 0 as initial
    // const total = heights.reduce( (previous, next) =>{
    //     return previous + next;
    // },0);

    const myList = [
        ['Erick', 'Wendel'],
        ['NodeBR', 'Nerdzão']
    ];

    const total = myList.myReduce((previous, next) => {
        return previous.concat(next);
    },[])
        .join(', ');

    console.log(`total`, total);
    }
    catch(error){
        console.error(error);
    }
}