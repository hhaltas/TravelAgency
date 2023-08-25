import {
  Alert,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Switch,
  ActivityIndicator,
  Button,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { ButtonColorOK } from "../assets/static";
const ModalLoading = (props) => {
  return (
    <Modal isVisible={props.isModalCardVisible}>
      <View style={styles.main}>
        <ActivityIndicator size={"large"} color={ButtonColorOK} />
        {/* <Button onPress={props.closedModal} title="KAPAT" /> */}
      </View>
    </Modal>
  );
};

export default ModalLoading;

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 5,
    flexDirection: "column",
    backgroundColor: "transparent",
  },
});
