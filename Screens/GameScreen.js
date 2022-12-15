import { useState } from "react";
import { View , Text, SafeAreaView } from "react-native";
import {customButton} from '../components/button';
import{NumberContainer} from '../components/numberContainer'
import {Customtitle} from '../components/title';
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
           <Customtitle>Opponents call</Customtitle>
          
          <NumberContainer>{randomnumber}</NumberContainer>
          
           {/* <customButton> RESET</customButton> */}
        </View>
        </SafeAreaView>
    );
}

export default gameScreen;