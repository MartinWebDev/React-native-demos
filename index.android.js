// Import main react and react-native modules
import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';

// Import modules for this app
import { BasicLayout } from './Demos/BasicLayout';
import { NestedLayout } from './Demos/NestedLayout';
import { AndroidToolbarDemo } from './Demos/AndroidToolbar';
import { BasicNavigation } from './Demos/BasicNavigation.WIP';
import { BasicNavigationWithTransitions } from './Demos/BasicNavigationWithTransitions';
import { BasicTabs } from './Demos/BasicTabs';
import { ReactNavDemo } from './Demos/FullNavigation';

// Setup main wrapper
export default class reactNativeDemos extends Component {
    render() {
        return (
            // To see any component working, simply add the html tag required for it. 
            // For example to see "Basic Layout" working, add "<BasicLayout />" on the next line. 
            // Or to see the "Nested Layout" demo working, change it to "<NestedLayout />" and reload the app
            <ReactNavDemo />
        );
    }
}


// Bootstrap app to Android
AppRegistry.registerComponent('reactNativeDemos', () => reactNativeDemos);
