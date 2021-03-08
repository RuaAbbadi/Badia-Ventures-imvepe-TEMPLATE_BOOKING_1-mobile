import React from 'react';
import { View, StyleSheet,TouchableOpacity,ImageBackground} from 'react-native';





const BookTableButton =()=>{

    return(
   <View>
          <TouchableOpacity 
    style={styles.Touch}>
             <ImageBackground
             style={styles.ImageBack3}
             imageStyle={{resizeMode:'cover',borderRadius: 5,opacity:0.6,width:35,height:35,alignSelf:'center',padding:15,marginLeft:4}}
             source={require("../assets/chair.png")}
             >

             </ImageBackground>
          </TouchableOpacity>
   </View>



)}


export default BookTableButton;
const styles = StyleSheet.create({
  contanier :{
    borderRadius:10,
    borderWidth:1,
    backgroundColor:'#333533',
    width:43,
    height:43,
    

        },
   ImageBack3:{ 
   
      
       
         
        
       },

    Touch:{
      borderRadius:5,
      borderWidth:1,
      backgroundColor:'#333533',
      width:43,
      height:43,
      marginTop:20,
     
     }   


});