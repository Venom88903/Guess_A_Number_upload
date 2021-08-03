import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import NumberContainer from '../Component/NumberContainer';
import Card from '../Component/Card';
import Colors from '../Constants/Colors';

const GameOverScreen = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.textContainer}>The Game is Over!</Text>
            <Card style={styles.cardContainer}>
                <Text style={styles.bodyContainer}>Number of rounds: </Text>
                <Text style={{fontWeight:"bold",  textDecorationLine: 'underline', fontFamily:"MonteCarlo-Regular", fontSize: 30}}>{props.roundsNumber}</Text>
            
                <Text style={styles.bodyContainer}>Number was:</Text>
                <Text style={{fontWeight:"bold" ,  textDecorationLine: 'underline' , fontSize: 30}}>{props.userChoice}</Text>
            </Card>
            <View style={styles.buttonContainer}>
                <Button  title="New Game" color="black" onPress={props.onRestart} />
            </View>
            
        </View>
    )
}

export default  GameOverScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding: 10
    },
    cardContainer:{
        width: "100%",
        height: 250,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#ffff" ,
        padding: 20,
        borderBottomWidth:10
    },
    bodyContainer:{
        justifyContent:"center",
        alignItems:"center",
        fontSize: 20,
        color: '#e91e63'
    },
    buttonContainer:{
        padding: 20,
        
    },
    textContainer:{
        padding:10,
        fontFamily:"MonteCarlo-Regular",
        fontSize: 25


    }
})
