// Import main react and react-native modules
import React, { Component } from 'react';
import {
    Text, 
    StyleSheet, 
    View, 
    ScrollView, 
    Image
} from 'react-native';

// Classes for Component
class Product extends Component {
    render() {
        let thumb = "https://www.redmolotov.com//images/designs/rock-homer-simpson-tshirt_thumb.jpg";

        return (
            <View style={productStyle.productContainer}>
                <View style={productStyle.productImageArea}>
                    <Image source={{uri: thumb}} style={{width: 180, height: 180}} />
                </View>

                <Text style={productStyle.productDetails}>Some amazing t-shirt. You should buy this item!</Text>
                <Text style={productStyle.productPrice}>
                    {this.props.price == 0 ? "FREE" : "$" + this.props.price.toFixed(2)}
                </Text>
            </View>
        );
    }
}

// Export the main Component which can then be imported elsewhere
export class BasicLayout extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require("./imgs/AwesomeShopLogo.png")} />
                </View>

                <View style={styles.navRowContainer}>
                    <View style={[styles.navRowItem, { backgroundColor: 'blue' }]}><Text>One</Text></View>
                    <View style={[styles.navRowItem, { backgroundColor: 'red' }]}><Text>Two</Text></View>
                    <View style={[styles.navRowItem, { backgroundColor: 'green' }]}><Text>Three</Text></View>
                </View>

                <ScrollView>
                    <View style={productStyle.productsContainer}>
                        <Product price={19.99} />
                        <Product price={29.90} />
                        <Product price={9.49} />
                        <Product price={0} />
                        <Product price={99.99} />
                        <Product price={12.34} />
                        <Product price={43.21} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

// Stylesheets for this module
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EAEAEA', 
        flex: 1
    }, 
    header: {
        backgroundColor: '#EBEBEB', 
        height: 50, 
        borderBottomWidth: 6, 
        borderBottomColor: '#0074D9', 
        alignItems: 'center'
    }, 
    navRowContainer: {
        //flex: 1, 
        flexDirection: 'row', 
        height: 50
    }, 
    navRowItem: {
        flex: 1
    }
});

const productStyle = StyleSheet.create({
    productsContainer: {
        marginTop: 12, 
        alignItems: 'center', 
        justifyContent: 'center'
    }, 
    productContainer: {
        width: 300, 
        alignContent: 'center', 
        backgroundColor: '#FFF', 
        borderColor: '#DDD', 
        borderWidth: 2, 
        marginBottom: 12
    }, 
    productImageArea: {
        alignItems: 'center'
    }, 
    productDetails: {
        padding: 8, 
        fontSize: 18
    }, 
    productPrice: {
        padding: 8, 
        fontSize: 24, 
        textAlign: 'right'
    }
});