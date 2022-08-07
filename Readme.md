# My Nextjs testing arena

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
