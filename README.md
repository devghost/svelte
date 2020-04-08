# A Svelte ❤️ Parcel template

This is a Svelte template using Parcel

## Included in template

- Bundling using [Parcel](https://parceljs.org/)
- Testing with [Jest](https://jestjs.io/) (with Snapshot support)
- Formatting with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)
- Transpiling with [Babel](https://babeljs.io/)
- [Wallaby](https://wallabyjs.com/) enabled

## Getting started

    npx degit devghost/svelte svelte-app
    cd svelte-app
    npm install && npm start

Now head over to your favourite browser and open up `localhost:1234` and you are ready to go.

## Build

To build the project run the following:

    npm run build

## Tests

I prefer running my tests using Wallaby, but if you prefer plain old command line, just type the following to run your tests:

    npm t

## Linting

You may just check for linting or auto fix using these two options

    npm run lint
    npm run lint:fix
