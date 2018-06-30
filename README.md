# GitHub users list and profiles

Live demo deployed at https://hungry-panini-87e41c.netlify.com/

This project is using CI on Netlify. It is deployed automatically when changes are merged to master
branch. At first tests are ran and after that actual project build.

Typescript allows to force to use correct types everywhere so there's a high chance that 
tests or build will fail during deployment process. Netlify also sends me an email on that occurance
as all other major CI systems.

I have added more than was requested in the task to make this application faster and more stable.
Users list state stays the same after user clicks back button from profile. This saves us one API call.
Made sure that there are no double requests to the API, no errors in console.  

TODO: add meta, og support.

## Frontend assessment task

### Objective

Single Page application (SPA) which displays a list of Github users by using Github public
API with an option to display detailed user data on a separate page.

### Stack

Following stack should be used in order to achieve the task:

1. React (Use create-react-app or any other start kit to bootstrap your project)
2. Redux (react-redux and redux)
3. React router
4. HTTP library of any kind (fetch - included with create-react-app, superagent etc...)
5. Bootstrap (You may use react-bootstrap too for shared components if needed)
6. Test runner such as Jest or Mocha (Jest comes packed with create-react-app). You
can use enzyme or react-test-utils for traversing the virtual dom.

### Final objective
1. Project starts up correctly and compiles without errors.
2. A list of github users (avatar, login, details button) is displayed.
  * Bonus points if you can show the loading spinner before all users have been
fetched.
  * Bonus points if you can make “Load more users” feature
3. When details button is clicked a new page with information about the user is shown.
Fields (id, avatar, login, html_url) with a back button to go back to the initial list of
users.
4. Single user page should display the user data after refreshing the page.
5. Provide a test for at least 1 react component and 1 reducer.

## Features in this project core

* **[React](https://facebook.github.io/react/)** (16.x)
* **[Webpack](https://webpack.js.org/)** (4.x)
* **[Typescript](https://www.typescriptlang.org/)** (2.x)
* **[Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)** using [React Hot Loader](https://github.com/gaearon/react-hot-loader) (4.x)
* [Babel](http://babeljs.io/) (6.x)
* [SASS](http://sass-lang.com/)
* [Jest](https://facebook.github.io/jest/) - Testing framework for React applications
* Production build script
* Image loading/minimization using [Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader)
* Typescript compiling using [Awesome Typescript Loader](https://github.com/s-panferov/awesome-typescript-loader) (5.x)
* Code quality (linting) for Typescript and SASS/CSS.
* **[Axios](https://github.com/axios/axios)**
* **[Thunk](https://github.com/reduxjs/redux-thunk)**
---

## Installation
1. `npm install`

## Usage
**Development**

`npm run start-dev`

* Build app continuously (HMR enabled)
* App served @ `http://localhost:8080` 

**Production**

`npm run start-prod`

* Build app once (HMR disabled)
* App served @ `http://localhost:3000`

---

**All commands**

Command | Description
--- | ---
`npm run start-dev` | Build app continously (HMR enabled) and serve @ `http://localhost:8080`
`npm run start-prod` | Build app once (HMR disabled) and serve @ `http://localhost:3000`
`npm run build` | Build app to `/dist/` 
`npm run test:watch` | Run tests and watch
`npm run lint` | Run Typescript and SASS linter
`npm run lint:ts` | Run Typescript linter
`npm run lint:sass` | Run SASS linter
`npm run start` | (alias of `npm run start-dev`)
`npm run deploy` | Run tests and then build

