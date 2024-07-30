-- Calculate the average total duration of assistance requests for each cohort.
/*
1. Use the previous query as a sub query to determine the duration per cohort.
2. Return a single row average_total_duration
*/

SELECT avg(total_duration) as average_total_duration
FROM (
  SELECT cohorts.name as cohort, sum(completed_at - started_at) as total_duration
    FROM assistance_requests
    JOIN students ON students.id = student_id
    JOIN cohorts ON cohorts.id = cohort_id
    GROUP BY cohorts.name
    ORDER BY total_duration
) as total_duration;