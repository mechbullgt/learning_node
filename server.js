const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const apiKey = '2bf7bd4c08a19ea179c80c1a553b115e';
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    // resp.send('Hello Maqbool!')
    // resp.render('index');
    res.render('index', {
        weather: null, 
        error: null
    });
});

app.post('/', function (req, res) {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    request(url, function (err, response, body) {
        if (err) {
            res.render('index', { weather: null, error: 'Error, please try again' });
        } else {
            let weather = JSON.parse(body)
            if (weather.main == undefined) {
                res.render('index', { weather: null, error: 'Error, please try again' });
            } else {
                let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                let descriptionText = `Weather Description: ${weather.description}`;
                res.render('index', { weather: weatherText, error: null });
                // res.render('index', { weather: descriptionText, error: null });
                console.log("Response:",weather);
                console.log('Message', weatherText);
            }
        }
    });
});

app.listen(3000, function () {
    console.log('Listening at 3000');
})

