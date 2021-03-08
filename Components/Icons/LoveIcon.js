import React from 'react';
import { StyleSheet, View,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { wp, hp } from "../Dimension/dimen";



 


const LoveIcon=()=>{
   
    return(

<View style={styles.contanier}  >
        <TouchableOpacity style={styles.loveicon}>
            <Ionicons name="heart" size={35} color="white" style={{padding:20}} />
        </TouchableOpacity>
</View> 
   
    
        


    )
}

export default LoveIcon;
const styles = StyleSheet.create({

    contanier:{ 
        width:wp(71),
        height:hp(71),
        marginTop:hp(-35),
        marginBottom:hp(23),
        marginLeft:wp(272),
        marginRight:wp(23),

    },
    loveicon:{
        backgroundColor:'#333533',
        borderRadius:90,
        alignSelf:'center'
      },
    
});