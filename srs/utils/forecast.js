    const request = require('request')

    const forecast = (latitude, longitude, callback) => {
        const url = 'https://api.darksky.net/forecast/2a86fd9eee716e5a8fa790fc5976a4a4/'+ latitude +','+ longitude
       
        request({ url, json: true }, (error, { body }) => {
            if (error) {
                callback('Unable to connect to weather service!', undefined)
            } else if (body.error) {
                callback('Unable to find location', undefined)
            } else {
                callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out.  The high today temp : ' + body.daily.data[0].temperatureHigh + ' with a low of temp: ' + body.daily.data[0].temperatureLow + '.  There is a ' + body.currently.precipProbability + ' % chance of rain. ')
            }
        })
    }
    
    module.exports = forecast