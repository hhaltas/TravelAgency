import {
  Alert,
  Button,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { inputText, textColorHeader, textColorTitle } from "../assets/static";
const DateTimer = (props) => {
  return (
    <View style={[styles.containerT, { flexDirection: props.design }]}>
      <Text style={[styles.header1, { color: textColorTitle }]}>
        {props.detail}
      </Text>
      <Text style={[styles.header1, { color: textColorTitle }]}> : </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "nowrap",
        }}
      >
        <TouchableOpacity
          onPress={props.showDatePicker}
          style={{
            flex: 1,
            height: 30,
            justifyContent: "center",
            paddingTop: 5,
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              color: inputText,
              fontSize: 17,
              textAlign: "left",
              marginHorizontal: 0,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {props.value}
          </Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={props.isDatePickerVisible}
          mode="date"
          onConfirm={props.handleConfirm}
          onCancel={props.hideDatePicker}
          minimumDate={props.minimumDate}
          maximumDate={props.maximumDate}
        />
      </View>
    </View>
  );
};

export default DateTimer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 6,
  },
  header: {
    flex: 1,
    padding: 5,
  },
  containerT: {
    height: 30,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
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
  datetimepicker: {
    flex: 1,
    width: "auto",
  },
});
