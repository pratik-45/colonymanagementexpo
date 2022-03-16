import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Redbox from "../PoolHolder/Redbox";
import Footer from "./Footer";
import Infobox from "./Infobox";

const Choice = ({ navigation, route }) => {
  const data = route.params.data;
  const token = route.params.token;
  const username = route.params.username;

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
                });
              } else if (props.name == "Complaint") {
                props.navigation.navigate("Complaint", {
                  token: token,
                  username: username,
                });
              } else if (props.name == "Previous Complaints") {
                props.navigation.navigate("ComplaintStatus", { token: token });
              } else {
                props.navigation.navigate("Allotment", { token: token });
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
      <Infobox
        name={data.name}
        department={data.division}
        colony={data.colony}
      />
      <Redbox content="Choose Process" />
      <View
        style={{
          marginTop: 50,
          backgroundColor: "#56CDD3",
          padding: 30,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          flex: 1,
        }}
      >
        <View style={{ marginTop: 20 }}></View>
        <Choicebox name="Feedback" navigation={navigation} />
        <Choicebox name="Complaint" navigation={navigation} />
        <Choicebox name="Allotment Request" navigation={navigation} />
        <Choicebox name="Previous Complaints" navigation={navigation} />

        <View style={{ justifyContent: "flex-end", flex: 1 }}>
          <Footer />
        </View>
      </View>
    </View>
  );
};

export default Choice;
