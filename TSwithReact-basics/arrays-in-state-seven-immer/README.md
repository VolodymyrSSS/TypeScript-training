# The Task

Two separate artwork lists have the same initial state. They are supposed to be isolated,
but because of a mutation, their state is accidentally shared, and checking a box in one 
list affects the other list. 
It cab be fixed by creating the copy of the array in state and then make changes to it. But 
if you copy an array, you can’t mutate existing items inside of it directly. This is because 
copying is shallow—the new array will contain the same items as the original one. So if you 
modify an object inside the copied array, you are mutating the existing state.
To solve this issues - when updating nested state, you need to create copies from the point 
where you want to update, and all the way up to the top level. Namely, You can use map to 
substitute an old item with its updated version without mutation, somethimg like using
if (artwork.id === artworkId)... return { ...artwork, seen: nextSeen } - you should only mutate 
objects that you have just created.
If you don’t want to change your state structure, you might prefer to use Immer, which lets 
you write using the convenient but mutating syntax and takes care of producing the copies for 
you. So, your task to rewrite the component with Immer. Don't forget to set into dependency:
1) npm install use-immer to add Immer as a dependency
2) then replace import { useState } from 'react' with import { useImmer } from 'use-immer'

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
