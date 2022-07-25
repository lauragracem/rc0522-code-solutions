select sum("amount") as "totalPaid",
       "customerId",
       "c"."firstName",
       "c"."lastName"
from   "payments"
join   "customers" as "c" using ("customerId")
group by "customerId"
order by "totalPaid" DESC;

-- select sum("amount") as "total",
--        "customerId",
--        "c"."firstName",
--        "c"."lastName"
-- from   "payments"
-- join   "customers" as "c" using ("customerId")
-- where  "customerId" = '526'
-- group by "customerId"
-- order by "sum" DESC;
