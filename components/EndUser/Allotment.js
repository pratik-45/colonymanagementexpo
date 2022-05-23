import Redbox from "./Redbox";
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
import Infobox from "./Infobox";

const Allotment = ({ navigation, route }) => {
  const data = route.params.data;
  const token = route.params.token;
  const username = route.params.username;
  console.log(token);
  const Selectrequest = (props) => {
    return (
      <View
        style={{ alignItems: "center", justifyContent: "center", margin: 10 }}
      >
        <View
          style={{
            backgroundColor: "#369398",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (props.name == "New Allotment") {
                props.navigation.navigate("NewAllotment", {
                  token: token,
                  data: data,
                  username: username,
                });
              } else {
                props.navigation.navigate("Vacant", {
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
    <View>
      <ScrollView>
        <Infobox name="Nishank" department="Signal" userid="112EFG4" />
        <Redbox content="Allotment Request" />
        <View
          style={{
            height: 320,
            backgroundColor: "#56CDD3",
            marginTop: 70,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 24 }}>
              Select The Request that you
            </Text>
            <Text style={{ color: "white", fontSize: 24 }}>want to make</Text>
          </View>
          <View style={{ marginTop: 20 }}></View>
          <Selectrequest name="New Allotment" navigation={navigation} />
          <View style={{ marginTop: 0 }}></View>
          <Selectrequest name="Request For Vacant" navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Allotment;
