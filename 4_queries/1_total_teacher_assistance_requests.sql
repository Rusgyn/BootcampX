-- Get the total number of assistance_requests for a teacher.

/*
1. Select the teacher's name and the total assistance requests.
2. Since this query needs to work with any specific teacher name, use 'Waylon Boehm' for the teacher's name here.
*/

SELECT count(assistance_requests.id) as total_assistance, teachers.name as name
  FROM assistance_requests
  JOIN teachers ON teachers.id = teacher_id
  WHERE teachers.name = 'Waylon Boehm'
  GROUP BY teachers.name;