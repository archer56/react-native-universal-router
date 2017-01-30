# React Native Universal Router
This is a alpha stage routing library for react-native and as such the syntax may change with releases.

At the time when we started building the only way to really do routing in react-native with UWP apps was to use react-native's own navigator.

This is a friendlier way, that uses similar syntax to more conventional react routers.

## Support
We support UWP, Ios and Android, its important to note this should not be considered when routing for a website when using standard React as it does not utilise the browsers own history.

## Installation
Using [npm](https://www.npmjs.com/):

    $ npm install --save react-native-universal-router

Then used with a module bundler such as [webpack](https://webpack.github.io/) and an ES6 transpiler such as [babel](https://babeljs.io/):

```js
import { Router, Route } from 'react-native-universal-router';
```

## Usage
```js
    import React, { PureComponent } from 'react';
    import {
        Router,
        Route
    } from 'react-native-universal-router';

    const routerHistory = [
        '/'
    ]

    export class App extends PureComponent {
        render() {
            return (
                <Router history={routerHistory}>
                    <Route path="/" component={InitialPage} />
                    <Route path="/about" component={AboutPage} />
                </Router>
            )
        }
    }
```
## How it works
##### History
routerHistory is an array of the history of the page, this needs to be populated with one route at the start. This acts at the initial route of the app.

Ideally in the case of Redux this should be kept in the store and passed down to App as a prop.

Should you want to go to the next page simply:
```js
   routerHistory.push('/about');
```
This will redirect users to the about page.
Likewise:
```js
   routerHistory.pop();
```
Will redirect users back one page to the initialPage.

##### Routes
First you need to add the router component, this just takes one prop. The history array that you just created.

Next each route is defined as a component that takes two props.

It is important that the path name is unique and at this stage can be any value. I have left it as a path name for clearness, but in theory can be any unique value.

The second prop is the component, this should normally be a page wide component and it will only be rendered when the relevant scene is in focus.

## Where is this library going?

Before this library get's taken out of alpha/beta:
 - It will be fully tested.
 - It will have a default path such as '*'.
 - It will have nesting, so you can have routes such as:
 ```js
        <Route path="/about" component={AboutPage}>
            <Route path="/about/me" component={AboutMePage}></Route>
        </Route>
 ```
 - It will pass the path and any query params down to the page as props.
 - It will be spiking the use of animations when changing pages.

If there are any feature requests that could be implemented into this library, please raise them as [github](https://github.com/archer56/react-native-universal-router) issues
