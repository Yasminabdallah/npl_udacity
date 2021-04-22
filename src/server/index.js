var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('dist'))
dotenv.config();

app.post('/fetch', function (req, res) {
    const userUrl = req.body.url;
    const appKey = process.env.API_KEY;
    const appUrl = process.env.API_URL;
    let apiUrl = `${appUrl}?key=${appKey}&url=${userUrl}&lang=en`;
    
    fetch(apiUrl).then((response) => {
        return response.json();
    })
    .then(data => {
        if(data.status.msg ==="OK") {
            return res.send(data);
        } else {
            throw new Error(`The HTTP status of the reponse: ${JSON.stringify(data.status)}`);
        }
    })
    .catch(error => {
        console.log("error");
    })

})

app.get('/', function (req, res) {

    res.sendFile(path.resolve('dist/index.html'))
})

let port = process.env.PORT || 8081;
// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log('Example app listening on port 8081!')
})

