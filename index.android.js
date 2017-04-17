// Import main react and react-native modules
import React, { Component } from 'react';
import {
    AppRegistry,
    View, 
    Text
} from 'react-native';

// Import modules for this app
import { BasicLayout } from './Demos/BasicLayout';

// Setup main wrapper
export default class reactNativeDemos extends Component {
    render() {
        return (
            // To see any component working, simply add the html tag required for it. 
            // For example to see "Basic Layout" working, add "<BasicLayout />" on the next line. 
            <BasicLayout />
        );
    }
}


// Bootstrap app to Android
AppRegistry.registerComponent('reactNativeDemos', () => reactNativeDemos);
