This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Project Plan :

Schemas :

Package Schema
{
\_id : uuid()
tracking_id : string
carrier_name : string [USPS, UPS , FEDEX]
sender : {
name:string
img_url : string | null
}
tracking_history : [strings]
status : ["delivered","in_transit", "out_for_delivery", .....]
tracking_url : string
last_modified : date
Origin
Destination
}

Maybe ?
give product image to front end
if no tracking data allow user to input
search route()

front next js app router
database: mongodb
backend : Fast API

Routes :
await scrapeData() as soon as user logs in scrape the data and store and show a loader
have a button in the front end and then call it as well

have an infinite while loop with sleep(5 ? ) to call updateParcelData()

updateParcelData()
hit the tracking api to get updated data
