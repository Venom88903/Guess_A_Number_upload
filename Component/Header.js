import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
import Colors from '../Constants/Colors';

const Header = props => {
    return (
        <View style={styles.headerBackground}>
            <Text style={styles.titleText}>
                {props.title}
            </Text>
        </View>
    )
}

export default Header
const styles = StyleSheet.create({
    headerBackground:{
        width:"100%",
        height:80,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        justifyContent:"center",
        alignItems:"center"
    },
    titleText:{
        color:"black",
        fontSize:15,
        fontWeight:"bold"

    }
})



