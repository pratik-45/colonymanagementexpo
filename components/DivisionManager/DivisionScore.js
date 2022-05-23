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

const DivisionScore = (props) => {
  const img = props.img;
  return (
    <View style={{}}>
      <TouchableOpacity
        onPress={() => {
          if (props.check == "Score")
            props.navigation.navigate("ServiceRatingDivision", {
              data: props.data,
              token: props.token,
            });
          if (props.check == "Complaint")
            props.navigation.navigate("ComplaintDivision", {
              data: props.data,
              token: props.token,
            });
          if (props.check == "Feedback")
            props.navigation.navigate("FeedbackDivision", {
              data: props.data,
              token: props.token,
            });
          if (props.check == "Occupancy")
            props.navigation.navigate("OccupancyDivision", {
              data: props.data,
              token: props.token,
            });
          if (props.check == "Request")
            props.navigation.navigate("RequestDivision", {
              data: props.data,
              token: props.token,
            });
        }}
      >
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            margin: 5,
            padding: 0,
            borderRadius: 10,
            borderColor: "grey",
            width: 270,
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <Image
              style={{
                width: 60,
                height: 60,
              }}
              source={img}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 40,
            }}
          >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  fontWeight: "bold",
                  top: 4,
                }}
              >
                {props.heading}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  margin: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingRight: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "grey",
                    fontWeight: "bold",
                    marginBottom: 2,
                  }}
                >
                  {props.data1}
                </Text>
                <Text
                  style={{ fontSize: 14, color: "black", fontWeight: "bold" }}
                >
                  {props.today}
                </Text>
              </View>
              <View
                style={{
                  height: "82%",
                  width: 1,
                  backgroundColor: "grey",
                  marginTop: 10,
                }}
              ></View>
              <View
                style={{
                  margin: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "grey",
                    fontWeight: "bold",
                    marginBottom: 2,
                  }}
                >
                  {props.data2}
                </Text>
                <Text
                  style={{ fontSize: 14, color: "black", fontWeight: "bold" }}
                >
                  {props.overall}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DivisionScore;
