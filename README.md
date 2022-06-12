# Node + Express App to generate and serve task jobs completed and notified by Email

This app originally was coded as a fetcher/formatter for job emails, I changed it to generete dummy data for **personal** projects

## data format

```javastript
{
  "email":{
    "year":{
      "number_of_the_month_starting_by_0":{
        "day_of_the_month":{
          "Name_of_the_Job": Date_Object,
           }
        }
     }
   }
}
```
