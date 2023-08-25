import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeSetData = async (value, key) => {
  try {
    const listItem = [];
    await AsyncStorage.getItem(key).then((item) => {
      listItem.push(item);
      console.log(item, "*-*-*");
      return item;
    });
    const temper = [];
    // temper.push(listItem);
    console.log("soteSet", listItem);

    const jsonValue = JSON.stringify(value);
    temper.push(jsonValue);
    await AsyncStorage.setItem(key, jsonValue);
    // console.log("last", JSON.parse(temper));
  } catch (e) {
    console.log("storeSetData", e);
    // saving error
  }
};

export const storeGetData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("storeGetData", e);
    // error reading value
  }
};

export const getStoreObject = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("getStoreObject", e);
    // read error
  }

  console.log("getStoreObject Done.");
};

export const setStoreValue = async (value, key) => {
  try {
    // const data = await getStoreObject(key);
    // const temp = [];
    // data != null && temp.push(data);
    const jsonValue = JSON.stringify(value);
    temp.push(jsonValue);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log("setStoreValue", e);
    // save error
  }

  console.log("setStoreValue Done.");
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }

  console.log("Clear Done.");
};
