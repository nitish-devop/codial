const express = require('express');
const app = express();
const port = 5000;

const server = app.listen(port,function(err){
    if(err) 
        console.log('Error : ',err);
    console.log(`Server is running on port ${port}`);
});