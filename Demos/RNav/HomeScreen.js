// Import main React Components
import React, { Component } from 'react';

import {
    Text, 
    View, 
    Button, 
    Image, 
    StyleSheet, 
    ScrollView
} from 'react-native';

import { GlobalStyles } from './Styles/GlobalStyles';

// Build up and export component
export class HomeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: "Home", 
        tabBarIcon: ({focused, tintColor}) => (
            <Image 
                source={focused ? require("./icons/Home-Filled-24.png") : require("./icons/Home-24.png")} 
                style={[GlobalStyles.tabIcon, { tintColor: tintColor }]} 
            />
        )
    };

    constructor(props) {
        super(props);

        this.state = { isPortrait: true, screenWidth: 0 };
    }

    render () {
        return (
            <ScrollView onLayout={(event) => {
                //var orientation = event.nativeEvent.orientation;
                const { height, width } = event.nativeEvent.layout;
                this.setState({
                    isPortrait: width > height ? false : true, 
                    screenWidth: width
                });
            }}>
                <View style={homeStyles.wrapper}>
                    {/* This is just temporary. A single click button to navigate directly to the product detail page
                    This is because I'm lazy and don't want to go through the whole workflow each time I edit the file
                    and reload the app */}

                    <Button style={{height: 200}} title="GO TO PRODUCT 3" onPress={
                        () => {
                            this.props.navigation.navigate("ProductDetails", { productId: 3 });
                        }
                    } />

                    <View style={homeStyles.header}>
                        <Image source={require("./screenImages/logo.jpg")} />
                    </View>

                    <View style={homeStyles.bannerArea} >
                        <Image style={{ height: 250 }}
                            source={
                                this.state.isPortrait ? 
                                    require("./screenImages/Home/BannerPortrait.jpg") : 
                                    require("./screenImages/Home/BannerLandscape.jpg")} 
                        />
                    </View>

                    <Text>Hello</Text>
                </View>
            </ScrollView>
        );
    }
}

const homeStyles = StyleSheet.create({
    wrapper: {
        flex: 1, 
        alignItems: 'stretch', 
        backgroundColor: '#F5FCFF'
    }, 
    header: {
        backgroundColor: '#FFF', 
        height: 54, 
        borderBottomWidth: 4, 
        borderBottomColor: '#0074D9', 
        alignItems: 'center'
    }, 
    bannerArea: {
        flex: 1, 
        borderBottomWidth: 4, 
        borderBottomColor: '#0074D9', 
        alignItems: 'flex-end', 
        justifyContent: "flex-end"
    }
});