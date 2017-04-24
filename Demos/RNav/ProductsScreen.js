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
import { ProductService } from './Services/ProductsService';

// Build up and export component
export class ProductsScreen extends Component {
    // Temporary as this will move to the outer most product list component. For now, just testing
    constructor(props) {
        super(props);

        this.state = { products: [] };
    }

    componentDidMount() {
        var prodServ = new ProductService();
        this.setState({ products: prodServ.getProductsList() });
    }

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
