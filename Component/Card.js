import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = props => {
    return (
        <View style={{...styles.body , ...props.style}}>
            {props.children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    body:{
        shadowColor: 'black',
        shadowOffset: {width: 0 , height: 2},
        shadowRadius: 8,
        shadowOpacity: 0.26,
        width:300,
        height:200,
        backgroundColor:"#fff",
        padding:30,
        borderRadius:10,
        elevation:5

    }
})