import { StatusBar } from 'expo-status-bar';
import {LinearGradient} from 'expo-linear-gradient';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import GameScreen from './Screens/GameScreen';
import { useState } from 'react';

export default function App() {

  const [getUserNumber, setUserNumber]=useState();
  function pickedNumber(pickedNumber){
    setUserNumber(pickedNumber);
      }
 let screen =<HomeScreen onPickNumber={pickedNumber} />;

if(getUserNumber){
  screen= <GameScreen />;
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