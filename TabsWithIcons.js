import React , { Component } from 'react';

import {
  AppRegistry, 
  Text, 
  View, 
  Button, 
  StyleSheet, 
  Image
} from 'react-native';

import { TabNavigator, StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: "Home", 
        tabBarIcon: ({tintColor}) => (
            <Image 
                source={require("./icons/Home-32.png")} 
                style={[styles.icon, { tintColor: tintColor }]} 
            />
        )
    }; 

    render () {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
                title="Chat with Lucy"
            />
        );
    }
}

class CartScreen extends Component {
    static navigationOptions = {
        tabBarLabel: "Cart", 
        tabBarIcon: ({tintColor}) => (
            <Image 
                source={require("./icons/Shopping-Cart-32.png")} 
                style={[styles.icon, { tintColor: tintColor }]} 
            />
        )
    }; 
    
    render () {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Chat', { user: 'Jack' })}
                title="Chat with Jack"
            />
        );
    }
}

class SearchScreen extends Component {
    static navigationOptions = {
        tabBarLabel: "Search", 
        tabBarIcon: ({tintColor}) => (
            <Image 
                source={require("./icons/Search-32.png")} 
                style={[styles.icon, { tintColor: tintColor }]} 
            />
        )
    }; 
    
    render () {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Chat', { user: 'Jack' })}
                title="Chat with Jack"
            />
        );
    }
}

class SettingsScreen extends Component {
    static navigationOptions = {
        tabBarLabel: "Settings", 
        tabBarIcon: ({tintColor}) => (
            <Image 
                source={require("./icons/Settings-32.png")} 
                style={[styles.icon, { tintColor: tintColor }]} 
            />
        )
    }; 
    
    render () {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Chat', { user: 'Jack' })}
                title="Chat with Jack"
            />
        );
    }
}

class ChatScreen extends Component {
    static navigationOptions = ({ navigation,  screenProps }) => {
        const { state, setParams } = navigation;
        const isInfo = state.params.mode === "info";
        const { user } = state.params;

        return {
            title: isInfo ? `${user}'s Contact Info` : `Chat with ${user}`, 
            headerRight: (
                <Button 
                    color={screenProps.tintColor} 
                    title={isInfo ? 'Done' : `${user}'s info`} 
                    onPress={() => setParams({ mode: isInfo ? "none" : "info" })} 
                />
            )
        }
    };
    
    render() {
        const { params } = this.props.navigation.state;
        const { mode, user } = params;

        return (
            <View>
                <Text>{mode === "info" ? `${user}'s Contact Info` : `Chat with ${user}`}</Text>
            </View>
        );
    }
}

const MainScreenNavigator = TabNavigator({
    Home: { screen: HomeScreen }, 
    Cart: { screen: CartScreen }, 
    Search: { screen: SearchScreen }, 
    Settings: { screen: SettingsScreen }
}, {
    tabBarOptions: {
        activeTintColor: "#e91e63", 
        showIcon: true, 
        showLabel: false, 
        style: { 
            backgroundColor: "#39CCCC"
        }, 
        indicatorStyle: {
            backgroundColor: "#0074D9"
        }
    }, 
    tabBarPosition: "bottom"
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});

const styles = StyleSheet.create({
    icon: {
        width: 22,
        height: 22,
    },
});

AppRegistry.registerComponent("reactNativeDemos", () => SimpleApp)