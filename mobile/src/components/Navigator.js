import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class Navigator extends Component {
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.grid}
                    onPress={() => this.props.page(0)}
                >
                    <Text>^</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.grid}
                    onPress={() => this.props.page(1)}
                >
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.grid}
                    onPress={() => this.props.page(2)}
                >
                    <Text>õ</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        height: "5%",
        width: "100%",
        flexDirection: 'row',
        alignSelf: 'flex-start'
    },
    grid: {
        width: "33%",
        alignItems: 'center',
        justifyContent: 'center'
    }
});