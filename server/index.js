const express = require('express');
const geoip = require('geoip-lite');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

// 
async function getWeatherData(city) {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&apikey=${process.env.API_KEY}`;
    try {
      return (await fetch(weatherURL)).json();
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  }

app.get('/api/hello?', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    // const ip = '207.97.227.239';
    const location = geoip.lookup(ip).city;
    const visitor_name = req.query.visitor_name;
    if (!visitor_name) return res.json({'message': 'Visitor\'s name cannot be left empty'});
    getWeatherData(location)
    .then(data => {
        return res.json({
            'client_ip': ip,
            'location': location,
            'greeting': 'Hello, ' + visitor_name + '!, the temperature is ' + Math.round(data.main.temp) + ' degrees Celcius in ' + location
        })
    })
    .catch(error => console.error(error));
});

app.listen(port, console.log(`server running on port ${port}`));
