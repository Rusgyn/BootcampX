// Using node-postgres, we can connect to our database without specifying any options:

const { Pool } = require('pg'); //using a Pool is the preferred way to query with node-postgres

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx",
});

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;

pool
  .query(
    `
      SELECT students.id as student_id, students.name as name, cohorts.name as cohort
      FROM students
      JOIN cohorts ON cohorts.id = cohort_id
      WHERE cohorts.name LIKE $1
      LIMIT $2;
      `, [`%${cohortName}%`, `${limit}`]
  )
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
    });
  })
  .catch((err) => console.error("query error", err.stack));