const { Pool, Client } = require('pg')
// pools will use environment variables
// for connection information

async function tester() {
  const pool = new Pool()
  pool.query("INSERT INTO person (first_name, last_name, gender, date_of_birth) VALUES ('Rana', 'Smith', 'FEMALE', date '1980-10-07')", (err, res) => {
    //console.log(err, res)
  })
}
console.log(process.env)
tester()
