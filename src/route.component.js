/**
 * Copyright (c) 2017-present, Ben Archer
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PureComponent, PropTypes } from 'react';
import {View} from 'react-native';

export default class Route extends PureComponent{
    render() {
        return (
            <View>
                <this.props.component />
            </View>
        )
    }
}

Route.propTypes = {
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired
};