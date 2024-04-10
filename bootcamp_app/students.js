// using node-postgres to connect to dbase.
// Connect to the bootcampx database in students.js 

const { Pool } = require("pg");

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx",
});

pool.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

/**Using parameterized query
 * 
 * The $1 and $2 placeholders will eventually get replaced with the actual
 * data from the values array. 
*/

const queryString = `
  SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  LIMIT $2;
  `;

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
//Store all potentially malicious values in an array.
const values = [`%${cohortName}%`, limit];

pool
  .query(queryString, values)
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(
        `${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`
      );
    });
  })
  .catch ((err) => console.error("query error", err.stack));

//INPUT: Run as 
// node students.js FEB 3 + Enter Key
//OUTPUT: 
// Stephanie Wolff has an id of 2 and was in the FEB12 cohort
// Stan Miller has an id of 3 and was in the FEB12 cohort
// Elliot Dickinson has an id of 4 and was in the FEB12 cohort


//====================================================

/**Using node-postgres 
 * 
 * pool.query is a function that accepts an SQL query as a JavaScript string
*/

// pool
//   .query(
//     `
//     SELECT students.id as student_id, students.name as name, cohorts.name as cohort
//     FROM students
//     JOIN cohorts ON cohorts.id = cohort_id
//     WHERE cohorts.name LIKE '%${process.argv[2]}%'
//     LIMIT ${process.argv[3] || 5};
//     `
//     //RUN AS node students.js 4 + Enter Key. The 4 is the limit (LIMIT 4;)
// //   )
//   .then((res) => {
//     res.rows.forEach((user) => {
//       console.log(
//         `${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`
//       );
//     });
//   })
//   .catch ((err) => console.error("query error", err.stack));