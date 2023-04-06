const express = require('express');
const app = express();
const port = 5000;

app.use(require('express-ejs-layouts'));

//use express router
app.use('/',require('./routes/index'));

// set ejs and setup views
app.set('view engine','ejs');
app.set('views','./views');



const server = app.listen(port,function(err){
    if(err) 
        console.log('Error : ',err);
    console.log(`Server is running on port ${port}`);
});