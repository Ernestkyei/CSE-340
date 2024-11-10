const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, '/public')));


app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views'));



app.get('/', (req, res) =>{
    res.render('index');
});


app.get('/', (req, res) =>{
    req.send('Welcome Home');
})






const HOST = 'localhost';
const PORT = 8080

app.listen(PORT, () =>{
        console.log(`Trail app listening on port ${HOST}: ${PORT}`);
})

