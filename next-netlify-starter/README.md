# My do's

Browse site @ https://tangerine-centaur-bbc778.netlify.app/

For the setting to get our build from this project folder not from the repository root we have set the setttings for it. To see those settings you can see the screenshot in this same folder i.e., `./SCREENSHOT~Sahil-30 April 2022.png`. 

This project has additionally 1. enabled cors + 2. added target property to next.config.js file so as to fix deploy errors in netlify! Rest it works all fantastic!!

```bash
# Test backend api via:
quick post 'https://nifty-darwin-aec8ea.netlify.app/api/hello' '{email: "sahilrajput03@gmail.com"}'

```

## Next + Netlify Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/ed50f56e-4fc2-4c98-8b66-1e5074c6f3d3/deploy-status)](https://app.netlify.com/sites/next-starter/deploys)

This is a [Next.js](https://nextjs.org/) v10.0.9 project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and set up to
be instantly deployed to [Netlify](https://url.netlify.com/SyTBPVamO)!

This project is a very minimal starter that includes 2 sample components, a global stylesheet, a `netlify.toml` for deployment, and a `jsconfig.json` for setting up absolute
imports and aliases. It also includes the [Essential Next.js Build Plugin](https://github.com/netlify/netlify-plugin-nextjs), which will allow for you to implement features like
Preview Mode, server-side rendering/incremental static regeneration via Netlify Functions, and internationalized routing.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/next-netlify-starter&utm_source=github&utm_medium=nextstarter-cs&utm_campaign=devex-cs)

(If you click this button, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Installation options

**Option one:** One-click deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/next-netlify-starter&utm_source=github&utm_medium=nextstarter-cs&utm_campaign=devex-cs)

**Option two:** Manual clone

1. Clone this repo: `git clone https://github.com/cassidoo/next-netlify-starter.git`
2. Navigate to the directory and run `npm run dev`
3. Make your changes
4. Connect to [Netlify](https://url.netlify.com/Bk4UicocL) manually (the `netlify.toml` file is the one you'll need to make sure stays intact to make sure the export is done and
   pointed to the right stuff)