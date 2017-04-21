// Import main React Components
import React , { Component } from 'react';

import {
    Text, 
    View, 
    Button, 
    Image, 
    StyleSheet
} from 'react-native';

// Build up and export component
export class AccountDetailsScreen extends Component {
    static navigationOptions = {
        tabBarLabel: "Home", 
        tabBarIcon: ({tintColor}) => (
            <Image 
                source={require("./icons/Settings-24.png")} 
                style={[styles.icon, { tintColor: tintColor }]} 
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