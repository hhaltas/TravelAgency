import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonColorNO, ButtonColorOK } from "../assets/static";

const ButtonUtil = (props) => {
  return (
    <View style={{ flex: 1, margin: 2, borderRadius: 5 }}>
      <TouchableOpacity
        onPress={props.onPress}
        style={[styles.touch, { backgroundColor: props.color }]}
      >
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonUtil;

const styles = StyleSheet.create({
  touch: {
    flex: 1,
    width: "98%",
    height: 30,
    backgroundColor: "#54BCBE",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});
