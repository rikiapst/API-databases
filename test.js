const { Pool, Client } = require('pg')
// pools will use environment variables
// for connection information

async function tester() {
  const pool = new Pool()
  pool.query("INSERT INTO person (first_name, last_name, gender, date_of_birth) VALUES ('Brian', 'Suga', 'MALE', date '1700-05-03')", (err, res) => {
    //console.log(err, res)
  })
}
console.log(process.env)
tester()
