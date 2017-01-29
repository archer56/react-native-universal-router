/**
 * Copyright (c) 2017-present, Ben Archer
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PureComponent, PropTypes, Children } from 'react';
import {View} from 'react-native';

export default class Router extends PureComponent{
    getChildToRender(path) {
        const children = Children.map(this.props.children, child => {
            if(child.props.path === path)
                return child;
        });
        return children[0]
    }

    get route(){
        const {history = []} = this.props;
        return history.length > 0 ? history[history.length - 1] : false;
    }

    render() {
        return (
            <View>
                {this.getChildToRender(this.route)}
            </View>
        )
    }
}

Router.propTypes = {
    history: PropTypes.array.isRequired
};
