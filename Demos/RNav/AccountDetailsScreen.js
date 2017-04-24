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
        tabBarLabel: "Home", 
        tabBarIcon: ({tintColor}) => (
            <Image 
                source={require("./icons/Settings-24.png")} 
                style={[GlobalStyles.tabIcon, { tintColor: tintColor }]} 
            />
        )
    };
    
    render () {
        return (
            <Text>{JSON.stringify(this.state.apiDetails)}</Text>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    },
});