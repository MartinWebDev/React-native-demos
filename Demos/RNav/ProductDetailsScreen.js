import React, { Component } from 'react';

import {
    Text, 
    View, 
    Button, 
    StyleSheet
} from 'react-native';

export class ProductDetailsScreen extends Component {
    constructor (props) {
        super(props);
    }

    static navigationOptions = ({ navigation,  screenProps }) => {
        const { state, setParams } = navigation;
        //const isInfo = state.params.mode === "info";
        const { productId } = state.params;

        return {
            title: "Product Details: " + productId
        };
    };

    render () {
        return (
            <Text>We did it Ma! We finally did it!!</Text>
        );
    }
}
