import React from "react";
import { Text, View } from "react-native";

const Redbox = (props) => {
  return (
    <View
      style={{
        width: "100%",
        maxHeight: 200,
        backgroundColor: "#D44A46",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
      }}
    >
      <View style={{ maxWidth: "99%" }}>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            marginRight: 10,
          }}
        >
          {props.content}
        </Text>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            marginRight: 10,
          }}
        >
          {props.content2}
        </Text>
      </View>
    </View>
  );
};
export default Redbox;
