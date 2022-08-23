# My Nextjs testing arena

## using environment variables with nextjs

![image](https://user-images.githubusercontent.com/31458531/186137800-37b7972f-1679-49b5-ae8f-da65ea177570.png)

## next-auth

src: [Authentication: It’s Easier Than You Think](https://www.youtube.com/watch?v=h6wBYWWdyYQ&t=6s)

most probably in nextauth IMO: ![image](https://user-images.githubusercontent.com/31458531/186127177-af950f82-83bb-4a26-a943-2ce7f92cb791.png)

![image](https://user-images.githubusercontent.com/31458531/186127362-eeec045d-a762-4286-b050-f30e6ad302ae.png)

Redirect to `/login` page if you are not logged in:

![image](https://user-images.githubusercontent.com/31458531/186128057-966ffca9-c2f3-4926-9fda-f5e252d1e941.png)

![image](https://user-images.githubusercontent.com/31458531/186129411-15ef18d2-ae51-4714-ad3a-ee33dbd0c8ae.png)


## Thats how you get query parameter in nextjs

![image](https://user-images.githubusercontent.com/31458531/186112970-39615145-5928-4108-919d-056370e0560c.png)


## We can change port for nextjs development server like that

![image](https://user-images.githubusercontent.com/31458531/185983777-88e38813-707c-4309-963a-20dcfae410b9.png)


## Runtime Checking development and production mode in nextjs

![image](https://user-images.githubusercontent.com/31458531/185982278-9f37a150-f777-4fe9-9fdc-afb06aabe9d0.png)

## You can only give height, width to an nextjs `<Image />` tag like that:

*Disclaimer: `width` and `height` property given directly to `<Image height='' width='' />` doesn't work in my experience. ~Sahil

![image](https://user-images.githubusercontent.com/31458531/186112203-fc1d7e25-6159-478e-823d-780f25f9ebb5.png)


![image](https://user-images.githubusercontent.com/31458531/185975784-c0297c80-54ca-4068-b400-1caefa5b5ba7.png)


## YO! We can run multiple debugger i.e,. frontend and backend

![image](https://user-images.githubusercontent.com/31458531/185749877-762ee0e5-583b-4993-9acf-95c02ea3f3cc.png)

- Use `useSWR` in nextjs (23k* on github):

**ALERT: PLEASE USE `react-query` instead of this**

![image](https://user-images.githubusercontent.com/31458531/185575633-599d911b-c76d-4d25-8a1c-6529d4372fb0.png)

- Making use of client side libraries to work with nextjs setup [source](https://nextjs.org/docs/advanced-features/dynamic-import#with-external-libraries):

![image](https://user-images.githubusercontent.com/31458531/185347247-bfe08b56-df26-4d97-9b40-aa25e2dc2094.png)


## [Next.js](https://nextjs.org/)

- create-next-app - [Github](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), [Article in Docs](https://nextjs.org/docs/api-reference/create-next-app)
- Official Next.js examples - [Github](https://github.com/vercel/next.js/tree/canary/examples)
- Example : api-router - [Github](https://github.com/vercel/next.js/tree/canary/examples/api-routes), [Article in Docs](https://nextjs.org/docs/api-routes/introduction)
- Example : with-expo-typescript - [Github](https://github.com/vercel/next.js/tree/canary/examples/with-expo-typescript).
- To create a `nextjs ready apps`, follow below examples commands -

```bash
# For npm users-
npx create-next-app my-next-app # It uses yarn by default to install dependencies. LOL 🍉
npx create-next-app --example api-routes api-router-app
npx create-next-app --example with-expo-typescript with-expo-typescript-app
```

# Commmon Commands - Sahil Rajput

`nd` - To run dev server i.e., `npm run dev` which runs `next dev`.

Now, you can browse your server(with **webpack-fast-refresh enabled**) at [http://localhost:3000](http://localhost:3000)

**Make the production build first via below command**

1. `npm run build` which runs `next build`.

2. `ns` - To serve producton build via `npm start` which runs `next start`. (Note: )

**If you want a static build you can use:**

`nr build:export` - To make a static build of the app in `out` directory. (`next build && next export`)

---

## Other Details

**Tip: You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.**

- Next CLI - [Docs](https://nextjs.org/docs/api-reference/cli)

- [Next.js Docs](https://nextjs.org/docs)

- [Next.js - Getting Started](https://nextjs.org/docs/getting-started), [#Manual Setup](https://nextjs.org/docs#manual-setup)

- [Basic Features - Pages](https://nextjs.org/docs/basic-features/pages)

- [Routing - Dynamic Routes](https://nextjs.org/docs/routing/dynamic-routes)

- [Built-In CSS support - Docs](https://nextjs.org/docs/basic-features/built-in-css-support)

- [Learn Next.js - Next.js Docs](https://nextjs.org/learn)

- [Static Html Export - Article - Next.js Docs](https://nextjs.org/docs/advanced-features/static-html-export)

- [Deploy your Next.js app to Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) (from the creators of Next.js)

- [Next.js deployment documentation - Next.js Docs](https://nextjs.org/docs/deployment) - Nextjs Deployment Documentation

- ### See amazing resources for nextjs @ https://github.com/unicodeveloper/awesome-nextjs

## Some yarn related commands

```bash
$ next -h
Usage
  $ next <command>

Available commands
  build, start, export, dev, telemetry

Options
  --version, -v   Version number
  --help, -h      Displays this message

For more information run a command with the --help flag
  $ next build --help
```

```bash
# For yarn users-
yarn create next-app my-next-app # Where my-next-app would be name of project.
yarn create next-app --example api-routes api-router-app
yarn create next-app --example with-expo-typescript with-expo-typescript-app

yarn dev
yarn start
```


## Disable ssr on nextjs page

Source: https://stackoverflow.com/a/53191080/10012446

**Building SPA** with `nextjs` and `react-router-dom`: Amazing [Article](https://colinhacks.com/essays/building-a-spa-with-nextjs)
