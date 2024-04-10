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

/**
 * pool.query is a function that accepts an SQL query as a JavaScript string
 * Using the ` (backtick), we can write a multi line string like this to make our SQL look nicer. 
 * The function then returns a promise that contains our result when the query is successful.
 */
pool
  .query(
    
    // SELECT students.id as student_id, students.name as name, cohorts.name as cohort
    // FROM students
    // JOIN cohorts
    // ON students.cohort_id = cohorts.id
    // LIMIT 2;
    //OR BELOW CODE WITH PROCESS.ARGV, RUN AS node students.js 3 + Enter Key. The 3 is the limit (LIMIT 3;)
    `
    SELECT students.id as student_id, students.name as name, cohorts.name as cohort
    FROM students
    JOIN cohorts ON cohorts.id = cohort_id
    WHERE cohorts.name LIKE '%${process.argv[2]}%'
    LIMIT ${process.argv[3] || 5};
    `
  )
  
  // .then((res) => {
  //   console.log(res.rows);
  // })
  // .catch((err) => console.error("query error", err.stack));
  /**EXPECTED RESULT:
   * [
  { id: 1, name: 'Armand Hilll', cohort_id: 1 },
  { id: 2, name: 'Stephanie Wolff', cohort_id: 1 },
  { id: 3, name: 'Stan Miller', cohort_id: 1 },
  { id: 4, name: 'Elliot Dickinson', cohort_id: 1 },
  { id: 5, name: 'Lloyd Boehm', cohort_id: 1 }
]
  OR BELOW CODE */

  .then((res) => {
    res.rows.forEach((user) => {
      console.log(
        `${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`
      );
    });
  })
  .catch ((err) => console.error("query error", err.stack));

  /** EXPECTED RESULT
   * Armand Hilll has an id of 1 and was in the 1 cohort
students.js:37
Stephanie Wolff has an id of 2 and was in the 1 cohort
students.js:37
Stan Miller has an id of 3 and was in the 1 cohort
students.js:37
Elliot Dickinson has an id of 4 and was in the 1 cohort
students.js:37
Lloyd Boehm has an id of 5 and was in the 1 cohort
   */