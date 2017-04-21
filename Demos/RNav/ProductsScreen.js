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
export class ProductsScreen extends Component {
    static navigationOptions = {
        tabBarLabel: "Home", 
        tabBarIcon: ({tintColor}) => (
            <Image 
                source={require("./icons/Shopping-Bag-24.png")} 
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
