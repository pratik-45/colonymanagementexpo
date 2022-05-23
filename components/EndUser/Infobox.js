import React from "react";
import { Text, View } from "react-native";

const Infobox = (props) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#56CDD3",
          paddingBottom: 6,
          paddingTop: 2,
          flexDirection: "row",
          marginBottom: 20,
          borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15,
        }}
      >
        <View style={{ left: 8 }}>
          <View style={{ flexDirection: "row", margin: 4, width: 110 }}>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Name:{" "}
            </Text>
            <Text style={{ color: "white", fontSize: 16 }}>{props.name}</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 4, width: 110 }}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Designation:{" "}
            </Text>
            <Text style={{ color: "white", fontSize: 16 }}>
              {props.designation}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 4, width: 110 }}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Qtr No:{" "}
            </Text>
            <Text style={{ color: "white", fontSize: 16 }}>{props.qtrno}</Text>
          </View>
        </View>
        <View style={{ left: 80 }}>
          <View style={{ flexDirection: "row", margin: 4, width: 110 }}>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Department:{" "}
            </Text>

            <Text style={{ color: "white", fontSize: 16 }}>
              {props.department}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 4, width: 110 }}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Colony:{" "}
            </Text>
            <Text style={{ color: "white", fontSize: 16 }}>{props.colony}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Infobox;
