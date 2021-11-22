# About the project

Small project in react and typescript where you can add your own events and a tab with countdown to\
that event will appear!

This is more extensive version of my last project wchich you can see there:
[CountdownTimer-react](https://github.com/Maciejlys/CountdownTimer-react)\
And this project you can see here:
[Countdown-react-adding](https://maciejlys.github.io/Countdown-react-adding/)

# What changed?

In previous version there were countdowns that were in json file that I could edit but sadly\
if someone wanted his own timer he had to leave empty handed.\

But this time I made use of local storage and that made saving your own counters possible!
I also changed id from flat out indexes to uuidv4 because of some indexes collision while creating\
another timer

# What have I learned?

I learned alot while doing this project.\
I am getting used to typescript more and my react is getting better.\
I also learned uses of localstorage and I plan to use that knowledge in my next projcet!

If I would redo the project I would definitely split existing code into more parts.\
The later in the project I went the more code I had to reuse because I didn't split it\
into separate component. Thats probably the most important thing that I learned in this project

# Getting Started with Create React App

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
