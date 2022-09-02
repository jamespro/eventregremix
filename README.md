# eventregremix

* Remix
* TypeScript
* Vite

* Use recent node version or else you get "unexpected token" when installing Remix.
* `nvm install --lts`
* `npx create-remix@latest`
* create in a subdirectory then move the files up. I think (?) that it won't let you install in the same directory because it would have to overwrite some files if you have already started a git repo.
* > Just the basics
* > Remix App Server (should I have chosen Fly.io?)
* > TypeScript
* `npm run dev`
* `npm install prettier`
* `npx eslint --init`
  * problems
  * javascript modules (import/export)
  * react
  * TypeScript yes
  * Browser (I guess? because some will run in browser?)
  * Javascript
  * Installing eslint-plugin-react@latest, @typescript-eslint/eslint-plugin@latest, @typescript-eslint/parser@latest
* it created eslintrc.js ... but the example project had cjs
* `npx install-peerdeps --dev eslint-config-airbnb`
* `npm i -D eslint-config-airbnb-typescript`
* create .eslintrc.cjs - copied this from Coding Garden and removed eslintrc.js
* `npm i -D prettier eslint-config-prettier eslint-plugin-prettier`
* create .prettierrc.cjs





# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
