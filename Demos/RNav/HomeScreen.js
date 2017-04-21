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
export class HomeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: "Home", 
        tabBarIcon: ({tintColor}) => (
            <Image 
                source={require("./icons/Home-24.png")} 
                style={[styles.icon, { tintColor: tintColor }]} 
            />
        )
    };

    render () {
        return (
            <View>
                <Text>Company logo, special offers, and some other stuff will go here</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    },
});