import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import ModalAlert from "./ModalAlert";
import { BusSeatRow1, BusSeatRow2, BusSeatRow3 } from "../assets/static";
let SelectedList = [];
let sError = "";

const BusDesign = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [timer, setTimer] = useState(false);

  const [select, setSelect] = useState(0);
  const [selectedListSeat, setSelectedlistSeat] = useState([]);
  const [price, setPrice] = useState(0);
  const [row1, setRow1] = useState(BusSeatRow1);
  const [row2, setRow2] = useState(BusSeatRow2);
  const [row3, setRow3] = useState(BusSeatRow3);
  //   const [selectedSeat, setSelectedSeat] = useState([]);

  const onSelectRow1 = (index) => {
    let tempRow = [];
    tempRow = row1;
    tempRow.map((item, i) => {
      if (index == i) {
        if (item.selected == true) {
          selectedListSeat.push(item);
          item.selected = false;
          item.empty = true;
          props.onSeats(selectedListSeat);
        } else {
          selectedListSeat.push(item);
          props.onSeats(selectedListSeat);
          item.selected = true;
          item.empty = false;
        }
      }
    });
    let tempSeat = [];
    tempRow.map((item) => {
      tempSeat.push(item);
    });
    console.log("***", selectedListSeat);
    setPrice(price + Number(props.priceAdd));
    setSelect(select + 1);
    setRow1(tempSeat);
  };
  const onSelectRow2 = (index) => {
    let tempRow = [];
    tempRow = row2;
    tempRow.map((item, i) => {
      if (index == i) {
        if (item.selected == true) {
          selectedListSeat.push(item);
          item.selected = false;
          item.empty = true;
          props.onSeats(selectedListSeat);
        } else {
          selectedListSeat.push(item);
          props.onSeats(selectedListSeat);
          item.selected = true;
          item.empty = false;
        }
      }
    });
    let tempSeat = [];
    tempRow.map((item) => {
      tempSeat.push(item);
    });
    setPrice(price + Number(props.priceAdd));
    setSelect(select + 1);
    setRow2(tempSeat);
  };
  const onSelectRow3 = (index) => {
    let tempRow = [];
    tempRow = row3;
    tempRow.map((item, i) => {
      if (index == i) {
        if (item.selected == true) {
          selectedListSeat.push(item);
          item.selected = false;
          item.empty = true;
          props.onSeats(selectedListSeat);
        } else {
          selectedListSeat.push(item);
          props.onSeats(selectedListSeat);
          item.selected = true;
          item.empty = false;
        }
      }
    });
    let tempSeat = [];
    tempRow.map((item) => {
      tempSeat.push(item);
    });
    setPrice(price + Number(props.priceAdd));
    setSelect(select + 1);
    setRow3(tempSeat);
  };

  const RenderItemView1 = (item) => {
    return (
      <TouchableOpacity
        style={{
          margin: 5,
        }}
        onPress={() => {
          if (item.item.selected == false && item.item.empty == false) {
            if (select <= 4) {
              onSelectRow1(item.index);
            } else {
              sError = "Maximum koltuk ulaşıldı.";
              setIsVisible(!isVisible);
              setDescription(sError);
              setTitle(0);
              sError = "";
            }
          } else {
            if (item.item.selected == true && item.item.empty == false) {
              onSelectedListClead1(item.index);
            }
            if (item.item.selected == false && item.item.empty == true) {
              sError =
                "Seçmiş olduğunuz koltukta bir başka kişi bulunmaktadır..";
              setIsVisible(!isVisible);
              setDescription(sError);
              setTitle(0);
              sError = "";
            }
          }
        }}
      >
        {item.item.empty == false && item.item.selected == true ? (
          <View style={styles.textImage}>
            <Text style={{ transform: [{ rotate: "90deg" }] }}>
              {item.item.id}
            </Text>
            <Image
              source={require("../assets/images/seat1.png")}
              style={{ width: 24, height: 24, tintColor: "green" }}
            />
          </View>
        ) : item.item.empty == true && item.item.selected == false ? (
          <View style={styles.textImage}>
            <Text style={{ transform: [{ rotate: "90deg" }] }}>
              {item.item.id}
            </Text>
            <Image
              source={require("../assets/images/seat1.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: item.item.gender == 2 ? "pink" : "blue",
              }}
            />
          </View>
        ) : item.item.empty == false && item.item.selected == false ? (
          <View style={styles.textImage}>
            <Text style={{ transform: [{ rotate: "90deg" }] }}>
              {item.item.id}
            </Text>
            <Image
              source={require("../assets/images/seat1.png")}
              style={{ width: 24, height: 24, tintColor: "#8e8e8e" }}
            />
          </View>
        ) : null}
      </TouchableOpacity>
    );
  };
  const RenderItemView2 = (item) => {
    return (
      <TouchableOpacity
        style={{
          margin: 5,
        }}
        onPress={() => {
          if (item.item.selected == false && item.item.empty == false) {
            if (select <= 4) {
              onSelectRow2(item.index);
            } else {
              sError = "Maximum koltuk ulaşıldı.";
              setIsVisible(!isVisible);
              setDescription(sError);
              setTitle(0);
              sError = "";
            }
          } else {
            if (item.item.selected == true && item.item.empty == false) {
              //   Alert.alert("!", "Koltuk seçildi Rezerveli");
              onSelectedListClead2(item.index);
            }
            if (item.item.selected == false && item.item.empty == true) {
              sError =
                "Seçmiş olduğunuz koltukta bir başka kişi bulunmaktadır..";
              setIsVisible(!isVisible);
              setDescription(sError);
              setTitle(0);
              sError = "";
            }
          }
        }}
      >
        {item.item.empty == false && item.item.selected == true ? (
          <View style={styles.textImage}>
            <Text style={{ transform: [{ rotate: "90deg" }] }}>
              {item.item.id}
            </Text>
            <Image
              source={require("../assets/images/seat1.png")}
              style={{ width: 24, height: 24, tintColor: "green" }}
            />
          </View>
        ) : item.item.empty == true && item.item.selected == false ? (
          <View style={styles.textImage}>
            <Text style={{ transform: [{ rotate: "90deg" }] }}>
              {item.item.id}
            </Text>
            <Image
              source={require("../assets/images/seat1.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: item.item.gender == 2 ? "pink" : "blue",
              }}
            />
          </View>
        ) : item.item.empty == false && item.item.selected == false ? (
          <View style={styles.textImage}>
            <Text style={{ transform: [{ rotate: "90deg" }] }}>
              {item.item.id}
            </Text>
            <Image
              source={require("../assets/images/seat1.png")}
              style={{ width: 24, height: 24, tintColor: "#8e8e8e" }}
            />
          </View>
        ) : null}
      </TouchableOpacity>
    );
  };
  const RenderItemView3 = (item) => {
    return (
      <TouchableOpacity
        style={{
          margin: 5,
        }}
        onPress={() => {
          if (item.item.selected == false && item.item.empty == false) {
            if (select <= 4) {
              onSelectRow3(item.index);
            } else {
              sError = "Maximum koltuk ulaşıldı.";
              setIsVisible(!isVisible);
              setDescription(sError);
              setTitle(0);
              sError = "";
            }
          } else {
            if (item.item.selected == true && item.item.empty == false) {
              onSelectedListClead3(item.index);
            }
            if (item.item.selected == false && item.item.empty == true) {
              sError =
                "Seçmiş olduğunuz koltukta bir başka kişi bulunmaktadır..";
              setIsVisible(!isVisible);
              setDescription(sError);
              setTitle(0);
              sError = "";
            }
          }
        }}
      >
        {item.item.empty == false && item.item.selected == true ? (
          <View style={styles.textImage}>
            <Text style={{ transform: [{ rotate: "90deg" }] }}>
              {item.item.id}
            </Text>
            <Image
              source={require("../assets/images/seat1.png")}
              style={{ width: 24, height: 24, tintColor: "green" }}
            ></Image>
          </View>
        ) : item.item.empty == true && item.item.selected == false ? (
          <View style={styles.textImage}>
            <Text style={{ transform: [{ rotate: "90deg" }] }}>
              {item.item.id}
            </Text>
            <Image
              source={require("../assets/images/seat1.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: item.item.gender == 2 ? "pink" : "blue",
              }}
            />
          </View>
        ) : item.item.empty == false && item.item.selected == false ? (
          <View style={styles.textImage}>
            <Text style={{ transform: [{ rotate: "90deg" }] }}>
              {item.item.id}
            </Text>
            <Image
              source={require("../assets/images/seat1.png")}
              style={{ width: 24, height: 24, tintColor: "#8e8e8e" }}
            />
          </View>
        ) : null}
      </TouchableOpacity>
    );
  };
  onSelectedListClead1 = (index) => {
    let tempRow = [];
    tempRow = row1;
    tempRow.map((item, i) => {
      if (index == i) {
        if (item.selected == true) {
          let Temp = [];

          Temp = selectedListSeat.filter(function (params) {
            return params.id !== item.id;
          });

          setSelectedlistSeat(Temp);

          item.selected = false;
          item.empty = false;
          props.onSeats(selectedListSeat);
        } else {
          item.selected = false;
          item.empty = true;
        }
      }
    });
    let tempSeat = [];
    tempRow.map((item) => {
      tempSeat.push(item);
    });
    setPrice(price - Number(props.priceAdd));
    setSelect(select - 1);
    setRow1(tempSeat);
    SelectedList.pop(1);
  };
  onSelectedListClead2 = (index) => {
    let tempRow = [];
    tempRow = row2;
    tempRow.map((item, i) => {
      if (index == i) {
        if (item.selected == true) {
          let Temp = [];

          Temp = selectedListSeat.filter(function (params) {
            return params.id !== item.id;
          });

          setSelectedlistSeat(Temp);
          item.selected = false;
          item.empty = false;
          props.onSeats(selectedListSeat);
        } else {
          item.selected = false;
          item.empty = true;
        }
      }
    });
    let tempSeat = [];
    tempRow.map((item) => {
      tempSeat.push(item);
    });
    setPrice(price - Number(props.priceAdd));
    setSelect(select - 1);
    setRow2(tempSeat);
  };
  onSelectedListClead3 = (index) => {
    let tempRow = [];
    tempRow = row3;
    tempRow.map((item, i) => {
      if (index == i) {
        if (item.selected == true) {
          let Temp = [];

          Temp = selectedListSeat.filter(function (params) {
            return params.id !== item.id;
          });

          setSelectedlistSeat(Temp);
          item.selected = false;
          item.empty = false;
          props.onSeats(selectedListSeat);
        } else {
          item.selected = false;
          item.empty = true;
        }
      }
    });
    let tempSeat = [];
    tempRow.map((item) => {
      tempSeat.push(item);
    });
    setPrice(price - Number(props.priceAdd));
    setSelect(select - 1);
    setRow3(tempSeat);
    SelectedList.pop(1);
  };

  const closedModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View
      style={{
        width: "100%",
        height: 210,
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
    >
      <View
        style={{
          width: 200,
          height: Dimensions.get("window").width * 0.9,
          left: -75,
          top: 80,

          transform: [{ rotate: "270deg" }],
        }}
      >
        <ScrollView
          style={{
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "#8e8e8e",
            width: 160,
          }}
        >
          <Image
            source={require("../assets/images/steering-wheel.png")}
            style={{
              width: 40,
              height: 30,
              alignSelf: "flex-start",
              marginTop: 10,
              marginLeft: 10,
              opacity: 0.5,
              resizeMode: "contain",
            }}
          />
          <View style={styles.LeftDesign}>
            <View>
              <FlatList
                data={row1}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                renderItem={RenderItemView1}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View>
              <FlatList
                data={row2}
                keyExtractor={(item) => item.id.toString()}
                renderItem={RenderItemView2}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <FlatList
              horizontal
              data={row3}
              keyExtractor={(item) => item.id.toString()}
              renderItem={RenderItemView3}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: 20,
        }}
      >
        <Text>SEÇİLEN KOLTUK SAYISI : {select}</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text>Toplam Ücret : {price}</Text>
      </View>
      <ModalAlert
        isVisible={isVisible}
        closedModal={closedModal}
        title={1}
        description={description}
        isClosed={true}
        isOK={false}
      />
    </View>
  );
};

export default BusDesign;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  LeftDesign: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 0,
  },
  textImage: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
