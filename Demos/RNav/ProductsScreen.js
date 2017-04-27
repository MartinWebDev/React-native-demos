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

        console.info("Screen Constructor");
        console.log(this.props);
    }

    componentDidMount() {
        var prodServ = new ProductService();
        this.setState({ products: prodServ.getProductsList() });
    }

    static navigationOptions = ({ navigation,  screenProps }) => {
        return {
            tabBarLabel: "Products", 
            tabBarIcon: ({focused, tintColor}) => (
                <Image 
                    source={focused ? require("./icons/Shopping-Bag-Filled-24.png") : require("./icons/Shopping-Bag-24.png")} 
                    style={[GlobalStyles.tabIcon, { tintColor: tintColor }]} 
                />
            )
        };
    };

    render () {
        return (
            <ScrollView style={productStyles.productListView}  onLayout={(event) => {
                /**
                 * This little function will automatically recalculate how many "fake" products items are 
                 * required after each device re-orientation in the list view in order to keep the flex 
                 * view displaying correctly. 
                 */

                // First calculate how much space across the screen width each product thumbnail will take. 
                // We can read the values from the stylesheet so that if we ever change the style we do not 
                // need to also change this function, it will just update automatically. 
                var thumbStyle = StyleSheet.flatten(productStyles.thumbView);
                const minItemWidth = thumbStyle.width + (thumbStyle.margin * 2);

                // Now we need to get the margin of the list wrapper, and subtract this screen width
                var wrapperStyle = StyleSheet.flatten(productStyles.listWrapper);
                var width = Math.floor(event.nativeEvent.layout.width - (wrapperStyle.margin * 2));

                // Now we know the internal width of the list wrapper we can calculate how many items will fit across it
                var itemsScreenCanDisplay = Math.floor(width / minItemWidth);

                // From this we can calculate how many items will be on the last row and how many fake ones we need
                var tmpNumItems = this.state.products.length % itemsScreenCanDisplay;
                var tmpFakesNeeded = tmpNumItems > 0 ? itemsScreenCanDisplay - tmpNumItems : 0;

                // Now we know how many fake items need to be inserted to keep flex displaying correctly, the idea I 
                // came up with to generate these, and re-generate them every time the screen orientation changes is 
                // to build an array the size of the number of fake items we need, then bind this to the "props" 
                // of the Component. Then inside the list component this is mapped to a function which inserts fake items. 
                // When this array gets changed (IE: When the screen orientation changes) the component will re-render 
                // updating the display to include any changes required to the number of fake items. 
                // Do not worry, this will not result in a new request to the server to get the products as the list stays 
                // in memory unless that "prop" gets changed. Only the fake items are re-generated, so speed should not 
                // be an issue here. 
                var tmpArray = [];

                for (var i = 0; i < tmpFakesNeeded; i++) {
                    tmpArray.push(i);
                }
                
                this.setState({ itemsOnLastRow: tmpArray });
            }}>
                <ProductsList 
                    products={this.state.products} 
                    itemsOnLastRow={this.state.itemsOnLastRow} 
                    productClickEvent={this.handleProductClick} 
                    navigation={this.props.navigation} 
                />
            </ScrollView>
        );
    }
}

class ProductsList extends Component {
    handleProductClick (productId) {
        this.props.navigation.navigate("ProductDetails", { productId: productId });
    }

    render () {
        var productNodes = this.props.products.map((product) => {
            return (
                <View key={product.productId} 
                    style={[productStyles.thumbView, {justifyContent: "space-between", backgroundColor: "#FFF"}]}
                >
                    <TouchableHighlight style={{flex: 1, backgroundColor: "#FFF"}} activeOpacity={0.8} underlayColor="#0074D9" onPress={() => {
                        this.handleProductClick(product.productId);
                    }}>
                        <View style={{ flex: 1, flexDirection: "column", backgroundColor: "#FFF" }}>
                            <View style={{ flex: 1, flexGrow: 10, backgroundColor: "#FFF" }}>
                                <View style={{ alignItems: "center" }}>
                                    <Image source={{ uri: product.productImageUri }} style={GlobalStyles.productThumbnail} />
                                </View>
                                <Text style={productStyles.thumbTitle} numberOfLines={1} ellipsizeMode={"tail"}>{product.productName}</Text>
                            </View>
                            
                            <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#FFF" }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={productStyles.thumbPrice}>{"$" + product.productPrice.toFixed(2)}</Text>
                                </View>

                                <View style={{ flex: 1 }}>
                                    <Text style={productStyles.thumbWasPrice}>
                                        {(product.productWasPrice != null && product.productWasPrice > 0) ? "$" + product.productWasPrice.toFixed(2) : ""}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
            );
        });

        var blankNodes = this.props.itemsOnLastRow.map((i) => {
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
        width: 185, 
        borderWidth: 1, 
        borderColor: "#CCC", 
        backgroundColor: "#FFF", 
        padding: 4, 
        margin: 4
    }, 
    thumbTitle: {
        fontWeight: "bold", 
        fontSize: 16
    }, 
    thumbPrice: {
        fontSize: 20
    }, 
    thumbWasPrice: {
        textAlignVertical: "bottom", 
        flex: 1, 
        textAlign: "right", 
        color: "#FF7575", 
        textDecorationLine: "line-through", 
        fontStyle: "italic"
    }, 
    thumbPlaceholder: {
        width: 185, 
        margin: 4
    }
});