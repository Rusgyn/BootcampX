-- Get the average time of an assistance request.
/*
1. Select just a single row here and name it average_assistance_request_duration
2. In Postgres, we can subtract two timestamps to find the duration between them. (timestamp1 - timestamp2)
*/

SELECT avg(assistance_requests.completed_at-assistance_requests.started_at) as average_assistance_request_duration
  FROM assistance_requests;