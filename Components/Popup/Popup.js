
import React from 'react';
import { StyleSheet, Text, View ,Card } from 'react-native';
import { wp, hp } from "../Dimension/dimen";


const Popup =()=>{

   return(



   <View style={styles.container}>

  <View style={styles.header}></View> 


  <View style={styles.ButtonView}>
     
   <View style={styles.Button1}></View>   

   <View style={styles.Button2}></View> 

   </View>
   
   
   </View>
     




   )


   








}


export default Popup;

const styles = StyleSheet.create({
   container: { 
      alignItems:'center',
      width: wp(308),
      height:hp(183),
      borderRadius:5,
      marginTop:hp(266),
      fontSize:11,
      marginBottom:hp(363),
      backgroundColor:'white',
      shadowColor:'#00000029',
      shadowOffset :{width: 0,height: 0.28},
      elevation:10,
      position:'absolute',
      zIndex:1,
      alignSelf:'center'
      
      },

   header :{ 
      alignItems:'center',
      width:wp(306),
      height:hp(51),
     borderTopLeftRadius:5,
     borderTopRightRadius:5,
      fontSize:11,
      backgroundColor:'#333533',
      
      
      },

   Button1:{ 
      width:wp(99),
      height:hp(43),
      borderRadius:8,
      backgroundColor:'#333533',
      marginTop:hp(68),
      marginRight:15,
      shadowColor:'#00000029',
      shadowOffset :{width: 0,height: 0.28},
      elevation:8,
    
      
      },

Button2:{ 
         width:wp(99),
         height:hp(43),
         borderRadius:8,
         backgroundColor:'#FFFFFF',
         marginTop:hp(68),
         borderColor:'#333533',
         borderWidth:1,
         shadowColor:'#00000029',
         shadowOffset :{width: 0,height: 0.28},
         elevation:8,
         borderWidth:1.5,
         

         
      },

   ButtonView:{
         flexDirection:'row',
         alignItems:'center',

      },

   
   

 
 });

