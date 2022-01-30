const axios = require('axios');
const { Pool, Client } = require('pg')


const pool = new Pool()


async function start_app() {
    let result = await axios.get("https://api.covidactnow.org/v2/states.timeseries.json?apiKey=1d9cf98a81ae4e4f81b8d05461166186");

    for (let i = 0; i < result.data.length; i++) {
        let item = result.data[i]
        pool.query(`INSERT INTO covid1 (country, state, population, infectionRate) VALUES ('${item.country}', '${item.state}', '${item.population}', '${item.metrics.infectionRate}')`, (err, res) => {
            //console.log(err, res)
            //console.log(item)
        })
    }
}

//console.log(process.env)
start_app();
