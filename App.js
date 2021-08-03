import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Component/Header';
import GameScreen from './Screens/GameScreen';
import StartGameScreen from './Screens/StartGameScreen';
import GameOverScreen from './Screens/GameOverScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


const fetchFont = () => {
  return Font.loadAsync({
    "MonteCarlo-Regular": require("./assets/fonts/MonteCarlo-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoaded , setFontLoaded] = useState(false);
  const [userChoice, setUserChoice] = useState();
  const [guessRounds , setGuessRounds] = useState(0);

if (!fontLoaded){
  return(
      <AppLoading 
      startAsync={fetchFont}
      onError={() => console.log("ERROR")}
      onFinish={() => {
        setFontLoaded(true);
      }}
      />
  );
}

const newGameHandler = () => {
  setGuessRounds(0);
  setUserChoice(null);
}  
const startGameHandler = selectedNumber => {
  setUserChoice(selectedNumber);
  setGuessRounds(0);
};

const gameOverHandler = numOfRounds => {
  setGuessRounds(numOfRounds);
};

let content = <StartGameScreen onStart = {startGameHandler}/>;

if (userChoice && guessRounds <=0){
  content = <GameScreen userChoice = {userChoice} onGameOver={gameOverHandler}/>
}else if (guessRounds >0){
  content =<GameOverScreen roundsNumber={guessRounds} userChoice={userChoice}  onRestart={newGameHandler}/>
}

  return (
    <View style={styles.container}>
      <Header title="Guess A Number: "/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center"
  }
});
