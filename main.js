const express = require('express');
const axios = require('axios');
const app = express();
const { Pool, Client } = require('pg')



const pool = new Pool()



async function start_app() {
    let result = await axios.get("https://api.covidactnow.org/v2/states.timeseries.json?apiKey=1d9cf98a81ae4e4f81b8d05461166186");
    app.get(
        '/test', (req, res) => {
            res.send({ test: "response" })
        }
    )
    app.get(
        '/covid1', (req, res) => {
            let item = result.data[0]
            res.send(
                {
                    country: item.country,
                    state: item.state,
                    population: item.population,
                    infectionRate: item.metrics.infectionRate
                }
            )
            pool.query(`INSERT INTO covid1 (country, state, population, infectionRate) VALUES ('${item.country}', '${item.state}', '${item.population}', '${item.metrics.infectionRate}')`, (err, res) => {
                console.log(err, res)
            })

        }
    )
    app.get(
        '/covid2', (req, res) => {
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
}
console.log(process.env)
start_app();
