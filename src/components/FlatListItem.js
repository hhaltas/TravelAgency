import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { BRColor, BackgroundStaticColor, TravelList } from "../assets/static";

const FlatListItem = (props) => {
  const RenderItemView = (item, index) => {
    return (
      <TouchableOpacity
        style={[
          styles.RIVMain,
          {
            borderColor: BRColor,
            backgroundColor:
              item?.index % 2 === 1 ? "#CFCFD0" : BackgroundStaticColor,
          },
        ]}
        onPress={() => props.onPress(item)}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.headerL, { width: "25%" }]}>
            {item?.item?.company}
          </Text>
          <Text style={[styles.headerL, { width: "55%", textAlign: "center" }]}>
            {item?.item?.plannedDate} {"-"} {item?.item?.plannedTime}
          </Text>
          <Text style={[styles.headerL, { width: "20%", textAlign: "right" }]}>
            {item?.item?.price} TL
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text style={[styles.headerC, { width: "20%", color: "gray" }]}>
            {item?.item?.type == 1 ? "2+1" : "2+2"}
          </Text>
          <Text style={[styles.headerC, { width: "60%", color: "gray" }]}>
            Tahmini varış süresi: {item?.item?.arrivalTime}
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
            {item?.item?.from} {"-->"} {item?.item?.to}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.main}>
      <FlatList
        data={props.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={RenderItemView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default FlatListItem;

const styles = StyleSheet.create({
  main: {},
  RIVMain: {
    height: 100,
    width: "auto",
    backgroundColor: "#fdfdfd",
    borderWidth: 0.3,
    borderRadius: 5,
    margin: 5,
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
