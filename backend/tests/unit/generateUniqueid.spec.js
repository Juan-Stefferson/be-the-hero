const generateUniqueId = require('../../src/utils/generateUniqueid');

describe('Generate Unique ID', ()=>{
it('shoud generate an unique id', ()=>{
    const id = generateUniqueId();


    expect (id).toHaveLength(8);
})


})