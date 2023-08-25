import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  ImageBackground,
  Dimensions,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import InputText from "../src/components/InputText";
import ButtonUtil from "../src/components/ButtonUtil";
import { ButtonColorNO, ButtonColorOK } from "../src/assets/static";
import { getStoreObject } from "../src/components/AsyncStorageUtil";
import ModalAlert from "../src/components/ModalAlert";
import ModalLoading from "../src/components/ModalLoading";

const LoginUser = "Test";
const LoginPassword = "1234";

const Logins = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [userList, setUserList] = useState(null);
  const [password, setPassword] = useState(null);
  const [hidePassword, sethidePassword] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [timer, setTimer] = useState(false);
  let sError = "";

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    const temp = await getStoreObject("user");
    setUserList(temp);
  };

  const SetPasswordText = (event) => {
    setPassword(event);
  };

  const SetUserText = (event) => {
    setUser(event);
  };

  const managePasswordVisibility = () => {
    sethidePassword(!hidePassword);
  };

  const isEmpty = (filed) => {
    return filed !== null ? false : true;
  };
  const raiseAlert = (x, y) => {
    console.log("*", x);
    if (isEmpty(x) && sError == null) {
      sError = "Lütfen " + y + " boş olamaz.";
      setIsVisible(!isVisible);
      setDescription(sError);
      setTitle(0);
      sError = "";
    }
  };

  const checkMandotoryFields = () => {
    sError = null;
    raiseAlert(user, "Kullanıcı adı");
    raiseAlert(password, "şifreniz");
  };
  const navigationLogin = () => {
    checkMandotoryFields();
    if (sError === null) {
      console.log("2", userList);
      if (
        userList?.name?.toLowerCase() === user.toLowerCase() &&
        userList.password === password
      ) {
        setTimer(true);
        setTimeout(() => {
          setTimer(false);
          navigation.navigate("travel");
        }, 500);
      }
      if (
        userList?.name?.toLowerCase() === user.toLowerCase() &&
        userList.password !== password
      ) {
        sError = "Parolanız hatalı. Lütfen yeni bir parola giriniz.";
        setIsVisible(!isVisible);
        setDescription(sError);
        setTitle(0);
        sError = "";
      }
    }
  };

  const navigationRegister = () => {
    navigation.navigate("register");
  };
  const closedModal = () => {
    setIsVisible(!isVisible);
  };

  const onGotoLogin = async () => {
    navigation.navigate("logins");
  };

  const closedModalLoading = () => {
    setTimer(!timer);
  };

  return (
    <ImageBackground
      source={require("../src/assets/images/background.png")}
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }}
    >
      <View style={styles.main}>
        <View style={styles.HeaderView}>
          <Text style={styles.header}>HOŞGELDİNİZ!</Text>
        </View>

        <View style={styles.ContainerView}>
          <InputText
            placeholder={"Kullanıcı Adı"}
            detail={"Kullanıcı"}
            handleChange={SetUserText}
            secureTextEntry={false}
            controlPassword={false}
            inputMode={"none"}
            value={user}
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
            value={password}
            design={"row"}
          />
          {/* <Link href="/home">Go to Home</Link> */}

          <View
            style={{
              flexDirection: "row",
              height: 40,
            }}
          >
            <ButtonUtil
              title={"Kayıt Ol"}
              OKNO={false}
              onPress={navigationRegister}
              color={ButtonColorNO}
            />
            <ButtonUtil
              title={"Giriş Yap"}
              OKNO={true}
              onPress={navigationLogin}
              color={ButtonColorOK}
            />
          </View>
        </View>
      </View>
      <ModalAlert
        isVisible={isVisible}
        closedModal={closedModal}
        title={title}
        description={description}
        isClosed={true}
        isOK={false}
        onGotoLogin={onGotoLogin}
        component={"logins"}
      />
      <ModalLoading
        isModalCardVisible={timer}
        closedModal={closedModalLoading}
      />
    </ImageBackground>
  );
};

export default Logins;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 20,
    flexDirection: "column",
  },
  HeaderView: {
    marginBottom: 20,
    marginTop: 100,
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
});
