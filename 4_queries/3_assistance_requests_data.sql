-- Get important data about each assistance request.
/*
1. Select the teacher's name, student's name, assignment's name if it has one, and the duration of each assistance request.
2. Subtract completed_at by started_at to find the duration.
3. Order by the duration of the request.
*/

SELECT teachers.name AS teacher, students.name as student, assignments.name as assignment, (assistance_requests.completed_at - assistance_requests.started_at) AS duration
  FROM assistance_requests
  JOIN assignments ON assignments.id = assignment_id
  JOIN teachers ON teachers.id = teacher_id
  JOIN students ON students.id = student_id
  ORDER BY duration;