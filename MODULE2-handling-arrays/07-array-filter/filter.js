//DESTRUCT JS
/*
const item = {
name = 'gbarska',
id = 0
}

//technique destruct - it creates an object with the content specified by the name 

const { name, id } =  item;

console.log(name);
console.log(id);
*/

//using destruct to create an object called getPeople from the imported file
const { getPeople }  = require('./service');


Array.prototype.myFilter = function(callback){
    const list = [];
    for(index in this){
        const item = this[index];
        const result = callback(item, index, this);

        // 0 || "" || null || undefined === false
        if (!result) continue;
        list.push(item);        
    }
    return list;
}

main()
async function main(){
    try{
    const { results } = await getPeople('a');
  
    //the function inside the filter must return an boolean value
    //that will be used to decide what values should or shouldn't be filtered 
    //checks every item on the array against the condition:
    //false -> removes
    //true -> keep
    // const larsFamily = results.filter((item) => {
    //     const result = item.name.toLowerCase().indexOf(`lars`) !== -1;
    //     return result;
    // });

    const larsFamily = results.myFilter((item, index, list) => {
        console.log(`index: ${index}`, list.length);
        return item.name.toLowerCase().indexOf('lars') !== -1;
    }); 

    const names = larsFamily.map(item => item.name);

    console.log(`names`, names);
    }
    catch(error){
        console.error(error);
    }
}