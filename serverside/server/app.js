const dotenv=require('dotenv');

const express= require ('express');

const app= express();
var cors = require('cors');


dotenv.config({ path:'./config.env'});
require('./conn.js');



app.use(express.json())

app.use(require('../server/auth.js'));
app.use(cors())

const PORT= process.env.PORT;
app.get('/',  (req, res)=>{
    res.cookie("myfirstcookie", 'ali');
    res.send('hello contact server');
});


console.log("running ");
app.listen(PORT, ()=>{
    console.log("running port");
});


