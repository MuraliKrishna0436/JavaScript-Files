const exJS = require('express')
const file = exJS()

file.listen(1111,()=>{
    console.log("Server Connected...")
})
file.get('/getRequest', (req, res)=>{
    
    res.sendFile(__dirname+'/Html Workspace.html')
})
file.post('/postRequest',(req, res)=>{
    res.send("Post the Request...")
})
file.put('/putRequest',(req, res)=>{
    res.send("Put the Request...")
})
file.delete('/deleteRequest',(req, res)=>{
    res.send("Delete the Request...")
})