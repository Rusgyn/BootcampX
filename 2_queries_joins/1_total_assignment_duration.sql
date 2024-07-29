-- Get the total amount of time that a student has spent on all assignments.

SELECT sum(duration) as total_duration
  FROM assignment_submissions
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name = 'FEB12';