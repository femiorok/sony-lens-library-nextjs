## Sony Training App 

**What is this app for?**

This app is a project I'm working on to centralize all relavant information for anyone who sells Sony photography gear, particularly in large retail stores. This app creates an easier, more streamlined way to:

* Check Stock
* View detailed specs on a variety of gear
* Compare the specs on gear
* Find sample images taken with different gear combinations 
* and more...

**How Was It Built?**

The app was build via the following tech stack (italics = this will be implemented in the future): 
* React
* Node/Next JS 
* Tailwind CSS
* Strapi CMS
* *PostgreSQL*
* *Prisma ORM*

**What Challenges Did You Face While Building This?**
The biggest challenge all centered around effeciently calling API data. One of the large reasons this project was built with NextJS was that it allowed information available before request to be rendered serverside, thus limiting how much of the app was dependent on fetching data before it can be rendered to the user. Speed and reliability were of the highest priority, because salesmen in the middle of a transaction or who are using some feature of this app to close a deal can't be waiting forever for things to load or experiencing crashes. 

The two 3rd party APIs this project is build on are Best Buy's and Reddit's, for checking stock and sample images respectively. Best Buy's API has a conservative rate limit, so in order to avoid errors and reaching said call limit, cacheing is implemented. This is tricky since stock data can change frequently, so I implemented my own custom cacheing logic (using timestamps) to make sure the relevant endpoints weren't hit too frequently. 

**What Features Are In The Pipeline?** 
In the future, a database will be utilized, since database queries (such as finding all lenses that work well for sports, or lenses that have stabilization, etc) will offer a more efficient way of searching product based on certain parameters. I also plan to create a Youtube channel, with guides on how to understand and utilize certain features. Lastly, Strapi is going to serve as a blog for publishing Sony-related articles and guides. 

**How Can I Clone and Run This Myself?**
*Coming Soon*



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
