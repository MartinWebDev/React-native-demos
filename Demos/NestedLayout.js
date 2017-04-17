// Import main react and react-native modules
import React, { Component } from 'react';
import {
    Text, 
    StyleSheet, 
    View, 
    Image
} from 'react-native';

export class NestedLayout extends Component {
    render () {
        /*
        Understanding "flex": 
            Flex is one of the main ways to distribute your columns and rows on the screen, 
            regardless of screen resolution, device model, or device orientation. 
            To understand how it calculates the size of each item you need a little bit of math. 

            Since with flex you can enter any number, it is not immediately clear how it works, 
            but the easiest way to think of it is: 
                - For any row or column using flex, the values of each component using it is added together, 
                - then shared as a fraction using the value given. 
            
            As an example, let's say you have 3 "View" components, and their "flex" values are as follows:
                - View1 = 4
                - View2 = 6
                - View3 = 2
            
            To calculate how much space each item will take, these numbers will first be added together: 
                4 + 6 + 2 = 12
            Then the flex value will represent how many parts of this total number each view takes up: 
                - View1 = 4/12
                - View2 = 6/12
                - View3 = 2/12
            
            Now we use basic fraction logic to turn these into their smallest value
                - 4/12 = 1/3
                - 6/12 = 1/2
                - 2/12 = 1/6
            
            Using this basic idea we now know the following: 
                - View1 will take up 1 third of the screen
                - View2 will take up half of the screen
                - View3 will take up 1 sixth of the screen
         */

        return (
            <View style={styles.Container}> 
                <View style={styles.Row1}>
                    <View style={styles.Row1Col1}><Text>1</Text></View>
                    <View style={styles.Row1Col2}><Text>2</Text></View>
                </View>
                
                <View style={styles.Row2}>
                    <View style={styles.Row2Col1}>
                        <Text>3</Text>
                    </View>

                    <View style={styles.Row2Col2}>
                        <View style={styles.Row2Col2Row1}>
                            <View style={styles.Row2Col2Row1Col1}><Text>4</Text></View>

                            <View style={styles.Row2Col2Row1Col2}><Text>5</Text></View>
                        </View>

                        <View style={styles.Row2Col2Row2}><Text>6</Text></View>
                        
                        <View style={styles.Row2Col2Row3}>
                            <View style={styles.Row2Col2Row3Col1}><Text>7</Text></View>
                            <View style={styles.Row2Col2Row3Col2}><Text>8</Text></View>
                            <View style={styles.Row2Col2Row3Col3}>
                                <View style={styles.Row2Col2Row3Col3Row1}><Text>9</Text></View>

                                <View style={styles.Row2Col2Row3Col3Row2}>
                                    <View style={styles.Row2Col2Row3Col3Row2Col1}><Text>10</Text></View>

                                    <View style={styles.Row2Col2Row3Col3Row2Col2}><Text>11</Text></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                
                <View style={styles.Row3}>
                    <Text>12</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // This stylesheet has been indented to match the nested level which the component above sits at. 
    // This is to make it easier to read, but is not essential when developing a real application. 
    Container: {
        flex: 1, // In this demo the container must be set to flex: 1 or it will not stretch the full screen and your components will not display
        flexDirection: 'column' // The parent item of anything using flex can set the direction, column or row
    }, 
        Row1: {
            flex: 1, 
            flexDirection: 'row'
        }, 
            Row1Col1: { 
                flex: 1, 
                backgroundColor: '#001F3F'
            }, 
            Row1Col2: { 
                flex: 1, 
                backgroundColor: '#0074D9'
            }, 
        Row2: {
            flex: 10, 
            flexDirection: 'row'
        }, 
            Row2Col1: { 
                flex: 1, 
                backgroundColor: '#7FDBFF'
            }, 
            Row2Col2: { 
                flex: 4, 
                flexDirection: 'column'
            }, 
                Row2Col2Row1: { 
                    flex: 1, 
                    flexDirection: 'row'
                }, 
                    Row2Col2Row1Col1: { 
                        flex: 1, 
                        backgroundColor: '#39CCCC'
                    }, 
                    Row2Col2Row1Col2: { 
                        flex: 1, 
                        backgroundColor: '#3D9970'
                    }, 
                Row2Col2Row2: { 
                    flex: 2, 
                    backgroundColor: '#2ECC40'
                }, 
                Row2Col2Row3: { 
                    flex: 1, 
                    flexDirection: 'row'
                }, 
                    Row2Col2Row3Col1: { 
                        flex: 1, 
                        backgroundColor: '#01FF70'
                    }, 
                    Row2Col2Row3Col2: { 
                        flex: 1, 
                        backgroundColor: '#FFDC00'
                    }, 
                    Row2Col2Row3Col3: { 
                        flex: 2, 
                        flexDirection: 'column' 
                    }, 
                        Row2Col2Row3Col3Row1: { 
                            flex: 1, 
                            backgroundColor: '#FF851B'
                        }, 
                        Row2Col2Row3Col3Row2: {
                             flex: 1 , 
                             flexDirection: 'row' 
                        }, 
                            Row2Col2Row3Col3Row2Col1: { 
                                flex: 1, 
                                backgroundColor: '#FF4136'
                            }, 
                            Row2Col2Row3Col3Row2Col2: { 
                                flex: 1, 
                                backgroundColor: '#85144b'
                            }, 
        Row3: {
            flex: 2, 
            backgroundColor: '#F012BE'
        }
});