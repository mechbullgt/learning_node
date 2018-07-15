let request = require('request');
const argv = require('yargs').argv;
const express   = require('express');
const app = express();

app.get('/',function(request,response){
    response.send('Hello Maqbool!')
})

app.listen(3000,function(){
    console.log('Listening at 3000');
})

let apiKey = '2bf7bd4c08a19ea179c80c1a553b115e';
// let cityname= 'Pune';
let cityname = argv.c || 'Pune';
//let countrycode='IN';
let url= `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`;
let message = null;

request(url,function(err,response, body){
    if(err){
        console.log('URL:',url);
        console.log('error::',err);
    } else {
        let weatherJSON = JSON.parse(body);
        // console.log('body:',body);
        // console.log('json:',weatherJSON);
        message=`It's ${weatherJSON.main.temp} oC in ${cityname}`;
        console.log('Message:',message);
    }
})