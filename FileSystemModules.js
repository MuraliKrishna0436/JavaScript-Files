let fs = require('fs')

// For Reading the file we use this format

 fs.readFile('./Sample.txt',(err,data)=>{
     if(err){
         console.log("file not found")
     }
     else{
         console.log("File is Openend")
         console.log(data.toString())
     }
 })

   // To write the File we use "Write" command, and also we use "append" command for adding the data
/*
fs.writeFile('./sample2.txt', "Creating a file", (err,data)=>{
    if(err){
        console.log("File not added")
    }
    else{
        console.log("Found Data...")
        console.log(data)
    }
})

  // To delete the data...
/*
fs.unlink('./sample1.txt',  (err)=>{
    if(err){
        console.log("File not deleted/File Already Deleted")
    }
    else{
        console.log("Found File...")
        console.log("File Removed Successfully")
    }
})
*/
    // To Create the Folder...
/*
fs.mkdir('./Folder/Sub1/', (err)=>{
    if(err){
        console.log("Folder is not created")
    }
    else{
        console.log("Folder Created Successfully")
    }
})
*/

  // To remove the empty folder we use this command.
/* 
  fs.rmdir('./Folder',(err)=>{
    if(err){
        console.log("Folder is not deleted")
    }
    else{
        console.log("Folder Found")
        console.log("Folder Deleted Successfully")
    }
  })
*/
  // To read the sub-folders in the main folder
 /*
  fs.readdir('./Folder', (err, data)=>{
    if(err){
        console.log("Folder is not opened...")
    }
    else{
        console.log("Folder is Opened.." + data)
        for(f of data){
            fs.readdir('./Folder/' + f, (err, subdata)=>{
                if (err) {
                    console.log("Errors found")
                } else {
                    console.log(subdata)
                }
            })
        }
    }
  })
*/

console.log("Testing the file")