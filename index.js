const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const { nextTick } = require('process');
app.use(bodyParser.urlencoded({
    extended: false
}))

app.listen(3000, console.log('listening on 3000'));
app.use(express.static('public'));


app.get('/homepage.html', (req, res)=> {
    app.send('homepage.html');
})

app.get('/homepage.html/Thankyou', (req, res)=> {
    app.send('homepage.html/Thankyou');
})

app.post('/homepage.html', (req, res)=>{
    console.log(req.body.name_field);
    res.redirect(303, 'Thankyou');
})

