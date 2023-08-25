import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { inputText, textColorTitle } from "../assets/static";

const InputText = (props) => {
  const [data, setData] = useState(null);
  const [hidePassword, sethidePassword] = useState(true);
  return (
    <View
      style={[
        styles.containerT,
        { flexDirection: props.design, alignItems: "center" },
      ]}
    >
      <Text
        style={[
          styles.header1,
          {
            color: textColorTitle,
            width: "35%",
          },
        ]}
      >
        {props.detail}
      </Text>
      <Text
        style={[
          styles.header1,
          {
            color: textColorTitle,
            width: "1%",
          },
        ]}
      >
        :
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "nowrap",
          width: "64%",
        }}
      >
        <TextInput
          secureTextEntry={props.secureTextEntry}
          placeholder={props.placeholder}
          style={{
            height: "auto",
            fontWeight: "600",
            color: inputText,
            fontSize: 16,
            textAlign: "left",
            marginHorizontal: 5,
            flex: 1,
          }}
          value={props.value}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          onChangeText={props.handleChange}
          inputMode={props.inputMode}
        />
        {props.controlPassword && (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.visibilityBtn}
            onPress={props.managePasswordVisibility}
          >
            <Image
              source={
                props.secureTextEntry
                  ? require("../assets/images/visible.png")
                  : require("../assets/images/hide.png")
              }
              style={styles.btnImage}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  containerT: {
    height: 40,
    marginBottom: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 6,
  },
  header: {
    flex: 1,
    padding: 5,
  },

  header1: {
    fontSize: 18,
    fontWeight: "600",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 40,
    borderRadius: 1,
    elevation: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  visibilityBtn: {
    justifyContent: "center",
    alignItems: "center",
    height: 25,
    width: 25,
    alignSelf: "flex-end",
  },
  btnImage: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
