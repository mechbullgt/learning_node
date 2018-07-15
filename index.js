let request = require('request');

let apiKey = '2bf7bd4c08a19ea179c80c1a553b115e';
let cityname= 'Pune';
//let countrycode='IN';
let url= `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`;


request(url,function(err,response, body){
    if(err){
        console.log('URL:',url);
        console.log('error::',err);
    } else {
        console.log('URL:',url);
        console.log('body::',body);
    }
})