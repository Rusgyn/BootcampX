-- Get each day with the total number of assignments and the total duration of the assignments.

/*
1. Select the day, number of assignments, and the total duration of assignments.
2. Order the results by the day.
*/

SELECT day, count(*) AS number_of_assignments, sum(duration) AS duration
  FROM assignments
  GROUP BY day
  ORDER BY day;