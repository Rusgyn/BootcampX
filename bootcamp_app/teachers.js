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

/**Using parameterized query
 * 
 * The $1 placeholder will eventually get replaced with the actual
 * data from the values array. 
*/

const queryString = `
  SELECT DISTINCT cohorts.name as cohort, teachers.name as name
  FROM teachers
  JOIN assistance_requests ON teacher_id = teachers.id
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name = $1
  GROUP BY teachers.id, cohorts.name 
  ORDER BY name;
  `;

  const cohortName = process.argv[2] || 'JUL02';
  const values = [`${cohortName}`]; //Store all potentially malicious values in an array.

  pool
    .query(queryString,  values)
    .then((res) => {
      res.rows.forEach((user) => {
        console.log(`${user.cohort}: ${user.name}`
        );
      });
    })
    .catch((err) => console.error("Query error", err.stack));
  
  //INPUT: Run as 
  // node teachers.js JUL02 + Enter Key
  //OUTPUT: 
  // JUL02: Cheyanne Powlowski
  // JUL02: Georgiana Fahey
  // JUL02: Helmer Rodriguez
  // JUL02: Jadyn Bosco
  // JUL02: Roberto Towne
  // JUL02: Rosalyn Raynor
  // JUL02: Talon Gottlieb
  // JUL02: Waylon Boehm


//====================================================

/**Using node-postgres 
 * 
 * pool.query is a function that accepts an SQL query as a JavaScript string
*/

// pool
//   .query(
//     `
//     SELECT DISTINCT cohorts.name as cohort, teachers.name as name
//     FROM teachers
//     JOIN assistance_requests ON teacher_id = teachers.id
//     JOIN students ON students.id = student_id
//     JOIN cohorts ON cohorts.id = cohort_id
//     WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
//     GROUP BY teachers.id, cohorts.name 
//     ORDER BY name;
//     `
//   )
//   .then((res) => {
//     res.rows.forEach((user) => {
//       console.log(`${user.cohort}: ${user.name}`
//       );
//     });
//   })
//   .catch((err) => console.error("Query error", err.stack));