import {  SafeAreaView, StyleSheet, Text, View } from "react-native";

function Customtitle (props){
    return <SafeAreaView style={styles.mainArea}> 
    <Text  style={styles.textstyle}>{props.children}</Text> 
    </SafeAreaView>
}
const styles= StyleSheet.create({
    mainArea:{
    
        margin: 59,
        padding: 45,
        paddingTop:60,
        borderWidth: 3,
        borderColor:'#bc720c',
        alignItems:'center',
        shadowColor:'yellow',
        shadowOpacity:0.30

    },
    textstyle:{
        padding: 15,
        fontFamily:'opensans',
        fontWeight:'bold',
        fontSize:30,
        color:'#efece8',
       
       
        
    }

})

export    {Customtitle};