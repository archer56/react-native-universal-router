/**
 * Copyright (c) 2017-present, Ben Archer
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';

export default class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routeHistory: [props.initialRoute || '/']
        };

        this.goToRoute = this.goToRoute.bind(this);
        this.goBack = this.goBack.bind(this);
        this.routerActions = {goToRoute: this.goToRoute, goBack: this.goBack};
    }

    get routeHistory() {
        const {routeHistory = []} = this.state;
        return routeHistory
    }

    get currentRoute() {
        return this.routeHistory[this.routeHistory.length - 1];
    }

    goToRoute(route){
        if(!route || route === this.currentRoute) return false;
        const newRouteHistory = [].concat(this.routeHistory, [route]);

        this.setState({routeHistory: newRouteHistory});
    }

    goBack() {
        const routeHistory = this.routeHistory;
        if(routeHistory.length <= 1) return false;

        const newRouteHistory = [].concat(this.routeHistory);
        newRouteHistory.pop();

        this.setState({routeHistory: newRouteHistory});
    }

    addPropsToChild(child) {
        return React.cloneElement(child, {routerActions: this.routerActions});
    }

    get route() {
        const {children} = this.props;
        const currentRoute = this.currentRoute;

        return children.reduce((acc, child) => {
            if(!child) return acc;
            if(child.props.path === currentRoute) return this.addPropsToChild(child);
            return acc
        }, null);
    }

    render() {
        return (
            <View>
                {this.route}
            </View>
        )
    }
}

Router.proptypes = {
    initialRoute: PropTypes.string.isRequired
};