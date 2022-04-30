# Deploy at vercel very fast

This project has only thing added is `next.config.js` file which adds the support for cors. Yo!!

Deployed @ https://next-starter-murex.vercel.app/

```bash
# Test backend api via:
quick post 'https://next-starter-murex.vercel.app/api/hello' '{surname: 'sahil rajput'}
```

## Use below command to start with next.js

```bash
git clone https://github.com/sahilrajput03/next-starter/tree/main
cd next-starter
rm -rf .git
npm i
npm run dev #Or use simply `nd`.
```

### Make demo request to backend

- Backend api will respond by appending name property to the body you send to the api. Yikes!

```bash
curl \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"os": "pop os", "email": "sahilrajput03@gmail.com"}' \
  http://localhost:3000/api/hello

# OR USE YOUR `quick` CLI FROM `my_bin`

quick post 'https://nifty-darwin-aec8ea.netlify.app/api/hello' '{os: "pop os", email: "sahilrajput03@gmail.com"}'
```

### Use below commands

- nd: npm run dev
- ns: npm start
- nb: npm run build

### Short details

- dev - Runs next dev which starts Next.js in development mode
- build - Runs next build which builds the application for production usage
- start - Runs next start which starts a Next.js production server
