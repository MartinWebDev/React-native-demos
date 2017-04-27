import React, { Component } from 'react';

import {
    Text, 
    View, 
    Button, 
    StyleSheet, 
    ScrollView, 
    Image
} from 'react-native';

import { ProductService } from './Services/ProductsService';

export class ProductDetailsScreen extends Component {
    constructor (props) {
        super(props);

        this.state = { productDetails: {} };
    }

    static navigationOptions = ({ navigation,  screenProps }) => {
        const { state, setParams } = navigation;
        const productName = state.params.productName;
        const { productId } = state.params;

        return {
            title: productName == null ? "Loading..." : productName
        };
    };

    componentDidMount() {
        const { state, setParams } = this.props.navigation;
        const { params } = state;
        const { productId } = params;

        var productService = new ProductService();
        var productDetails = productService.getProductDetails(productId);

        this.setState({ productDetails: productDetails });
        setParams({ productName: productDetails.productName });
    }

    render () {
        return (
            <ProductDetails product={this.state.productDetails} />
        );
    }
}

class ProductDetails extends Component {
    constructor (props) {
        super(props);

        this.state = { descriptionShowMore: false };
    }

    render () {
        let mainImage = this.props.product == null ? 
            require("./screenImages/ProductDetails/loading.gif") : 
            {uri: this.props.product.productFullImageUri};
        
        let stockQuantity = this.props.product == null ? 0 : this.props.product.productQuantityInStock;

        const { product } = this.props;

        return (
            <ScrollView>
                <View>
                    <View>
                        <Image source={mainImage} style={{ height: 200 }} />
                    </View>

                    <View>
                        <Text style={productStyle.productTitle}>{this.props.product.productName}</Text>
                    </View>

                    <View>
                        <View><Text>${this.props.product.productWasPrice}</Text></View>
                        <View><Text>${this.props.product.productPrice}</Text></View>
                    </View>

                    <View>
                        <Text numberOfLines={this.state.descriptionShowMore ? 1000 : 3}
                            ellipsizeMode="tail"
                        >
                            {this.props.product.productDescription}
                        </Text>
                        <Button title={this.state.descriptionShowMore ? "Show Less" : "Show More"}
                            onPress={
                                () => {
                                    this.setState({ descriptionShowMore: !this.state.descriptionShowMore });
                                }
                            } 
                        />
                    </View>
                    <View>
                        <StockQuantityDisplay stockQuantity={stockQuantity} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

class StockQuantityDisplay extends Component {
    render () {
        let { stockQuantity } = this.props;

        return (
            <Text>
                There {stockQuantity <= 1 ? "is" : "are"} {
                    stockQuantity < 5 && stockQuantity != 0 ? 
                    "only " : 
                    ""
                }
                <Text style={ { fontWeight: "bold", color: (stockQuantity < 5 && stockQuantity != 0 ? "#FF6020" : "#333") } }>
                    {stockQuantity}
                </Text>
                &nbsp;in stock.
            </Text>
        );
    }
}

const productStyle = StyleSheet.create({
    productTitle: {
        fontSize: 26, 
        color: "#333", 
        fontWeight: "bold"
    }
});