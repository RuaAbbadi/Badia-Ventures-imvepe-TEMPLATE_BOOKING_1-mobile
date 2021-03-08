import React from 'react';
import { View, StyleSheet,ImageBackground,TextInput} from 'react-native';
import {EvilIcons} from '@expo/vector-icons';




const SearchBox =()=>{

    return(

<View style={styles.contanier}>
     <EvilIcons name ="search" size={30} color={'#696969'} style={{margin:5}}/>
     <TextInput
           placeholder="Search For Food You Like" 
           placeholderTextColor="#696969"
         
         
    />  

</View>

)}


export default SearchBox;
const styles = StyleSheet.create({
  contanier :{
    alignItems:'center',
    flexDirection:'row',
    borderWidth:1.5,
    marginTop:20,
    borderColor:'#333533',
    width:219,
    height:43,
    borderRadius:8,
    fontSize:11,
    marginBottom:15
    
    },


});