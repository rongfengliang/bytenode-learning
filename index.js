require('bytenode');
const myModule = require("./app.jsc")
console.log(myModule)

async function demoapp(){

    let result = await myModule.demo()

    console.log(result)
}
demoapp()