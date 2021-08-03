import React from 'react'
import { StyleSheet, TextInput} from 'react-native'

const Input = (props) => {
    return (
        <TextInput {...props} style={{...styles.inputContainer, ...props.style}}/>
    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer:{
        height:30,
        borderBottomWidth:1,
        borderBottomColor:"grey",
        marginVertical:10
    }
})
