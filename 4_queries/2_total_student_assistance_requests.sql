-- Get the total number of assistance_requests for a student.
/*
1. Select the student's name and the total assistance requests.
2. Since this query needs to work with any specific student name, use 'Elliot Dickinson' for the student's name here.
*/

SELECT count(assistance_requests.id) as total_assistances, students.name as name
  FROM assistance_requests
  JOIN students ON students.id = student_id
  WHERE name = 'Elliot Dickinson'
  GROUP BY students.name;