import { ProgressViewIOSComponent, View , Text, StyleSheet, Pressable, TouchableWithoutFeedback} from "react-native";


function CustomButton (props){
  
    return <View style={style.buttonView}>
     <Pressable style= {({pressed})=> pressed ? style.buttonPressed : style.buttonPressable } onPress={props.pressListener} >  
    <Text style={style.buttonText}>{props.children}</Text>    
    </Pressable> 
    </View>
}

const style= StyleSheet.create({
    // buttonStyle:{
    //     // padding: 5,
    //     // backgroundColor: 'green',
    //     // alignContent:'center'

    // },
    buttonView:{
        marginTop:10,
        padding: 8,
        margin: 2,
        borderRadius: 15,
        backgroundColor:'#4e2e34',
        overflow:'hidden'
    },
    buttonPressed:{
        opacity: 0.25
    },
    buttonPressable:{
      //  backgroundColor : 'red'
    },
    buttonText:{
        textAlign:'center',
        color: 'white'
    }

})

export default CustomButton;