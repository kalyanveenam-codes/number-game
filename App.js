import { StatusBar } from 'expo-status-bar';
import {LinearGradient} from 'expo-linear-gradient';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import GameScreen from './Screens/GameScreen';
import { useState } from 'react';
import GameOverScreen from './Screens/GameOverScreen';

export default function App() {
const [isGameOver,setGameOverHandler] = useState(true);
  const [getUserNumber, setUserNumber]=useState();
  function pickedNumber(pickedNumber){
    setUserNumber(pickedNumber);
      }
    function  setGameOverState(value){
  
      setGameOverHandler(value);
    }

 
 let screen =<HomeScreen onPickNumber={pickedNumber} setGameState={setGameOverState}/>;

if(getUserNumber){
 // setGameOver(false);
  screen= <GameScreen  enteredNumber={getUserNumber} setGameState={setGameOverState}/>;
}
if(isGameOver && getUserNumber){
  screen= <GameOverScreen />
}



return (
    
    <LinearGradient colors={['#4c34b4', '#ca6a93' , '#797375']} style={styles.container}>
     <ImageBackground source={require('./assets/dice.png')} imageStyle={styles.imgcont} style={styles.container} resizeMode='cover'>
     
     {screen}
     </ImageBackground> 
      </LinearGradient> 

     
  
  );
}

const styles = StyleSheet.create({
container:{

  flex:1
},
imgcont:{
  opacity:0.15
}
});