import React from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import { useState , useRef , useEffect} from 'react';
import NumberContainer from '../Component/NumberContainer';
import Card from '../Component/Card';
import Colors from '../Constants/Colors';

const generateRandom =(min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude){
        return generateRandom(min, max, exclude);
    } else {
        return randomNumber;
    }
};



const GameScreen = props => {

    const [initialGuess , setInitialGuess] =  useState(
        generateRandom(1 ,100 , props.userChoice) 
    );
    

    const [rounds , setRounds]  = useState(0);
    const initialLow = useRef(1);
    const initialHigh = useRef(100);

    const { userChoice , onGameOver} = props;

    useEffect(() => {
        if(initialGuess == userChoice){
            onGameOver(rounds);
        }
    },[initialGuess , userChoice ,onGameOver]);
     

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && props.userChoice>initialGuess) ||
            (direction === 'greater' && props.userChoice<initialGuess)){
                Alert.alert("Don't lie!", 'You know that this is wrong...' , [{ text:"Sorry!" , style:"cancel" }]);
                return;
            }
            if (direction === 'lower' ){
                initialHigh.current = initialGuess;
            }else{
                initialLow.current = initialGuess;
            }

        const nextGuess = generateRandom(initialLow.current ,initialHigh.current , initialGuess);
        setInitialGuess(nextGuess);
        setRounds(curRounds => curRounds + 1);
    }

    return (
        <View style={styles.body}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{initialGuess}</NumberContainer>
            
            <Card style={styles.buttonContainer}>
                <Button title="Lower" onPress={() => { nextGuessHandler('lower') }}/>
                <Button title="Greater" onPress={() => { nextGuessHandler('greater') }}/>
            </Card>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    body:{
        flex: 1,
        padding: 10,
        alignItems:"center"
        
    },

    buttonContainer:{
        flexDirection: "row",
        justifyContent:"space-around",
        marginTop: 20,
        width:300,
        height: 100,
        maxWidth: '80%'
        

    }
})
