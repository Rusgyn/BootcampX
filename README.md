# BootcampX

This application is currently under the project code name BootcampX. The app will allow LHL staff to help students and mentors better and faster by offering quick insight into data like assignment completion and the effectiveness of assistance requests.

## Getting Started

1. Create a new directory called BootcampX
2. Create a database called bootcampx. You will have to enter \c bootcampx every time you enter a new psql session to make sure that you're using the correct database.
3. Create a folder called migrations within the BootcampX folder.
Inside migrations, create a new file called students_cohorts.sql
Take a moment to try writing the CREATE TABLE statements yourself for students and cohorts. Use the ERD to help.
4. Add the tables to the database.
5. From your psql session, type \i migrations/students_cohorts.sql
6. Now enter \dt into your psql session to make sure the two tables have been created.
7. Download the .sql files with the fake data in them.