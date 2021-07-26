const express =  require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// import post router from routes/posts
const postsRoute = require('./routes/posts');
const app = express();

app.use(bodyParser.json());
// everytime we hit http://localhost:3000/posts from the url this middleware will run and use the postsRoutes
app.use('/posts', postsRoute);

// db connection from .env
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('connected to the DB'));
    
    // dbase practice from mongodb atlas
    //mongodb+srv://admin:admin_password@cluster0.cmgfn.mongodb.net/Cluster0?retryWrites=true&w=majority

const PORT = process.env.PORT || 3000;


app.listen(PORT, console.log(`Server is running on localhost:${PORT}`));