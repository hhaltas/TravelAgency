import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import InputText from "../src/components/InputText";
import ButtonUtil from "../src/components/ButtonUtil";
import SelectedList from "../src/components/SelectedList";
import { ButtonColorOK, genderList } from "../src/assets/static";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import DateTimer from "../src/components/DateTimer";
import ModalAlert from "../src/components/ModalAlert";
import moment from "moment";
import {
  getStoreObject,
  setStoreValue,
  storeSetData,
} from "../src/components/AsyncStorageUtil";

const Registers = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [gender, setGender] = useState(null);
  const [TCNO, setTCNO] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordAgain, setPasswordAgain] = useState(null);
  const [hidePassword, sethidePassword] = useState(true);
  const [hidePasswordAgain, sethidePasswordAgain] = useState(true);
  const [date, setDate] = useState(moment(new Date()).format("DD/MM/YYYY"));
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  //modal
  const [isVisible, setIsvisible] = useState(false);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [maxtime, setMaxTime] = useState(new Date());

  const SetNameText = (event) => {
    setName(event);
  };
  useEffect(() => {
    var modifiedDate = new Date();
    var originalDate = new Date();
    modifiedDate.setFullYear(originalDate.getFullYear() - 18);
    var modifiedDateStr = modifiedDate;
    setMaxTime(moment(modifiedDateStr));
  }, []);

  const SetSurnameText = (event) => {
    setSurname(event);
  };

  const SetGenderText = (event) => {
    setGender(event);
  };

  const SetTCNOText = (event) => {
    setTCNO(event);
  };

  const SetMailText = (event) => {
    setEmail(event);
  };

  const SetPasswordText = (event) => {
    setPassword(event);
  };

  const SetPasswordAgainText = (event) => {
    setPasswordAgain(event);
  };

  const managePasswordVisibility = () => {
    sethidePassword(!hidePassword);
  };

  const managePasswordAgainVisibility = () => {
    sethidePasswordAgain(!hidePasswordAgain);
  };

  const onSelect = (selected, i) => {
    SetGenderText(selected);
  };

  const isEmpty = (filed) => {
    return filed !== null ? false : true;
  };

  let sError = "";
  const raiseAlert = (x, y) => {
    console.log("*", x);
    if (isEmpty(x) && sError == null) {
      sError = "Lütfen " + y + " boş olamaz.";
    }
  };

  const checkMandotoryFields = () => {
    sError = null;
    raiseAlert(name, "İsim");
    raiseAlert(surname, "Soyisim");
    raiseAlert(gender, "Cinsiyet");
    raiseAlert(TCNO, "TC Numarası");
    raiseAlert(email, "Emaili");
    checkPasswordFiels();
  };

  const raisePaswordAlert = (x, y) => {
    if (x !== y && sError == null) {
      sError = "Lütfen parolanız uyuşmuyor.";
    }
  };

  const checkPasswordFiels = () => {
    raiseAlert(password, "Parola");
    raiseAlert(passwordAgain, "Parola tekrarını");
    raisePaswordAlert(password, passwordAgain);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(moment(date).format("DD/MM/YYYY"));
    hideDatePicker();
  };
  const maximuDateCalculate = () => {
    var modifiedDate = new Date();
    // var originalDate = new Date();
    // modifiedDate.setFullYear(originalDate.getFullYear() - 18);
    // var modifiedDateStr = modifiedDate;
    // console.log("*-*-", modifiedDateStr);
    return moment(
      modifiedDate.setFullYear(originalDate.getFullYear() - 18).toISOString()
    );
  };
  const saveRegisterData = async () => {
    checkMandotoryFields();

    if (sError !== null) {
      setIsvisible(!isVisible);
      setDescription(sError);
      setTitle(0);
    } else {
      const data = {
        name: name,
        surname: surname,
        gender: gender === "Erkek" ? 1 : 2,
        TCNO: TCNO,
        password: password,
        email: email,
        birtday: date,
      };
      // await setStoreValue(data, "user");
      await storeSetData(data, "user");
      sError =
        "Kayıt işlemi başarılı şekilde gerçekleşti. Seyahatlarınızda bizi tercih ettiğiniz için teşekkürler.";
      setIsvisible(!isVisible);
      setDescription(sError);
      setTitle(3);

      // Alert.alert(
      //   "Hoşgeldiniz",
      //   "Kayıt işlemi gerçekleşti. Seyahatlarınızda bizi tercih ettiğiniz için teşekkürler. ",
      //   [
      //     {
      //       text: "OK",
      //       onPress: () => navigation.navigate("logins"),
      //     },
      //   ]
      // );
    }
  };

  const onGotoLogin = async () => {
    const data = await getStoreObject("user");
    console.log("0*0 ", data);
    navigation.navigate("logins");
  };

  const closedModal = () => {
    setIsvisible(!isVisible);
  };
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <ImageBackground
        source={require("../src/assets/images/background.png")}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
      >
        <ScrollView style={[styles.fixed, styles.scrollview]}>
          <View style={styles.main}>
            <View style={styles.HeaderView}>
              <Text style={styles.header}>Kayıt Ol</Text>
            </View>

            <View style={styles.ContainerView}>
              <InputText
                placeholder={"Ad"}
                detail={"Ad"}
                handleChange={SetNameText}
                secureTextEntry={false}
                controlPassword={false}
                inputMode={"text"}
                design={"row"}
              />

              <InputText
                placeholder={"Soyad"}
                detail={"Soyad"}
                handleChange={SetSurnameText}
                secureTextEntry={false}
                controlPassword={false}
                inputMode={"text"}
                design={"row"}
              />

              <SelectedList
                detail={"Cinsiyet"}
                countries={genderList}
                placeHolder={"Cinsiyet seç.."}
                onSelect={onSelect}
                design={"row"}
                title={false}
              />

              <DateTimer
                detail={"Doğum Tarihi"}
                value={date}
                // maximumDate={maxtime}
                isDatePickerVisible={isDatePickerVisible}
                handleConfirm={handleConfirm}
                hideDatePicker={hideDatePicker}
                showDatePicker={showDatePicker}
                design={"row"}
              />

              <InputText
                placeholder={"Kimlik No"}
                detail={"Kimlik No"}
                handleChange={SetTCNOText}
                secureTextEntry={false}
                controlPassword={false}
                inputMode={"numeric"}
                design={"row"}
              />

              <InputText
                placeholder={"Email Adresi"}
                detail={"Email Adresi"}
                handleChange={SetMailText}
                secureTextEntry={false}
                controlPassword={false}
                inputMode={"email"}
                design={"row"}
              />

              <InputText
                placeholder={"Şifre"}
                detail={"Şifre"}
                handleChange={SetPasswordText}
                secureTextEntry={hidePassword}
                managePasswordVisibility={managePasswordVisibility}
                controlPassword={true}
                inputMode={"numeric"}
                design={"row"}
              />
              <InputText
                placeholder={"Şifre Tekrarı"}
                detail={"Şifre Tekrarı"}
                handleChange={SetPasswordAgainText}
                secureTextEntry={hidePasswordAgain}
                managePasswordVisibility={managePasswordAgainVisibility}
                controlPassword={true}
                inputMode={"numeric"}
                design={"row"}
              />

              <View
                style={{
                  flexDirection: "row",
                  height: 40,
                }}
              >
                <ButtonUtil
                  title={"Kaydet"}
                  OKNO={false}
                  onPress={saveRegisterData}
                  color={ButtonColorOK}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <ModalAlert
          isVisible={isVisible}
          closedModal={closedModal}
          title={title}
          description={description}
          isClosed={true}
          isOK={false}
          onGotoLogin={onGotoLogin}
          component={"register"}
        />
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

export default Registers;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 20,
    flexDirection: "column",
  },
  HeaderView: {
    marginBottom: 20,
    marginTop: 30,
  },
  header: {
    fontWeight: "800",
    fontSize: 20,
    textAlign: "left",
    color: "white",
  },
  ContainerView: {
    padding: 10,
    flexDirection: "column",
    borderRadius: 10,
    borderColor: "#00fdfd",
    borderWidth: 1,
    backgroundColor: "white",
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollview: {
    backgroundColor: "transparent",
  },
});
