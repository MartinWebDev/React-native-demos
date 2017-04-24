// Import main React Components
import React, { Component } from 'react';

import {
    Text, 
    View, 
    Button, 
    Image, 
    StyleSheet, 
    ScrollView, 
    TouchableHighlight
} from 'react-native';

import { GlobalStyles } from './Styles/GlobalStyles';
import { ProductService } from './Services/ProductsService';

// Build up and export component
export class ProductsScreen extends Component {
    // Temporary as this will move to the outer most product list component. For now, just testing
    constructor(props) {
        super(props);

        this.state = { products: [], itemsOnLastRow: [] };
    }

    componentDidMount() {
        var prodServ = new ProductService();
        this.setState({ products: prodServ.getProductsList() });
    }

    static navigationOptions = {
        tabBarLabel: "Home", 
        tabBarIcon: ({focused, tintColor}) => (
            <Image 
                source={focused ? require("./icons/Shopping-Bag-Filled-24.png") : require("./icons/Shopping-Bag-24.png")} 
                style={[GlobalStyles.tabIcon, { tintColor: tintColor }]} 
            />
        )
    };
    
    render () {
        return (
            <ScrollView style={productStyles.productListView}  onLayout={(event) => {
                const minItemWidth = 172; // Width of the item's outer most view + the margin around it

                // Since we have to put this here, we must subtract any internal padding from this wrapper
                var width = Math.floor(event.nativeEvent.layout.width - 8);
                var itemsScreenCanDisplay = Math.floor(width / minItemWidth);

                // From this we can calculate how many items will be on the last row and how many fake ones we need
                var tmpNumItems = this.state.products.length % itemsScreenCanDisplay
                var tmpFakesNeeded = tmpNumItems > 0 ? itemsScreenCanDisplay - tmpNumItems : 0;
                var tmpArray = [];

                for (var i = 0; i < tmpFakesNeeded; i++) {
                    tmpArray.push(i);
                }
                
                this.setState({ itemsOnLastRow: tmpArray });
            }}>
                <ProductsList products={this.state.products} itemsOnLastRow={this.state.itemsOnLastRow} />
            </ScrollView>
        );
    }
}

class ProductsList extends Component {
    render () {
        var productNodes = this.props.products.map((product) => {
            return (
                
                <View key={product.productId} style={productStyles.thumbView}>
                    <TouchableHighlight activeOpacity={0.8} onPress={() => {
                        console.log("Clicked");
                    }}>
                        <View>
                            <Image source={{ uri: product.productImageUri }} style={GlobalStyles.productThumbnail} />
                            <Text>{product.productName}</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            );
        });

        var blankNodes = this.props.itemsOnLastRow.map((i) => {
            console.log("Generating fake: " + i.toString());
            return (
                <View key={"fake" + i.toString()} style={productStyles.thumbPlaceholder}></View>
            );
        });

        return (
            <View style={productStyles.listWrapper}>
                {productNodes}

                {/* Insert fake placeholders to avoid flexbox distribution issue*/}
                {blankNodes}
            </View>
        );
    }
}


const productStyles = StyleSheet.create({
    productListView: {
        flex: 1
    }, 
    listWrapper: {
        flex: 1, 
        flexWrap: "wrap", 
        flexDirection: "row", 
        justifyContent: "space-around", 
        margin: 4
    }, 
    thumbView: {
        width: 160, 
        borderWidth: 1, 
        borderColor: "#CCC", 
        backgroundColor: "#FFF", 
        padding: 4, 
        margin: 4
    }, 
    thumbTitle: {}, 
    thumbPrice: {}, 
    thumbWasPrice: {}, 
    thumbPlaceholder: {
        width: 160, 
        margin: 4
    }
});