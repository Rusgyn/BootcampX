const { Pool } = require('pg');

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx",
});

const cohortName = process.argv[2] || 'JUL02';
const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM teachers
  JOIN assistance_requests ON teachers.id = teacher_id
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  ORDER BY teacher;
`;

pool
  .query(queryString,[`${cohortName}`])
  .then((res) => {
    res.rows.forEach((element) => {
      console.log(`${element.cohort}: ${element.teacher}`)
    }) 
  })
  .catch((error) => {
    console.error("Query Error", error.stack);
  });