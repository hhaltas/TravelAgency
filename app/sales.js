import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import TicketListItem from "../src/components/TicketList";
import ModalCard from "../src/components/ModalCard";
import ModalLoading from "../src/components/ModalLoading";
import ModalAlert from "../src/components/ModalAlert";

import { Link, useNavigation, useRouter } from "expo-router";

const Sales = (props) => {
  const router = useRouter();
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const [seats, setSeats] = useState(null);
  const [isModalCardVisible, setisModalCardVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const [isVisible, setIsvisible] = useState(false);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [timer, setTimer] = useState(false);
  // useEffect(() => {
  //   setData(props.route.params.seats);
  // }, []);

  const saveTicketInformation = (temp) => {
    toggleModal();
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const paymentTicket = () => {
    console.log("girdi");
    toggleModal();
    setModalVisible(false);
    setIsvisible(true);
    navigation.navigate("success");
  };

  const toggleCardModal = () => {
    setisModalCardVisible(!isModalCardVisible);
  };
  const closedModal = () => {
    setIsvisible(!isVisible);
  };
  const changedNavigation = () => {
    closedModal();
    navigation.navigate("travel");
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
      <View style={[styles.ContainerView, { flex: 1, margin: 10 }]}>
        <TicketListItem
          data={props.route.params.seats}
          onPress={saveTicketInformation}
        />
        <ModalCard
          toggleModal={toggleModal}
          isModalVisible={isModalVisible}
          paymentTicket={paymentTicket}
        />
        <ModalLoading
          toggleModal={toggleCardModal}
          isModalCardVisible={isModalCardVisible}
          closedModal={toggleCardModal}
        />
        <ModalAlert
          isVisible={isVisible}
          closedModal={closedModal}
          title={title}
          description={description}
          isClosed={false}
          isOK={false}
          navigate={true}
          changedNavigation={changedNavigation}
        />
      </View>
    </ImageBackground>
  );
};

export default Sales;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  fixed: {
    flex: 1,
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
  // ContainerView: {
  //   height: "auto",
  //   padding: 10,
  //   flexDirection: "column",
  //   borderRadius: 10,
  //   borderColor: "#00fdfd",
  //   borderWidth: 1,
  //   backgroundColor: "white",
  // },
});
