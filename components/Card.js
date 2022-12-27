import { View , StyleSheet, SafeAreaView} from "react-native";

function Card({children, style}){
    return  <View style={[styles.cardHolder,style]}>{children}

    </View>;

}
export default Card;
const styles= StyleSheet.create({
   
    cardHolder:{
 alignItems:'center',
     padding: 35,
     backgroundColor:'#812e38',
     borderRadius: 20,
     marginHorizontal: 20,
     marginTop:180,

  borderRadius: 10,
  shadowColor:'#d9d9c3',
  shadowOpacity:0.80,
  shadowRadius:9
  
  
    }})

