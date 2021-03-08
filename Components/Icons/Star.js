import React from 'react';
import { StyleSheet, View} from 'react-native';
import Stars from 'react-native-stars';
import { Fontisto } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
 


const Star=()=>{
   
    return(

    <View style={{ flexDirection:'row',marginTop:15,marginLeft:21}}  >
        <Stars default={3} count={5} half={true}  starSize={100}
                fullStar={<Fontisto name={'star'} style={[styles.myStarStyle]}/>}
                emptyStar={<Feather name={'star'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                halfStar={<Fontisto name={'star-half'} style={[styles.myStarStyle]}/>}/>
    </View>     
    
        


    )
}

export default Star;
const styles = StyleSheet.create({
    myStarStyle: {  
        color: '#F5CB5C',
        backgroundColor: 'transparent',
        padding:1,
      },
    myEmptyStarStyle: {
        color: '#F5CB5C',
        padding:1,
      }
});