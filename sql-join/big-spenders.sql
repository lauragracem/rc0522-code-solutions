select "c"."firstName" as "firstName",
       "c"."lastName" as "lastName",
       "p"."amount" as "payments"
from "customers" as "c"
join "payments" as "p" using ("customerId")
order by "payments" desc
limit 10;
