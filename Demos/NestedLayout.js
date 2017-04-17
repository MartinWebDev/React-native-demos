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
            Container
                Row1
                    Col1
                    Col2
                Row2
                    Col1
                    Col2
                        Row1
                            Col1
                            Col2
                        Row2
                        Row3
                            Col1
                            Col2
                            Col3
                                Row1
                                Row2
                                    Col1
                                    Col2
                Row3
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
    Container: {
        flexDirection: 'column'
    }, 
        Row1: {
            flex: 2, 
            backgroundColor: 'red'
        }, 
            Row1Col1: {}, 
            Row1Col2: {}, 
        Row2: {
            flex: 2, 
            backgroundColor: 'blue'
        }, 
            Row2Col1: {}, 
            Row2Col2: {}, 
                Row2Col2Row1: {}, 
                    Row2Col2Row1Col1: {}, 
                    Row2Col2Row1Col2: {}, 
                Row2Col2Row2: {}, 
                Row2Col2Row3: {}, 
                    Row2Col2Row3Col1: {}, 
                    Row2Col2Row3Col2: {}, 
                    Row2Col2Row3Col3: {}, 
                        Row2Col2Row3Col3Row1: {}, 
                        Row2Col2Row3Col3Row2: {}, 
                            Row2Col2Row3Col3Row2Col1: {}, 
                            Row2Col2Row3Col3Row2Col2: {}, 
        Row3: {
            flex: 2, 
            backgroundColor: 'green'
        }
});