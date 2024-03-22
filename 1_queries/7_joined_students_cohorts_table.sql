-- SELECT name, email, cohort_id
-- FROM students;

-- SELECT students.name as student_name, email, cohorts.name as cohort_name
-- FROM students JOIN cohorts ON cohorts.id = cohort_id;

-- OR

-- SELECT students.name as student_name, email as student_email, cohorts.name as cohort_name
-- FROM students INNER JOIN cohorts ON cohorts.id = cohort_id;

-- SELECT students.name as student_name, email, cohorts.name as cohort_name
-- FROM students FULL OUTER JOIN cohorts ON cohorts.id = cohort_id;

SELECT students.name as student_name, cohorts.name as cohort_name, cohorts.start_date as cohort_start_date, students.start_date as student_start_date
FROM students
JOIN cohorts on cohorts.id = cohort_id
WHERE students.start_date != cohorts.start_date
ORDER BY cohorts.start_date;