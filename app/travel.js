import {
  Button,
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  Alert,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";

import { Link, useNavigation, useRouter } from "expo-router";
import InputText from "../src/components/InputText";
import ButtonUtil from "../src/components/ButtonUtil";
import SelectedList from "../src/components/SelectedList";
import DateTimer from "../src/components/DateTimer";
import { ButtonColorOK, countries, TravelList } from "../src/assets/static";
import moment from "moment";
import FlatListItem from "../src/components/FlatListItem";
import ModalAlert from "../src/components/ModalAlert";
import ModalLoading from "../src/components/ModalLoading";

let sError = "";

const TravelIndex = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [fromWhere, setFromWhere] = useState(null);
  const [toWhere, setToWhere] = useState(null);
  const [date, setDate] = useState(moment(new Date()).format("DD/MM/YYYY"));
  const [newList, setNewList] = useState(undefined);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    // console.log("date", date, moment(date).format("DD/MM/YYYY"));
    // setNewList(TravelList);
  }, []);

  const onSelectFromWhere = (selected, i) => {
    setFromWhere(selected);
  };

  const onSelectToWhere = (selected, i) => {
    setToWhere(selected);
  };

  const isEmpty = (filed) => {
    return filed !== null ? false : true;
  };
  const raiseAlert = (x, y) => {
    console.log("*", x);
    if (isEmpty(x) && sError == null) {
      sError = "Lütfen " + y + " şeçiniz.";
    }
  };

  const checkMandotoryFields = () => {
    sError = null;
    raiseAlert(fromWhere, "kalkış noktası");
    raiseAlert(toWhere, "varış noktası");
  };

  const findTravelList = () => {
    checkMandotoryFields();

    if (sError !== null) {
      setIsVisible(!isVisible);
      setDescription(sError);
      setTitle(0);
    } else {
      setTimer(true);

      const tempList = TravelList.filter(function (i, n) {
        return (
          i.from?.toLowerCase() === fromWhere?.toLowerCase() &&
          i.to?.toLowerCase() === toWhere?.toLowerCase() &&
          i.plannedDate === date
        );
      });
      setTimeout(() => {
        setTimer(false);
      }, 500);
      setNewList(tempList);
    }
  };
  const onGoToTravel = (results) => {
    console.log("event", results);
    navigation.navigate("rezervation", { data: results.item });
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

  const closedModalLoading = () => {
    setTimer(!timer);
  };

  const closedModal = () => {
    setIsVisible(!isVisible);
  };

  const EmptyList = () => {
    return (
      <View
        style={{
          flex: 1,
          height: 300,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Aradığınız kriterde sefer bulunamadı.</Text>
      </View>
    );
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
        <View
          style={[
            styles.ContainerView,
            {
              height: Dimensions.get("window").height * 0.27,
              width: "100%",
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              width: "100%",
              height: 50,
            }}
          >
            <SelectedList
              detail={"Kalkış Noktası"}
              countries={countries}
              placeHolder={"..."}
              onSelect={onSelectFromWhere}
              design={"column"}
              title={true}
            />
            <View style={{ width: "1%" }} />
            <SelectedList
              detail={"Varış Noktası"}
              countries={countries}
              placeHolder={"..."}
              onSelect={onSelectToWhere}
              design={"column"}
              title={true}
            />
          </View>

          <DateTimer
            detail={"Yolculuk Tarihi"}
            value={date}
            minimumDate={new Date()}
            isDatePickerVisible={isDatePickerVisible}
            handleConfirm={handleConfirm}
            hideDatePicker={hideDatePicker}
            showDatePicker={showDatePicker}
            design={"row"}
          />

          <View
            style={{
              flexDirection: "row",
              height: 40,
              marginTop: 5,
            }}
          >
            <ButtonUtil
              title={"Sefer Bul"}
              OKNO={true}
              onPress={findTravelList}
              color={ButtonColorOK}
            />
          </View>
        </View>

        {newList !== undefined && !timer && (
          <View
            style={[
              styles.ContainerView,
              {
                display: "flex",
                marginTop: 10,
                height:
                  newList?.length == 0
                    ? Dimensions.get("window").height * 0.2
                    : "auto",
              },
            ]}
          >
            <Text style={styles.headerMain}>Sefer Listesi</Text>

            {newList?.length == 0 ? (
              !timer && EmptyList()
            ) : (
              <FlatListItem data={newList} onPress={onGoToTravel} />
            )}
          </View>
        )}
      </View>
      <ModalAlert
        isVisible={isVisible}
        closedModal={closedModal}
        title={title}
        description={description}
        isClosed={true}
        isOK={false}
      />
      <ModalLoading
        isModalCardVisible={timer}
        closedModal={closedModalLoading}
      />
    </ImageBackground>
  );
};

export default TravelIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
    position: "relative",
    padding: 10,
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
});
