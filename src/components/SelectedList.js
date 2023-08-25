import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { textColorTitle, inputText, textColorHeader } from "../assets/static";

const { width } = Dimensions.get("window");

const SelectedList = (props) => {
  const [selectedColor, setSelectedColor] = useState(false);

  const changedColor = () => {
    setSelectedColor(true);
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: props.design,
        padding: 1,
        alignItems: "center",
      }}
    >
      <Text
        style={[
          styles.header1,
          {
            color: props.title ? textColorHeader : textColorTitle,
            width:
              props.design === "column"
                ? "95%"
                : props.design == "row"
                ? "35%"
                : "100%",
          },
        ]}
      >
        {props.detail}
      </Text>
      {props.design == "row" && (
        <Text style={[styles.header1, { color: textColorTitle, width: "1%" }]}>
          :
        </Text>
      )}
      <View style={{ width: props.design == "row" ? "65%" : "100%" }}>
        <SelectDropdown
          data={props.countries}
          onSelect={props.onSelect}
          defaultButtonText={props.placeHolder}
          buttonTextAfterSelection={(selectedItem, index) => {
            changedColor();
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={[
            styles.dropdown1BtnStyle,
            {
              marginTop: 5,
              flexDirection: "row-reverse",
            },
          ]}
          searchPlaceHolderColor="gray"
          searchInputTxtStyle={{
            color: inputText,
          }}
          buttonTextStyle={[
            styles.dropdown1BtnTxtStyle,
            {
              fontWeight: "600",
              color: selectedColor ? inputText : "#C3C3C6",
              fontSize: 16,
              textAlign: "left",
              marginHorizontal: props.detail == "column" ? -5 : -2,
              height: 25,
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
          renderDropdownIcon={(isOpened) => {
            return (
              <Image
                source={
                  isOpened
                    ? require("../assets/images/up-arrow.png")
                    : require("../assets/images/down-arrow.png")
                }
                style={[
                  styles.btnImage,
                  {
                    paddingLeft: props.design == "row" ? 10 : 20,
                  },
                ]}
              />
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={[styles.dropdown1DropdownStyle, { width: "50%" }]}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={{
            fontSize: 18,
            fontWeight: "600",
            color: textColorTitle,
            textAlign: "left",
          }}
        />
      </View>
    </View>
  );
};

export default SelectedList;

const styles = StyleSheet.create({
  containerT: {
    flex: 1,
  },
  header1: {
    fontSize: 18,
    fontWeight: "600",
  },
  btnImage: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  header: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
  },
  headerTitle: { color: "#000", fontWeight: "bold", fontSize: 16 },
  saveAreaViewContainer: { flex: 1, backgroundColor: "#FFF" },
  viewContainer: { flex: 1, width, backgroundColor: "#FFF" },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "10%",
  },

  dropdown1BtnStyle: {
    width: "100%",
    height: 30,
    backgroundColor: "#FFF",
    borderColor: "#444",
    justifyContent: "flex-start",
  },
  dropdown1BtnTxtStyle: { color: "red" },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
});
