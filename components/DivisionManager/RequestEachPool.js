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

const RequestEachPool = ({ navigation, route }) => {
  const name = route.params.name;
  const Colonybox = (props) => {
    const name = props.colony;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("PoolRequest", { name: name });
          }}
        >
          <View
            style={{
              maxHeight: 100,
              backgroundColor: "#369398",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              margin: 4,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                left: 25,
              }}
            >
              <Text style={{ fontSize: 18, color: "white" }}>
                {props.colony}
              </Text>
            </View>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                left: 140,
              }}
            >
              <Text style={{ fontSize: 18, color: "white" }}>
                {props.count}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <Redbox content={name} content2="Request" />
      <View>
        <View
          style={{
            maxHeight: 100,
            backgroundColor: "#9c9c9a",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",

            padding: 5,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              left: 20,
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Colony Name</Text>
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              left: 140,
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Count</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#56CDD3",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingBottom: 30,
            paddingTop: 10,
          }}
        >
          <Colonybox colony="RELIEF YARD" count="6" navigation={navigation} />
          <Colonybox colony="BRICF FIELD" count="9" navigation={navigation} />
          <Colonybox colony="NEW COLONY" count="9" navigation={navigation} />
          <Colonybox colony="SOUTH HILL" count="7" navigation={navigation} />
          <Colonybox colony="LOCO HILL" count="7" navigation={navigation} />
          <Colonybox colony="RPSF COLONY" count="8" navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

export default RequestEachPool;
