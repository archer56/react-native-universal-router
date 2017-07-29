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

    export class App extends PureComponent {
        render() {
            return (
                <Router initialRoute={'/'}>
                    <Route path="/" routeComponent={InitialPage} />
                    <Route path="/about" routeComponent={AboutPage} />
                </Router>
            )
        }
    }
```
## How it works
##### History
A prop called routerActions is passed into the routeComponent.

Should you want to go to the next page simply:
```js
   routeComponent.goToRoute('/about');
```
This will redirect users to the about page.
Likewise:
```js
   routeComponent.goBack();
```
Will redirect users back one page.

##### Routes
First you need to add the router component, this just takes one prop. The initialRoute as a string.

Next each route is defined as a component that takes two props.

It is important that the path name is unique and at this stage can be any value. I have left it as a path name for clearness, but in theory can be any unique value.

The second prop is the component, this should normally be a page wide component and it will only be rendered when the relevant scene is in focus.

## Where is this library going?

Before this library get's taken out of alpha/beta:
 - It will be fully tested.
 - It will have a default path such as '*'.
 - It will pass the path and any query params down to the page as props.
 - It will be adding animations when changing pages, so the new page will slide in.

If there are any feature requests that could be implemented into this library, please raise them as [github](https://github.com/archer56/react-native-universal-router) issues
