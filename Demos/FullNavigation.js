/**
 * To use react-navigation as show in this demo you need to add it to package.json and then run "npm install"
 * At the time of writing this the current npm version was out of date, so a specific version from github needs adding:
 *      - "react-navigation": "git+https://github.com/react-community/react-navigation.git#7165efc"
 * Once at least beta.8 has been released to npm however you can simply reference the version number instead. 
 *      - "react-navigation": "1.0.0-beta.8"
 * Note: When running npm install, you may see some warnings and it may take a while, 
 * this is fine as long as you don't have errors, just wait and let it finish.
 */

/**
 * Since this demo uses quite a lot of components I have broken it into separate files to make it easier to read, manage, and edit
 * You will find all the code in the folder ./RNav/ or check the import statements below. 
 */

// Import main React Components
import React, { Component } from 'react';

import {
    AppRegistry, 
    Text, 
    View, 
    Button, 
    StyleSheet
} from 'react-native';

// Import components needed from react-navigation
import { TabNavigator, StackNavigator } from 'react-navigation';

// Import components needed for demo
import { HomeScreen } from './RNav/HomeScreen';
import { ProductsScreen } from './RNav/ProductsScreen';
import { ShoppingCartScreen } from './RNav/ShoppingCartScreen';
import { AccountDetailsScreen } from './RNav/AccountDetailsScreen';

// Set up main demo screen and navigation
const MainScreenNavigator = TabNavigator({
    Home: { screen: HomeScreen }, 
    Products: { screen: ProductsScreen }, 
    Cart: { screen: ShoppingCartScreen }, 
    Account: { screen: AccountDetailsScreen }
}, 
{
    navigationOptions: {
        headerVisible: false
    }, 
    tabBarOptions: {
        activeTintColor: "#0700AB", 
        showIcon: true, 
        showLabel: false, 
        style: { 
            backgroundColor: "#0072D9"
        }, 
        indicatorStyle: {
            backgroundColor: "#0700AB"
        }
    }, 
    tabBarPosition: "bottom"
});

export const ReactNavDemo = StackNavigator({
    Home: { screen: MainScreenNavigator }
});
