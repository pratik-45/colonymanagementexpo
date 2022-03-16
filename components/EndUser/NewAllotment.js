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
import Footer from "./Footer";
import Redbox from "../PoolHolder/Redbox";

const NewAllotment = ({ navigation }) => {
  const [cat, setCat] = useState([
    "Wall is cracked",
    "Windows are broken",
    "Sealing is broken",
  ]);
  const Dropdowndata = (props) => {
    const [show, setshow] = useState(false);
    const [selected, setSelected] = useState(false);
    return (
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setshow(!show);
          }}
          style={{
            backgroundColor: "#369398",
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
            borderRadius: 8,
            height: 40,
          }}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 20, color: "white" }}>
              {props.heading}
            </Text>
            {selected && (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  left: 100,
                  bottom: 12,
                }}
              >
                <Image
                  style={{
                    position: "absolute",
                    width: 20,
                    height: 20,
                  }}
                  source={require("../../assets/basic-tick.png")}
                />
              </View>
            )}
          </View>
        </TouchableOpacity>
        {show &&
          props.data.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setshow(!show);
                  // console.log(item);
                  setSelected(true);
                }}
                key={index}
                style={{
                  backgroundColor: "#56CDD3",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "90%",
                  borderRadius: 8,
                  padding: 8,
                  marginTop: 1,
                }}
              >
                <View>
                  <Text style={{ color: "white", fontSize: 18 }}>{item}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
      </View>
    );
  };
  return (
    <View>
      <ScrollView>
        <Redbox content="New Allotment" />
        <View
          style={{
            backgroundColor: "#56CDD3",
            marginTop: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: "100%",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 22, color: "white" }}>
              I would like to apply for a new quarter
            </Text>
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>
              You can provide additional details
            </Text>
            <Text style={{ fontSize: 18, color: "white" }}>
              Regarding the Section, Colony and
            </Text>
            <Text style={{ fontSize: 18, color: "white" }}>
              Type of quarter in the section below
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#369398",
              }}
            >
              This is Optional information
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: "90%",
                borderRadius: 20,
                alignItems: "center",
                marginBottom: 20,
                paddingBottom: 20,
              }}
            >
              <Dropdowndata heading="Section" data={cat} />
              <Dropdowndata heading="Colony Name" data={cat} />
              <Dropdowndata heading="Type" data={cat} />
              <Dropdowndata heading="Quarter Type" data={cat} />
            </View>
          </View>
          <View
            style={{
              marginTop: 30,
              alignItems: "center",
              borderRadius: 10,
              paddingBottom: 20,
            }}
          >
            <TouchableOpacity
              style={styles.roundbutton}
              onPress={() => navigation.navigate("Allotment")}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "white", fontSize: 25 }}>Apply</Text>
              </View>
            </TouchableOpacity>
          </View>
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

export default NewAllotment;
