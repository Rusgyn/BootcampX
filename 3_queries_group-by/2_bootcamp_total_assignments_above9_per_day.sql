-- The same query as before, but only return rows where total assignments is greater than or equal to 10.

SELECT day, count(id) as total_assignments
  FROM assignments
  GROUP BY day
  HAVING count(id) >= 10
  ORDER BY day;