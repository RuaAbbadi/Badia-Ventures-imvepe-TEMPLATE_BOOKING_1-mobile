import React from 'react'
import { Input } from 'react-native-elements'
import { StyleSheet, View } from 'react-native'
import {  MaterialIcons } from "@expo/vector-icons";
import { wp, hp } from "../Dimension/dimen";


const InputField = ({
	iconName,
	iconColor,
	name,
	placeholder,
	value,
	size,
	...rest
}) => (
	<View style={styles.container}>
		<Input
			{...rest}
			leftIcon={<MaterialIcons name={iconName} size={size} color={iconColor} />}
			leftIconContainerStyle={styles.iconStyle}
			placeholderTextColor="#00000029"
			name={name}
			value={value}
			placeholder={placeholder}
			inputContainerStyle={{ borderBottomWidth: 0 }}
			style={{
				fontSize: 12,
				marginLeft: wp(15),
				marginTop: hp(15),
				marginBottom: hp(15),
				
			}}
		/>
	</View>
);

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      flexDirection: "row",
      borderWidth: 1.5,
      borderColor: "#333533",
      width: wp(268),
      height: hp(43),
      borderRadius: 8,
      paddingTop:hp(25),

    },
    iconStyle: {
        paddingTop:hp(20),
        paddingLeft:wp(5),
        paddingBottom:hp(13.5)
     
        

    }
})
  
export default InputField;