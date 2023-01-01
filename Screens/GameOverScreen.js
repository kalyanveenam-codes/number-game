
import { View , Text, Image , StyleSheet } from "react-native";
import CustomButton from "../components/button";
import { Customtitle } from "../components/title";
function gameOverScreen({enteredNumber, roundCounter, setNewGame}){

    return <View style={styles.rootHolder}>
        <Customtitle>Game Over</Customtitle>
        <View style={styles.viewHolder}>
        <Image style={styles.img} source={require('../assets/arrows.jpg')} ></Image>
        </View>
        <Text style={styles.textHolder}>Your phone needed <Text style={styles.innerText}>{roundCounter}</Text> rounds to Guess <Text style={styles.innerText}>{enteredNumber}</Text> Number </Text>
         <CustomButton pressListener={setNewGame} >Start New Game</CustomButton>
          </View>
}
const styles= StyleSheet.create(
    {
     viewHolder:{
        alignItems:'center',
        textAlign:'center',
        width:300,
        height:300,
        borderRadius: 180,
        borderWidth: 3,
        borderColor:'black',
        overflow:'hidden'
     },
     img:{
        width:'100%',
        height:'100%'
     },
     rootHolder:{
        flex:1,
        alignItems:'center',
        textAlign:'center'
     },
     textHolder:{
        padding:40,
    fontSize:25,
    color: 'white',
    fontFamily:'opensans'
     },
     innerText:{
    fontFamily:'opensans-bold',
    color:'black'
     },

    }
)
export default gameOverScreen;