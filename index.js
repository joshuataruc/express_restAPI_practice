const express =  require('express');
const mongoose  = require('mongoose');
require('dotenv');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('we are on home');
})

app.listen(PORT, console.log(`Server is running on localhost:${PORT}`));

mongoose.connect('mongodb+srv://admin:<admin_password>@cluster0.cmgfn.mongodb.net/Cluster0?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to the DB'));

// dbase practice from mongodb atlas
//mongodb+srv://admin:<admin_password>@cluster0.cmgfn.mongodb.net/Cluster0?retryWrites=true&w=majority