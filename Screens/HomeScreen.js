import { useState } from "react";
import { Button, View , StyleSheet, TextInput, Alert} from "react-native";
import CustomButton from '../components/button';
import GuessInputBox from '../components/guessInputBox';
import Title, { Customtitle } from '../components/title';
//const [count, setCount] = useState(0);



function HomeScreen ({onPickNumber}){

  const [getState, setState]= useState(true); 
 const [getInput, setInput]= useState([]);
 function getInputValue(value){
  setInput(value);
  console.log(value); 
}

    

 
 function onResetButtonClick(){ 
setInput([]);

console.log('reset clicked' +getInput);
 }
 
 function onConfirmButtonClick(){
const numberconv= parseInt(getInput)
if(Number.isNaN(numberconv)){
  Alert.alert('Invalid','The number you entered is invalid',);
}
else{
setState(false);
onPickNumber(getInput);
  console.log('submitted value'+getInput);
}
   }
 return (

<View>
  <Customtitle> Lets get Started, Enter a number  </Customtitle>
  <GuessInputBox button1='Reset' button2='Confirm' onButton1Click={onResetButtonClick} onButton2Click={onConfirmButtonClick} getValueFromInput={getInputValue} setValue={getInput}></GuessInputBox>

  </View>
    ); 
}


const style= StyleSheet.create({
  buttonViewHolder:{

    flexDirection:'row'
  },
  viewHolder:{
alignItems:'center',
    padding: 25,
    backgroundColor:'#812e48',
    borderRadius: 20,
    marginHorizontal: 20,
    //marginTop: 90,
    marginTop:370,
//borderRadius: 10,
shadowColor:'#d9d9c3',
shadowOpacity:0.70,
shadowRadius:9


  },
  view_input:{
    
   width:40,
    height: 50,
    fontSize:40,
    borderBottomWidth:2,
    fontWeight:'bold'
  },
  view_resetbutton:{

  },
  buttonContainer:{
    flex: 1
  }
  
})

export default HomeScreen;