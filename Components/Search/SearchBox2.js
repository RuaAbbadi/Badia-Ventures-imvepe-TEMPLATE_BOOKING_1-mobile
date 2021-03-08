import React from "react";
import { View, StyleSheet, ImageBackground, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { wp, hp } from "../Dimension/dimen";

const SearchBox2 = () => {
  return (
    <View style={styles.contanier}>
      <EvilIcons
        name="search"
        size={30}
        color={"#696969"}
        style={{
          marginLeft: wp(16),
          marginTop: hp(13.12),
          marginBottom: hp(13.12),
          
        }}
      />
      <TextInput
        placeholder="Search For Food You Like"
        placeholderTextColor="#696969"
        style={{
          marginLeft: wp(18.25),
          alignSelf:'center'
          
        }}
      />
    </View>
  );
};

export default SearchBox2;
const styles = StyleSheet.create({
  contanier: {
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: "#333533",
    width: wp(267),
    height: hp(43),
    borderRadius: 8,
    fontSize: 11,
    marginLeft:wp(29)
    

  },
});
