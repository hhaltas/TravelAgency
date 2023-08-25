import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  BRColor,
  BackgroundStaticColor,
  ButtonColorOK,
  TravelList,
  genderList,
} from "../assets/static";
import InputText from "./InputText";
import SelectedList from "./SelectedList";
import ButtonUtil from "./ButtonUtil";
import ModalAlert from "./ModalAlert";
import ModalLoading from "./ModalLoading";

const TicketListItem = (props) => {
  const [data, setData] = useState([]);
  const [isVisible, setIsvisible] = useState(false);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [isModalCardVisible, setisModalCardVisible] = useState(false);

  let sError = null;

  useEffect(() => {
    setData(props.data);
  }, []);

  const SetNameText = (data, item) => {
    item.item["name"] = data;
  };

  const SetSurnameText = (data, item) => {
    item.item["surname"] = data;
  };
  const onSelect = (selected, i, item) => {
    if (item.item.condition === 0) {
      item.item["gender"] = selected == "Erkek" ? 1 : 2;
    } else {
      if (i + 1 === item.item.condition) {
        item.item["gender"] = selected == "Erkek" ? 1 : 2;
        item.item["condition"] = selected == "Erkek" ? 1 : 2;
      } else {
        sError =
          "Yanınızdaki " +
          item.item.id +
          " koltuk için farklı cinste şeçim yapamazsınız";
        setIsvisible(!isVisible);
        setDescription(sError);
        setTitle(0);

        sError = null;
      }
    }
  };

  const getNearbyGender = (data) => {
    last4 = total - 4;
    if (koltukNo >= last4 && koltukNo <= total)
      if (koltukNo == last4) koltukNo + 1;
      else if (koltukNo == total) koltukNo - 1;
      else {
        koltukNo + 1;
        koltukNo - 1;
      }
    if (koltukNo % 3 == 1) koltukNo + 1;
    else if (koltukNo % 3 == 2) koltukNo - 1;
    else null;
  };

  const SetTCNOText = (data, item) => {
    item.item["tcno"] = data;
  };

  const isEmpty = (filed) => {
    return filed === null ? false : true;
  };

  const raiseAlert = (x, y) => {
    if (!isEmpty(x) && sError == null) {
      sError = "Lütfen " + y + " boş olamaz.";
    }
  };

  const raiseAlertGender = (x, y) => {
    if (x == 0 && sError == null) {
      sError = "Lütfen " + y + " seçiniz.";
    }
  };

  const buyTicket = (temp) => {
    data.map((i) => {
      raiseAlert(i.name, "İsim");
      raiseAlert(i.surname, "Soyisim");
      raiseAlertGender(i.gender, "Cinsiyet");
      raiseAlert(i.tcno, "TC Numarası");
    });
    if (sError != null) {
      setIsvisible(!isVisible);
      setDescription(sError);
      setTitle(0);

      sError = null;
    } else {
      props.onPress(data);
    }
  };

  const RenderItemView = (item, index) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "red",
          marginTop: 10,
          width: "auto",
          backgroundColor: "#fdfdfd",
          borderWidth: 0.3,
          borderRadius: 5,
          padding: 5,
          borderColor: BRColor,
        }}
      >
        <Text style={{ margin: 5, fontSize: 16, fontWeight: "400" }}>
          {item?.item?.id} numaralı koltuk
        </Text>

        <InputText
          placeholder={"İsim"}
          detail={"İsim"}
          handleChange={(name) => SetNameText(name, item)}
          secureTextEntry={false}
          controlPassword={false}
          inputMode={"text"}
          design={"row"}
        />

        <InputText
          placeholder={"Soyisim"}
          detail={"Soyisim"}
          handleChange={(surname) => SetSurnameText(surname, item)}
          secureTextEntry={false}
          controlPassword={false}
          inputMode={"text"}
          design={"row"}
        />

        <SelectedList
          detail={"Cinsiyet"}
          countries={genderList}
          placeHolder={"Cinsiyet seç.."}
          onSelect={(data, i) => onSelect(data, i, item)}
          design={"row"}
          title={false}
          main={"ticket"}
        />

        <InputText
          placeholder={"Kimlik No"}
          detail={"Kimlik No"}
          handleChange={(tc) => SetTCNOText(tc, item)}
          secureTextEntry={false}
          controlPassword={false}
          inputMode={"numeric"}
          design={"row"}
        />
      </View>
    );
  };

  const closedModal = () => {
    setIsvisible(!isVisible);
  };

  const toggleCardModal = () => {
    setisModalCardVisible(!isModalCardVisible);
  };

  return (
    <View style={styles.main}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={RenderItemView}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={{ marginTop: 10, height: 40 }}>
        <ButtonUtil
          title={"Satın Al"}
          OKNO={true}
          onPress={() => buyTicket(data)}
          color={ButtonColorOK}
        />
      </View>
      <ModalAlert
        isVisible={isVisible}
        closedModal={closedModal}
        title={0}
        description={description}
        isClosed={true}
        isOK={false}
      />
    </View>
  );
};

export default TicketListItem;

const styles = StyleSheet.create({
  main: { flex: 1 },
  RIVMain: {
    height: 100,
    backgroundColor: "#fdfdfd",
    borderWidth: 0.3,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    flexDirection: "column",
  },
  headerL: {
    fontSize: 16,
    fontWeight: "600",
  },
  headerC: {
    fontSize: 14,
    fontWeight: "400",
  },
});
