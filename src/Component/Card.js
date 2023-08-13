import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native'

export default function Card(props) {


    return (
        <View style={[styles.container, styles.shadow]}>
            <Image
                source={{
                    uri: props.item.Image
                }}
                style={{ width: 130, height: 100, borderRadius: 2, objectFit: 'contain' }}
            />
            <Text>
                <Text style={{ fontWeight: 'bold' }}>Brand:</Text> {props.item.Brand}
            </Text>

            <Text > {props.item.title} </Text>
            <Text style = {{color : "#dc3545"}} > Rs.{props.item.Price} </Text>
            <TouchableOpacity>
                <Text style={styles.buttonStyle} onPress={() => {
                    alert('Added to Cart!')
                }}>
                    Add to Cart
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 35,
        marginTop: 30,
        width: 130,
        backgroundColor: '#e5e3e3',
        height: 210,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#d2d2d2',
        shadowColor: 'black',
        gap: 2
    },
    shadow: {
        elevation: 5, // For Android
        shadowColor: '#000',
        shadowOpacity: 0.25,
      },
    buttonStyle: {
        backgroundColor: "#dc3545",
        textAlign: "center",
        paddingVertical: 8,
        width: 130,
        borderRadius: 4,
        color: "#fff"

    }
})