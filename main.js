const express = require('express');
const axios = require('axios');

const app = express();
app.get(
    '/test', (req, res) => {
        res.send({test: "response"})
    }
)
app.get(
    '/covid1', async (req, res) => {
        let result = await axios.get("https://api.covidactnow.org/v2/states.timeseries.json?apiKey=1d9cf98a81ae4e4f81b8d05461166186");
        let item = result.data[0]
        res.send(
            {
                country: item.country,
                state: item.state,
                population: item.population,
                infectionRate: item.metrics.infectionRate
            }
        )
    }
)
app.get(
    '/covid2', async (req, res) => {
        let result = await axios.get("https://api.covidactnow.org/v2/states.timeseries.json?apiKey=1d9cf98a81ae4e4f81b8d05461166186");
        let item = result.data[1]
        res.send(
            {
                country: item.country,
                state: item.state,
                population: item.population,
                infectionRate: item.metrics.infectionRate
            }
        )
    }
)
app.listen(3000, () => console.log('listening at Port 3000'))
app.use(express.static('public'))