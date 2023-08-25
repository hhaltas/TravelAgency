import {
  Alert,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import { BRColor, ButtonColorOK } from "../src/assets/static";
import BusDesign from "../src/components/BusDesign";
import ButtonUtil from "../src/components/ButtonUtil";
import ModalAlert from "../src/components/ModalAlert";

const Rezervations = (props) => {
  const router = useRouter();
  const navigation = useNavigation();

  const [data, setData] = useState(null);
  const [seats, setSeats] = useState(null);
  const [showVisible, setShowVisible] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    setData(props.route.params.data);
  }, []);

  const Header = () => {
    return (
      <View
        style={[
          styles.RIVMain,
          {
            borderColor: BRColor,
            marginBottom: 10,
            padding: 10,
          },
        ]}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.headerL, { width: "20%" }]}>
            {data?.company}
          </Text>
          <Text style={[styles.headerL, { width: "60%", textAlign: "center" }]}>
            {data?.plannedDate} {"-"} {data?.plannedTime}
          </Text>
          <Text style={[styles.headerL, { width: "20%", textAlign: "right" }]}>
            {data?.price} TL
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text style={[styles.headerC, { width: "20%", color: "gray" }]}>
            {data?.type == 1 ? "2+1" : "2+2"}
          </Text>
          <Text style={[styles.headerC, { width: "60%", color: "gray" }]}>
            Tahmini varış süresi: {data?.arrivalTime}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={[styles.headerL]}>
            {data?.from} {"-->"} {data?.to}
          </Text>
        </View>
      </View>
    );
  };

  const addTickerInformation = () => {
    if (seats === null) {
      setIsVisible(!isVisible);
      setDescription("Lütfen en az 1 koltuk seçiniz");
      setTitle(0);
      // Alert.alert("Dikkat", "Lütfen en az 1 koltuk seçiniz");
    } else {
      console.log("addTickerInformation", seats);
      navigation.navigate("sales", { data: data, seats: seats });
    }
  };

  const onSeats = (params) => {
    setSeats(params);
  };

  const closedModalLoading = () => {
    setTimer(!timer);
  };

  const closedModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <ImageBackground
      source={require("../src/assets/images/background.png")}
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }}
    >
      <View
        style={[styles.fixed, { backgroundColor: "transparent", margin: 10 }]}
      >
        <View style={[styles.ContainerView, { flex: 1 }]}>
          {Header()}
          <View
            style={{
              height: 220,
              marginTop: 10,
              width: "100%",
              borderRadius: 10,
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "#00fdfd",
            }}
          >
            <BusDesign onSeats={onSeats} priceAdd={data?.price} />
          </View>

          <View
            style={{
              height: 40,
              marginTop: 10,
            }}
          >
            <ButtonUtil
              title={"Bilet Bilgilerini Ekle"}
              OKNO={true}
              onPress={addTickerInformation}
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
      />
    </ImageBackground>
  );
};

export default Rezervations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  fixed: {
    backgroundColor: "red",
    height: 100,
  },
  main: {
    flex: 1,
    margin: 20,
    flexDirection: "column",
  },
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
    flexDirection: "column",
    borderRadius: 10,
    borderColor: "#00fdfd",
    borderWidth: 1,
    backgroundColor: "white",
  },
  headerMain: {
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },
  headerL: {
    fontSize: 16,
    fontWeight: "600",
  },
});
