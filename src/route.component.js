/**
 * Copyright (c) 2017-present, Ben Archer
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, {Component} from 'react';

export default class Route extends Component {
    render() {
        console.log(this.props);
        const {routeComponent, title, routerActions} = this.props;
        if(!routeComponent) return null;

        return (
            <this.props.routeComponent title={title} routerActions={routerActions}/>
        )
    }
}
