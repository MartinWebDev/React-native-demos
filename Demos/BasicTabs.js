/**
 * The first important thing to note with this demo is that the tabs component in use here is not part of 
 * react-native by default, and must be added by running this command at the root of the project: 
 *      - npm install react-native-tabs --save
 * Once you have done this then you will be able to include the tabs component in your project. 
 */

// Import main react and react-native modules
import React, { Component } from 'react';

import {
    Text, 
    View, 
    StyleSheet, 
    Image
} from 'react-native';

import Tabs from 'react-native-tabs';

export class BasicTabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: "first"
        };
    }

    render() {
        const { page } = this.state;

        return (
            <View style={styles.container}>
                <Tabs
                    selected={page} 
                    style={styles.tabbar} 
                    selectedStyle={{ margin: 10 }}  
                    onSelect={el => this.setState({page: el.props.name})} 
                >
                    <Image name="first" source={require("./icons/Home-32.png")} />
                    <Image name="second" source={require("./icons/Search-32.png")} />
                    <Image name="third" source={require("./icons/Shopping-Cart-32.png")} />
                </Tabs>

                <Text>CodeSharing App</Text>
                <Text>{page}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabbar: {
        backgroundColor: 'white',
        height: 64,
        borderTopColor: 'red',
        borderTopWidth: 2
    }
});
