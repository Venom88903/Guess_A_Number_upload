import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../Constants/Colors'

const NumberContainer = (props) => {
    return (
        <View {...props} style={{...styles.numberContainer, ...props.style}}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

export default NumberContainer

const styles = StyleSheet.create({
    numberContainer:{
        height:60,
        width:60,
        borderWidth:2,
        borderColor: "black",
        padding: 10,
        borderRadius: 10,
        marginVertical:10,
        alignItems:"center",
        justifyContent:"center"
    },
    number:{
        color: Colors.accent,
        fontSize:22
    }
})
