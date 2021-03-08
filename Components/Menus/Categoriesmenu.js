import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { wp, hp } from "../Dimension/dimen";

const Categoriesmenu = () => {
  return (
    <View>
      <TouchableOpacity style={styles.contanier}>
        <Feather
          name="align-left"
          size={25}
          color="#000000"
          style={{
            marginLeft: wp(16),
            marginTop: hp(16),
            marginBottom: hp(16),
            marginRight: wp(13),
            color: "white",
           
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Categoriesmenu;
const styles = StyleSheet.create({
  contanier: {
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "#333533",
    width: wp(43),
    height: hp(43),
    justifyContent:'center',
    marginRight:wp(28),
    marginLeft: wp(8),
  },
});
