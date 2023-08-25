import {
  Alert,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Switch,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import {
  CreditCardInput,
  LiteCreditCardInput,
} from "react-native-credit-card-input";
import ButtonUtil from "./ButtonUtil";
const ModalCard = (props) => {
  const [useLiteCreditCardInput, setuseLiteCreditCardInput] = useState(null);

  const _onChange = (formData) => {
    console.log(JSON.stringify(formData, null, " "));
  };
  const _onFocus = (field) => {
    console.log("focusing", field);
  };
  const _setUseLiteCreditCardInput = (useLiteCreditCardInput) => {
    setuseLiteCreditCardInput(useLiteCreditCardInput);
  };

  return (
    <Modal isVisible={props.isModalVisible}>
      <View style={styles.main}>
        <View
          style={{
            height: 280,
            marginTop: 20,
          }}
        >
          <CreditCardInput
            autoFocus
            requiresName
            requiresCVC
            requiresPostalCode
            labelStyle={styles.label}
            inputStyle={styles.input}
            validColor={"black"}
            invalidColor={"red"}
            placeholderColor={"darkgray"}
            onFocus={_onFocus}
            onChange={_onChange}
          />
        </View>

        <View
          style={{
            width: "100%",
            justifyContent: "center",
            flexDirection: "row",
            height: 40,
          }}
        >
          <ButtonUtil
            title={"Kapat"}
            OKNO={false}
            onPress={props.toggleModal}
          />
          <ButtonUtil title={"Öde"} OKNO={true} onPress={props.paymentTicket} />
        </View>
      </View>
    </Modal>
  );
};

export default ModalCard;

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    height: 350,
    borderRadius: 5,
    flexDirection: "column",
  },
  container: {
    flex: 1,
  },
  avoider: {
    flex: 1,
    padding: 36,
  },
  button: {
    margin: 36,
    marginTop: 0,
  },
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "#F5F5F5",
    marginTop: 60,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
});
