import { useEffect, useState } from "react";
import { View , SafeAreaView, Alert } from "react-native";
import CustomButton from '../components/button';
import{NumberContainer} from '../components/numberContainer'
import {Customtitle} from '../components/title';
let minValue=1;
let maxValue=100;
function generateRandomNumber(min,max,exclude) {

    const rdm=Math.floor(Math.random()*(max-min))+min;
    if(rdm ===exclude){
     return  generateRandomNumber(min,max,exclude)
    }
    else {
        return rdm;
    }
      
  }

function gameScreen ({enteredNumber, setGameState}){
   console.log('coming')
   
    const initialGuess= generateRandomNumber(1,100,enteredNumber);
    const [currentGuess, setCurrentGuess]=useState(initialGuess); 
    useEffect(()=> {
        console.log('coming to useEffect ',currentGuess,enteredNumber,typeof currentGuess, typeof enteredNumber);
        if(currentGuess == enteredNumber){
        console.log('game over')
        setGameState(true);
    }
   }, [currentGuess]);
    function nextGuessHandler(direction){

    const randomnumber= generateRandomNumber(minValue,maxValue,enteredNumber);
 
        if(direction === 'higher' && enteredNumber < currentGuess || direction=== 'lower' && enteredNumber > currentGuess){
            Alert.alert('Invalid','You are lying');
            return;
        }
        
        if(direction==='higher'){
        minValue=currentGuess;      
        }
        else{  
        maxValue= currentGuess;   
        }
        console.log(minValue, maxValue);
        const rand=generateRandomNumber(minValue,maxValue,enteredNumber)
        setCurrentGuess(rand);
        console.log('clicked'+direction)
     
    }
    
    return (
        <SafeAreaView>
        <View>
           <Customtitle>Opponents call</Customtitle>
          
          <NumberContainer>{currentGuess}</NumberContainer>
        
           <View>
           <CustomButton pressListener={nextGuessHandler.bind(this, 'higher')}> Higher</CustomButton>
           <CustomButton pressListener={nextGuessHandler.bind(this,'lower')}> Lower</CustomButton>
           </View>
        </View>
        </SafeAreaView>
    );
}


export default gameScreen;