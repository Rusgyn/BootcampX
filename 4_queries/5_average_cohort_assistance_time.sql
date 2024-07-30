-- Get the average duration of assistance requests for each cohort.

/*
1. Select the cohort's name and the average assistance request time.
2. Order the results from shortest average to longest.
*/

SELECT cohorts.name as name, avg(assistance_requests.completed_at - assistance_requests.started_at) as average_assistance_time
  FROM assistance_requests
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
  GROUP BY cohorts.name
  ORDER BY avg(assistance_requests.completed_at - assistance_requests.started_at);