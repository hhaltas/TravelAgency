import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import ButtonUtil from "../src/components/ButtonUtil";
import { Link, useNavigation, useRouter } from "expo-router";

const Success = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const goToNAvigation = () => {
    navigation.push("travel");
  };
  return (
    <ImageBackground
      source={require("../src/assets/images/background.png")}
      style={{
        flex: 1,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }}
    >
      <View
        style={[
          styles.ContainerView,
          {
            margin: 10,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          {" "}
          SATIN ALMA İŞLEMİ BAŞARILI ŞEKİLDE GERÇEKLEŞTİ
        </Text>
        <View style={{ marginTop: 10, height: 40, width: "100%" }}>
          <ButtonUtil title={"Anasayfa"} OKNO={true} onPress={goToNAvigation} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ContainerView: {
    height: "auto",
    padding: 10,
    flexDirection: "column",
    borderRadius: 10,
    borderColor: "#00fdfd",
    borderWidth: 1,
    backgroundColor: "white",
  },
});
