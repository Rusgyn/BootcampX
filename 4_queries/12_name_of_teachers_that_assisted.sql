-- Name of Teachers That Assisted

/*
1. Select the instructor's name and the cohort's name.
2. Don't repeat the instructor's name in the results list.
3. Order by the instructor's name.
4. This query needs to select data for a cohort with a specific name, use 'JUL02' for the cohort's name here.
*/

SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM teachers
  JOIN assistance_requests ON teachers.id = teacher_id
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name = 'JUL02'
  ORDER BY teacher;