import React from "react";
import { Text, View } from "react-native";

const Redbox = (props) => {
  // console.log(props.content2);
  return (
    <View
      style={{
        width: "100%",
        maxHeight: 100,
        backgroundColor: "#D44A46",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
      }}
    >
      {props.content != "" && (
        <View style={{ maxWidth: "99%" }}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              marginRight: 10,
            }}
          >
            {props.content}
          </Text>
        </View>
      )}

      {props.content2 != undefined && (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: 22,
              marginRight: 10,
            }}
          >
            {props.content2}
          </Text>
        </View>
      )}
    </View>
  );
};
export default Redbox;
