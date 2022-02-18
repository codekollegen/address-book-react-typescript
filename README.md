## LMAA - Look My Awesome Addressbook

A simple address book tool written with React, React Hooks, TypeScript, Redux & Redux Toolkit. Use it to manage contacts via a simple web ui.

The web ui is not intended to look good. The main purpose of this project is to show a working technial solution utilizing React, Hooks, API communication via Axios, Redux, Redux Toolkit as well as TypeScript.
I am happy to get input on how to improve things :)

**`Note: This project is still under development.`**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Libraries

Routing: [@reach/router](https://github.com/reach/router)

Redux: [@reduxjs/toolkit](https://github.com/reduxjs/redux-toolkit)

Axios: [axios/axios](https://github.com/axios/axios)

Jest: [facebook/jest](https://github.com/facebook/jest)

## Before you start

Before running the project create a `.env` file to configure the api. See the existing `.env.sample`

The frontend will require a running api. You will find that under:

[codekollegen/address-book-backend-nodejs](https://github.com/codekollegen/address-book-backend-nodejs)

## Available Scripts

For development and testing within the project directory run:

`npm start`

`npm test`

For a production build run:

`npm run build`

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Todos

- ~~Add React Router for routing~~
- ~~Create a working api (possibly nodejs, mongodb) for actually saving stuff -> possibly in a separate project~~
- ~~Frontend api connection~~
- ~~Route for contact detail~~
- Functionalities:
  - ~~Add new contact~~
  - ~~Delete contact~~
  - ~~Update contact~~
  - ~~Mark/Unmark contact as favorite~~
  - Sort contact list by different properties
  - contact list display types list and grid
  - ...
- Enhance existing tests
- Persist theme switch with localStorage
- ...
