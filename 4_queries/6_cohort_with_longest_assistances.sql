-- Get the cohort with the longest average duration of assistance requests.
/*
The same requirements as the previous query, but only return the single row with the longest average.
*/

SELECT cohorts.name as name, avg(assistance_requests.completed_at - assistance_requests.started_at) as average_assistance_time
  FROM assistance_requests
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
  GROUP BY cohorts.name
  ORDER BY avg(assistance_requests.completed_at - assistance_requests.started_at) DESC
  LIMIT 1;