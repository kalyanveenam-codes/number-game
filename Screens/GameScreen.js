import { useState } from "react";
import { View , Text, SafeAreaView, StyleSheet } from "react-native";
import {customButton} from '../components/button';
import{NumberContainer} from '../components/numberContainer'
import {Customtitle} from '../components/title';
import GuessInputBox from '../components/guessInputBox';
//const [getRandom, setRandom]=useState();
function generateRandomNumber(min,max,exclude) {
    const rdm=Math.floor(Math.random()*(max-min))+min;
    if(rdm ===exclude){
     return  generateRandomNumber(min,max,exclude)
    }
    else {
        return rdm;
    }
      
  }

function gameScreen (){
   

    const randomnumber= generateRandomNumber(1,100,45);
    
    console.log('randomnumber'+randomnumber)
    return (
        <SafeAreaView>
        <View>
           <Customtitle>Opponent's Guess</Customtitle>
           <GuessInputBox button1='Confirm' button2='Clear' ></GuessInputBox>
          <View style={style.containerView}>
          <NumberContainer >{randomnumber}</NumberContainer>
          </View>
           {/* <customButton> RESET</customButton> */}
        </View>
        </SafeAreaView>
    );
}
const style= StyleSheet.create({
    containerView:{
    margin:20
    }
})
export default gameScreen;