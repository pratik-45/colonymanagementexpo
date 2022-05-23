import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Button,
} from "react-native";
import Redbox from "../PoolHolder/Redbox";
import Footer from "./Footer";
import Infobox from "./Infobox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as StoreReview from "expo-store-review";

const Choice = ({ navigation, route }) => {
  const data = route.params.data;
  const token = route.params.token;
  const username = route.params.username;
  // console.log(data);
  const androidPackageName = "com.BeatleAnalytics.colonymanagement";
  // StoreReview.requestReview();
  const rateus = async () => {
    if (await StoreReview.isAvailableAsync()) {
      console.log("hello");
      StoreReview.requestReview();
    }
  };
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
  const Choicebox = (props) => {
    return (
      <View
        style={{ alignItems: "center", justifyContent: "center", margin: 10 }}
      >
        <View
          style={{
            backgroundColor: "#369398",
            justifyContent: "center",
            alignItems: "center",
            width: "75%",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (props.name == "Feedback") {
                props.navigation.navigate("Feedback", {
                  token: token,
                  username: username,
                  data: data,
                });
              } else if (props.name == "Complaint") {
                props.navigation.navigate("Complaint", {
                  token: token,
                  username: username,
                  data: data,
                  uri: null,
                  type: null,
                  name: null,
                });
              } else if (props.name == "Previous Complaints") {
                props.navigation.navigate("ComplaintStatus", {
                  token: token,
                  data: data,
                  username: username,
                });
              } else {
                props.navigation.navigate("Allotment", {
                  token: token,
                  data: data,
                  username: username,
                });
              }
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 20,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                }}
              >
                {props.name}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Infobox
          name={data.name}
          department={data.division}
          colony={data.colony}
          designation={data.designation}
          qtrno={data.quarter_number}
        />
        <Redbox content="Choose Process" />
        <View
          style={{
            height: "55%",
            marginTop: 50,
            backgroundColor: "#56CDD3",
            padding: 30,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <View style={{ marginTop: 20 }}></View>
          <Button onPress={rateus} title="rateus"></Button>
          <Choicebox name="Feedback" navigation={navigation} />
          <Choicebox name="Complaint" navigation={navigation} />
          <Choicebox name="Allotment Request" navigation={navigation} />
          <Choicebox name="Previous Complaints" navigation={navigation} />
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
        <View style={{ justifyContent: "flex-end", flex: 1 }}>
          <Footer />
        </View>
      </ScrollView>
    </View>
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
export default Choice;
