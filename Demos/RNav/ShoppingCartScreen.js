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
export class ShoppingCartScreen extends Component {
    static navigationOptions = {
        tabBarLabel: "Cart", 
        tabBarIcon: ({focused, tintColor}) => (
            <Image 
                source={focused ? require("./icons/Shopping-Cart-Loaded-Filled-24.png") : require("./icons/Shopping-Cart-Loaded-24.png")} 
                style={[GlobalStyles.tabIcon, { tintColor: tintColor }]} 
            />
        )
    };
    
    render () {
        return (
            <Text>Hello world</Text>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    },
});