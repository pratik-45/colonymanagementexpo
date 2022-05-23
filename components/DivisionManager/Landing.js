import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Redbox from "../PoolHolder/Redbox";
import Footer from "../EndUser/Footer";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Landing = ({ navigation, route }) => {
  const [image, setImage] = useState(null);
  const [imagedata, setImagedata] = useState();
  const data = route.params.data;
  const token = route.params.token;
  const changeSession = () => {
    const removeData = async () => {
      try {
        await AsyncStorage.removeItem("username");
      } catch (e) {
        // saving error
        console.log(e);
      }
      try {
        await AsyncStorage.removeItem("pass");
      } catch (e) {
        // saving error
        console.log(e);
      }
    };
    console.log("deleated");

    removeData();
    navigation.navigate("Loginpage");
  };
  // console.log(data);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    setImagedata(result);
    // console.log(imagedata);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  // console.log(data);
  // console.log(token);
  const Info = (props) => {
    const data = props.data;
    const gap = props.gap;
    const gapcolon = props.gapcolon;

    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          position: "relative",
          left: gap,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "white",
            position: "relative",
          }}
        >
          {props.head}
          {gapcolon}:{" "}
        </Text>
        <View style={{ width: 160 }}>
          <Text
            style={{
              fontSize: 16,
              color: "white",
              position: "relative",
            }}
          >
            {data}
          </Text>
        </View>
      </View>
    );
  };
  const Choicebox = (props) => {
    return (
      <View
        style={{ alignItems: "center", justifyContent: "center", margin: 10 }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#369398",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            borderRadius: 10,
            height: 80,
          }}
          onPress={() => {
            if (props.content == "MY DASHBOARD") {
              props.navigation.navigate("DivisionDashboard", {
                data: data,
                token: token,
              });
            } else {
              props.navigation.navigate("DivisionSummary", {
                data: data,
                token: token,
              });
            }
          }}
        >
          <View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                }}
              >
                {props.content}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: "#56CDD3",
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <TouchableOpacity
                onPress={() => {
                  pickImage();
                }}
              >
                <View
                  style={{
                    height: 90,
                    width: 90,
                    backgroundColor: "white",
                    borderRadius: 40,
                    left: 0,
                  }}
                >
                  {image == null ? (
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 10,
                        top: 25,
                      }}
                    >
                      <Text style={{ color: "#369398", fontSize: 10 }}>
                        Upload pic
                      </Text>
                    </View>
                  ) : (
                    <Image
                      style={{
                        width: 90,
                        height: 90,
                        borderRadius: 40,
                      }}
                      source={{ uri: image }}
                    />
                  )}
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ left: 20 }}>
              <Info head="Name" data={data.name} gap={20} gapcolon={"    "} />

              <Info
                head="Division"
                data={data.division}
                gap={20}
                gapcolon={" "}
              />

              <Info head="Zone" data={data.zone} gap={20} gapcolon={"      "} />

              <Info
                head="Contact"
                data={data.ph_number}
                gap={22}
                gapcolon={"  "}
              />
            </View>
          </View>
        </View>
        <Redbox content="CHOOSE PROCESS" />
        <View
          style={{
            marginTop: 50,
            backgroundColor: "#56CDD3",
            padding: 30,
            borderRadius: 15,
          }}
        >
          <Choicebox content="MY DASHBOARD" navigation={navigation} />
          <Choicebox content="DIVISION SUMMARY" navigation={navigation} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              marginTop: 20,
              alignItems: "center",
              borderRadius: 10,
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <TouchableOpacity
              style={styles.roundbutton}
              onPress={() => {
                changeSession();
              }}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "white", fontSize: 16 }}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 20,
              alignItems: "center",
              borderRadius: 10,
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <TouchableOpacity
              style={styles.roundbutton}
              onPress={() => {
                navigation.navigate("Changepass", { data: data, token: token });
              }}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "white", fontSize: 16 }}>
                  Change Password
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 50, flex: 1, justifyContent: "flex-end" }}>
          <Footer />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  roundbutton: {
    width: 120,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#369398",
  },
});
export default Landing;
