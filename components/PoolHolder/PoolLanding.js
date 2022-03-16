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
import Redbox from "./Redbox";
import Footer from "../EndUser/Footer";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import Baseurl from "../Baseurl";

const PoolLanding = ({ navigation, route }) => {
  var data = route.params.data;
  const token = route.params.token;
  const id = data.pool;
  const division = data.division;
  const zone = data.zone;
  const phone = data.ph_number;
  const name = data.name;
  const [image, setImage] = useState(null);
  const [imagedata, setImagedata] = useState();

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

  // useEffect(() => {
  //   const fetchsessiondata = () => {
  //     if (authAxios !== undefined) {
  //       try {
  //         const response = authAxios.get("api/user-info/");
  //         setSessiondata(response.data);
  //         console.log(sessiondata);
  //         // console.log(data);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     }
  //   };
  //   fetchsessiondata();
  // }, []);

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
              props.navigation.navigate("FCManagement", {
                id: id,
                token: token,
              });
            } else {
              props.navigation.navigate("PoolSummary");
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
    <View style={{ flex: 1 }}>
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
            <Info head="Section" data="SSE/W /S/LMG" gap={20} gapcolon={"  "} />
            <Info head="Division" data={division} gap={20} gapcolon={" "} />
            <Info head="Zone" data={zone} gap={20} gapcolon={"      "} />
            <Info head="Name" data={name} gap={20} gapcolon={"    "} />
            <Info head="Phone no" data={phone} gap={28} gapcolon={"  "} />
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
        <Choicebox content="POOL SUMMARY" navigation={navigation} />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Footer />
      </View>
    </View>
  );
};

export default PoolLanding;
