import { View , StyleSheet, TextInput} from "react-native";
import CustomButton from '../components/button';

function GuessInputBox(props){

return  <View style={style.viewHolder}>
<TextInput style={style.view_input} keyboardType='number-pad' maxLength={2} onChangeText={props.getValueFromInput} value={props.setValue} ></TextInput>
 <View style={style.buttonViewHolder}>
<View style={style.buttonContainer}>
 <CustomButton style={style.view_resetbutton} pressListener={props.onButton1Click} >{props.button1}</CustomButton> 
 </View>
 <View style={style.buttonContainer}>
 <CustomButton pressListener={props.onButton2Click}>{props.button2}</CustomButton>
 </View>
 </View>
</View>
   
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
      marginTop:20,
  //borderRadius: 10,
  shadowColor:'#d9d9c3',
  shadowOpacity:0.70,
  shadowRadius:9
  
  
    },
    view_input:{
      
     width:60,
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

  export default GuessInputBox;