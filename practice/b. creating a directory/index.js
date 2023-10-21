// creating a directory
const fs = require('fs')
const newFolder = 'folderCreated'
fs.mkdir(newFolder,(error)=>{
    if(error){
        console.log("Error creating directory :",error)
    }else{
        console.log("Directory created successfully!")
    }
})