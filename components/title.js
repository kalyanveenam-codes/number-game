import {  StyleSheet, Text, View } from "react-native";

function Customtitle (props){
    return <View style={styles.mainArea}> 
    <Text  style={styles.textstyle}>{props.children}</Text> 
    </View>
}
const styles= StyleSheet.create({
    mainArea:{
    
        margin: 29,
        padding: 25,
        borderWidth: 3,
        borderColor:'#bc720c'

    },
    textstyle:{
        fontWeight:'bold',
        fontSize:40,
        color:'#efece8'
    }

})

export    {Customtitle};