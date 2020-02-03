const service = require('./service');

Array.prototype.myMap = function (callback){
    const newMappedArray = [];
    for (let index = 0; index < this.length -1; index++) {
        const result = callback(this[index], index);
        newMappedArray.push(result);
    }
    return newMappedArray;
}

main()
async function main(){
    try{
    const result = await service.getPeople('a');
    
    // const names = [];
    // result.results.forEach((item) => {
    //     names.push(item.name);
    // });

    // const names = result.results.map( item => item.name );   

    const names = result.results.myMap(function(item, index){
        return `[${index}] - ${item.name}`;
    });

    console.log(`names`, names);
    }
    catch(error){
        console.error(error);
    }
}