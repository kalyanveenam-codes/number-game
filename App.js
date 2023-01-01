import { StatusBar } from 'expo-status-bar';
import {LinearGradient} from 'expo-linear-gradient';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import GameScreen from './Screens/GameScreen';
import { useState } from 'react';
import AppLoader from 'expo-app-loading'
import {useFonts} from 'expo-font'
import GameOverScreen from './Screens/GameOverScreen';

export default function App() {
const [isGameOver,setGameOverHandler] = useState(true);
  const [getUserNumber, setUserNumber]=useState();
  const [getCounter,setCounter]= useState(0);
const [fontsLoaded] = useFonts({
  'opensans-bold':require('./assets/fonts/OpenSans-Bold.ttf'),
  'opensans':require('./assets/fonts/OpenSans-Regular.ttf')

});
if(!fontsLoaded){
return <AppLoader />
}
function pickedNumber(pickedNumber){
    setUserNumber(pickedNumber);
      }

function setroundCounter(value){
  setCounter(value);
}

    function  setGameOverState(value){
 
      setGameOverHandler(value);
    }
    function newGameSetup(){
      setCounter(0);
      setUserNumber(null);
  
    }

 
 let screen =<HomeScreen onPickNumber={pickedNumber} setGameState={setGameOverState}/>;

if(getUserNumber){
  screen= <GameScreen  enteredNumber={getUserNumber} setGameState={setGameOverState} setCounter={setroundCounter} />;
}
if(isGameOver && getUserNumber){
  screen= <GameOverScreen enteredNumber={getUserNumber} roundCounter={getCounter} setNewGame={newGameSetup}/>
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