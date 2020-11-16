// import stuff
const express = require('express')
const app=express()
// create at least 1 route
app.get('/', (req,res) =>{
    res.send('hello from the other side')
})
//app.listen
app.listen(8000, ()=>{
    console.log('server has started');
});