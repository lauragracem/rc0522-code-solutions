-- select sum("amount") as "totalPaid",
--        "customerId",
--        "c"."firstName",
--        "c"."lastName"
-- from   "payments"
-- join   "customers" as "c" using ("customerId")
-- group by "amount",
--          "customerId"
-- order by "totalPaid" DESC;

select count("amount") as "total",
       "amount",
       "paymentId",
       "c"."firstName",
       "c"."lastName"
from   "payments"
join   "customers" as "c" using ("customerId")
where  "customerId" = '526'
group by "amount",
         "paymentId";
-- order by "sum" DESC;
