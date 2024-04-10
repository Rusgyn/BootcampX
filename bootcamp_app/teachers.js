const { Pool } = require("pg");

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx",
})

pool.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

pool
  .query(
    `
    SELECT DISTINCT cohorts.name as cohort, teachers.name as name
    FROM teachers
    JOIN assistance_requests ON teacher_id = teachers.id
    JOIN students ON students.id = student_id
    JOIN cohorts ON cohorts.id = cohort_id
    WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
    GROUP BY teachers.id, cohorts.name 
    ORDER BY name;
    `
  )
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(`${user.cohort}: ${user.name}`
      );
    });
  })
  .catch((err) => console.error("Query error", err.stack));