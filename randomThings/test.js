// Custome module
const ustils = require("./indexa");
console.log("Custom module:",ustils);
// const utils=require('/home/anand/office/node/nodeJSCrud/a_index.js');


const result = ustils.add(2, 3);
const result1 = ustils.substract(2, 1);
console.warn("Add function called:",result);
console.warn("Substract function called:",result1);

 