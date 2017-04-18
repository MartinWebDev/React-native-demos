// Import main react and react-native modules
import React, { Component } from 'react';
import {
    TouchableHighlight , 
    Text, 
    Navigator
} from 'react-native';

export class BasicNavigationWithTransitions extends Component {
    render() {
        const routes = [
            { title: 'My Scene B', index: 0 }, 
            { title: 'My Scene C', index: 1 }
        ];

        return (
            <Navigator 
                initialRoute={routes[0]} 
                initialRouteStack={routes} 
                renderScene={(route, navigator) => 
                    <TouchableHighlight onPress={() => { 
                        if (route.index == 0) 
                            navigator.push(routes[1])
                        else
                            navigator.pop();
                    }}>
                        <Text>Hello {route.title}!</Text>
                    </TouchableHighlight>
                } 
                configureScene={(route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJumpFromRight} 
                navigationBar={
                    <Navigator.NavigationBar 
                        routeMapper={
                            {
                                LeftButton: (route, navigator, index, navState) => { 
                                    if (route.index == 0) {
                                        return null;
                                    }
                                    else {
                                        return (
                                            <TouchableHighlight onPress={() => navigator.pop()}>
                                                <Text>Cancel</Text>
                                            </TouchableHighlight>
                                        ); 
                                    }
                                }, 
                                RightButton: (route, navigator, index, navState) => { return (<Text>Done</Text>); }, 
                                Title: (route, navigator, index, navState) => { return (<Text>Navbar</Text>); }
                            }
                        } 
                        style={{backgroundColor: 'gray'}}
                    />
                } 
                style={{ padding: 100 }}
            />
        );
    }
}