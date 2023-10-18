// Checking if directory of file in exist or not


const fs = require('fs')
const path = require('path')
const folderPath = './indexi'
const filePath = './indexi.txt'
if (fs.existsSync(folderPath)){
    console.log("The file is extsts.")
}else{
    console.log('The file is not exists.')
}
