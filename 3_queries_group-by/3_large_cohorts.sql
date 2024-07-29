-- Get all cohorts with 18 or more students.

/*
Select the cohort name and the total students.
Order by total students from smallest to greatest.
*/

SELECT cohorts.name as cohort_name, count(students.id) as student_count
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  GROUP BY cohort_name
  HAVING count(students.id) >= 18
  ORDER BY student_count;