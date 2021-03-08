import React from 'react';
import { View, StyleSheet,Text,TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';



const SocialButtons =()=>{
   

    return(
    
    <View style={{flexDirection:'row'}}>

        <TouchableOpacity style={styles.SocialButton}>
            <FontAwesome name = "facebook"  size={15} color={'#333533'}/>
        </TouchableOpacity>
     
 
       <TouchableOpacity style={styles.SocialButton}>
           <FontAwesome name ="twitter" size={15} color={'#333533'}/>
        </TouchableOpacity>
 
 
        <TouchableOpacity style={styles.SocialButton}>
            <FontAwesome name ="google-plus" size={15} color={'#333533'}/>
        </TouchableOpacity>
 
    </View>




    )
}

export default SocialButtons
const styles = StyleSheet.create({
   SocialButton:{
    borderWidth:1.2,
    borderColor:'#333533',
    alignItems:'center',
    justifyContent:'center',
    width:44,
    height:44,
    borderRadius:50,
    margin :10,
  } 
});
