// Import main React Components
import React, { Component } from 'react';

import {
    Text, 
    View, 
    Button, 
    Image, 
    StyleSheet
} from 'react-native';

import { GlobalStyles } from './Styles/GlobalStyles';

// Build up and export component
export class AccountDetailsScreen extends Component {
    static navigationOptions = {
        tabBarLabel: "Account", 
        tabBarIcon: ({focused, tintColor}) => (
            <Image 
                source={focused ? require("./icons/Settings-Filled-24.png") : require("./icons/Settings-24.png")} 
                style={[GlobalStyles.tabIcon, { tintColor: tintColor }]} 
            />
        )
    };
    
    render () {
        return (
            <Text>Hello World</Text>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    },
});