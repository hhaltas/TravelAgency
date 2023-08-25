import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Logins from "./logins";
import Registers from "./register";
import TravelIndex from "./travel";
import Rezervations from "./rezervation";
import Sales from "./sales";

import { Button, Dimensions, Text, TouchableOpacity, View } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import { inputText } from "../src/assets/static";
import { Platform } from "react-native";
import { LogBox } from "react-native";
import { useEffect } from "react";
import Success from "./success";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  const router = useRouter();
  const navigation = useNavigation();
  useEffect(() => {
    LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
    LogBox.ignoreAllLogs();
    LogBox.ignoreLogs(["ABI49_0_ ..."]);
  }, []);

  return (
    <Stack.Navigator initialRouteName="logins">
      <Stack.Screen
        name="logins"
        component={Logins}
        options={{
          headerBackButtonMenuEnabled: false,
          headerLeft: () => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 30,
              }}
            ></View>
          ),

          headerTitle: () => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: Dimensions.get("window").width - 100,
              }}
            >
              <Text>SEYAHAT ACENTASI</Text>
            </View>
          ),
          headerTitleStyle: {
            justifyContent: "center",
            alignItems: "center",
          },
          headerRight: () => {
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 30,
              }}
            ></View>;
          },
        }}
      />
      <Stack.Screen
        name="register"
        component={Registers}
        options={{
          headerTitle: () => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: Dimensions.get("window").width - 100,
              }}
            >
              <Text>Seyahat Kayıt Rehberi</Text>
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("logins")}
              style={{ width: 30 }}
            >
              <Text
                style={{
                  height: "auto",
                  fontWeight: "600",

                  color: inputText,
                  textAlign: "left",
                }}
              >
                Geri
              </Text>
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            justifyContent: "center",
            alignItems: "center",
          },
          headerRight: () => {
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 30,
              }}
            ></View>;
          },
        }}
      />
      <Stack.Screen
        name="travel"
        component={TravelIndex}
        options={{
          headerLeft: () => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 30,
              }}
            ></View>
          ),
          headerTitle: () => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: Platform.OS == "android" ? 105 : 0,
              }}
            >
              <Text>ONLİNE BİLET</Text>
            </View>
          ),
          headerTitleStyle: {
            justifyContent: "center",
            alignItems: "center",
          },

          headerRight: () => {
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                borderWidth: 1,
              }}
            >
              <Text>USER</Text>
            </View>;
          },
        }}
      />
      <Stack.Screen
        name="rezervation"
        component={Rezervations}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ width: 30 }}
            >
              <Text
                style={{
                  height: "auto",
                  fontWeight: "600",

                  color: inputText,
                  textAlign: "left",
                }}
              >
                Geri
              </Text>
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: Platform.OS == "android" ? 105 : 0,
              }}
            >
              <Text>Rezervasyon işlemi</Text>
            </View>
          ),
          headerTitleStyle: {
            justifyContent: "center",
            alignItems: "center",
          },
          headerRight: () => {
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 30,
              }}
            ></View>;
          },
        }}
      />
      <Stack.Screen
        name="sales"
        component={Sales}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ width: 30 }}
            >
              <Text
                style={{
                  height: "auto",
                  fontWeight: "600",

                  color: inputText,
                  textAlign: "left",
                }}
              >
                Geri
              </Text>
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Bilet Bilgileri</Text>
            </View>
          ),
          headerRight: () => {
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 30,
              }}
            ></View>;
          },
          headerTitleStyle: {
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />

      <Stack.Screen
        name="success"
        component={Success}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ width: 30 }}
            ></TouchableOpacity>
          ),
          headerTitle: () => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>İyi Yolculuklar</Text>
            </View>
          ),
          headerRight: () => {
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 30,
              }}
            ></View>;
          },
          headerTitleStyle: {
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />
    </Stack.Navigator>
  );
}
