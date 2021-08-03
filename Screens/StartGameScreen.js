import React , {useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput, Keyboard, Alert, TouchableWithoutFeedback } from 'react-native'
import Card from '../Component/Card'
import Input from '../Component/Input'
import NumberContainer from '../Component/NumberContainer'
import Colors  from '../Constants/Colors';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue ] = useState("");
    const [confirmed, setConfirmed]=useState(false);
    const [selectedNumber, setSelectedNumber]=useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ""));

    };
    const resetHandler = () => {
        setEnteredValue("");
        setConfirmed(false);
    };
    const confirmInputHandler =() => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99){
            Alert.alert("Invaild Input","Only 1 to 99 digits allowed");
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue("");
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed){
        confirmedOutput = <Card style={styles.confirmContainer}>
            <Text>You Selected</Text>
            <NumberContainer>
                <Text>{selectedNumber}</Text>
            </NumberContainer>
            <Button title="Start Game" color="black" onPress = {()=>{props.onStart(selectedNumber)}}/>

            
        </Card>
    };
    return (
        <TouchableWithoutFeedback onPress={() =>{
             Keyboard.dismiss();
         }}
         >
            <View style={styles.screen}>
                <Text style={styles.title}> START A NEW GAME ! </Text>
                <Card style={styles.inputbody}>
                    <Text>Select a number</Text>
                    <Input style={styles.input}
                        maxLength={2}
                        keyboardType="number-pad"
                        value={enteredValue}
                        onChangeText={numberInputHandler}
                        autoCorrect={false}
                        bluronSumbit
                        autoCapitaliz="none"
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttons}>
                            <Button title="Reset" onPress = {resetHandler} color={Colors.accent} />
                        </View>
                        <View style={styles.buttons }>
                            <Button title="Confirm" onPress = {confirmInputHandler} color={Colors.primary}/>
                        </View>
                    </View>

                </Card>
                {
                    confirmedOutput
                    }
                </View>
        </TouchableWithoutFeedback>
    );
};

export default StartGameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems:"center"
        
      },
    title:{
        fontSize:15,
        marginVertical:10
      },
    inputbody:{
          fontSize:10,
          maxWidth: '80%',
          alignItems:"center"
        },
    input:{
        width: 50,
        textAlign: "center"
        },
    buttonContainer:{
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 10,
        justifyContent: "space-between",


    },
    confirmContainer:{
        marginTop: 20,
        alignItems:"center"
        
    },
    buttons:{
        width:90
    }
    
})
