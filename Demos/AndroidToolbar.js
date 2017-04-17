// Import main react and react-native modules
import React, { Component } from 'react';
import {
    Text, 
    StyleSheet, 
    View, 
    Image, 
    ToolbarAndroid
} from 'react-native';

export class AndroidToolbarDemo extends Component {
    state = { 
        actionText: 'Example app with toolbar component', 
        toolbarSwitch: false, 
        colorProps: { 
            titleColor: '#3b5998', 
            subtitleColor: '#6a7180' 
        } 
    };

    onActionSelected (position) { 
        if (position === 0) { // index of 'Settings'
            // showSettings(); 
        } 
    }

    render() {
        return (
            <View>
                <ToolbarAndroid 
                    style={{ height: 50 }} 
                    logo={require('./imgs/AwesomeShopLogo.png')} 
                    title="AwesomeApp" 
                    actions={[{
                        title: 'Settings', 
                        icon: require('./icons/Settings-32.png'), 
                        show: 'always'
                    }]} 
                    onActionSelected = {this.onActionSelected} 
                />

                <Text>{this.state.actionText}</Text>
            </View>
        );
    }
}