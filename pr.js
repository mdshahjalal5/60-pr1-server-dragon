const express = require('express');
const app = express();
const catagories = require('./data/categories.json')
const news = require('./data/news.json')
app.get('/', function(req, res){
    res.send('server starting');
})
app.get('/categories', (req, res)=>{
    res.send(catagories);
})
app.listen(5500, ()=>{
    console.log(`server is running on port 5500`);

})