const service = require('./service');

main()
async function main(){
    try{
    const result = await service.getPeople('a');
    const names = [];

    // FOR 
    // console.time('for');
    // for (let index = 0; index < result.results.length -1; index++) {
    //     const person = result.results[index];
    //     names.push(person.name);
    // }
    // console.timeEnd('for');

    // FOR - IN
    // console.time('for-in');
    // for (let index in result.results) {
    //     const person = result.results[index];
    //     names.push(person.name);
    // }
    // console.timeEnd('for-in');

    //FOR - OF
    console.time('for-of');
    for (let person of result.results) {
        names.push(person.name);
    }
    console.timeEnd('for-of');


    console.log(`names`, names);

    }
    catch(error){
        console.error(error);
    }
}