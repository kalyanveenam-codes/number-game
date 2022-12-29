import {  StyleSheet, Text, View } from "react-native";

function NumberContainer(props){

    return <View style={style.viewcont}>
       <Text style={style.text}>{props.children}</Text>
    </View>

}
const style= StyleSheet.create({
    viewcont:{
        marginHorizontal:50,


       // paddingHorizontal:10,
        borderWidth: 5,
        borderColor:'black'
    },
    text:{
        textAlign:'center',
        fontSize: 50,
        fontFamily:'opensans-bold',
fontWeight:'bold'

    }
})
export  {NumberContainer};