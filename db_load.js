const axios = require('axios');
require('dotenv').config();
const { Pool, Client } = require('pg')


const pool = new Pool()


async function start_app() {
    let result = await axios.get("https://api.covidactnow.org/v2/states.timeseries.json?apiKey=1d9cf98a81ae4e4f81b8d05461166186");

    for (let i = 0; i < result.data.length; i++) {
        let item = result.data[i]
        pool.query(`INSERT INTO covid (country, state, population, infectionRate) VALUES ('${item.country}', '${item.state}', '${item.population}', '${item.metrics.infectionRate}')`, (err, res) => {
        })
    }
    let item1 = result.data[0]
    pool.query(`INSERT INTO covid1 (country, state, population, infectionRate) VALUES ('${item1.country}', '${item1.state}', '${item1.population}', '${item1.metrics.infectionRate}')`, (err, res) => {
    })
    let item2 = result.data[1]
    pool.query(`INSERT INTO covid2 (country, state, population, infectionRate) VALUES ('${item2.country}', '${item2.state}', '${item2.population}', '${item2.metrics.infectionRate}')`, (err, res) => {
    })

}

console.log(process.env)
start_app();
