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
import DatePicker from "react-native-datepicker";
const ComplaintEachPool = ({ navigation, route }) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

  var past30 = new Date(Date.now() - 2592000000);
  var dd1 = String(past30.getDate()).padStart(2, "0");
  var mm1 = String(past30.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy1 = past30.getFullYear();
  past30 = yyyy1 + "-" + mm1 + "-" + dd1;
  const [startdate, setStartDate] = useState(past30);
  const [enddate, setEndDate] = useState(today);
  const Division = route.params.name;
  const Colonybox = (props) => {
    const name = props.colony;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("ECSCW", { name: name });
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
              padding: 20,
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
            {props.count < 10 ? (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  left: 210,
                  position: "absolute",
                }}
              >
                <Text style={{ fontSize: 18, color: "white" }}>
                  {props.count}
                </Text>
              </View>
            ) : (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  left: 205,
                  position: "absolute",
                }}
              >
                <Text style={{ fontSize: 18, color: "white" }}>
                  {props.count}
                </Text>
              </View>
            )}
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                left: 320,
                position: "absolute",
              }}
            >
              <Text style={{ fontSize: 18, color: "white" }}>
                {props.score}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <Redbox content={Division} content2=" COMPLAINT" />
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={{ flexDirection: "row", padding: 8 }}>
          <View style={{ position: "relative", right: 20 }}>
            <DatePicker
              style={{ width: 130 }}
              date={startdate}
              mode="date"
              placeholder="Start date"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2055-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  borderRadius: 15,
                  borderColor: "#9c9c9a",
                  borderWidth: 2,
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => {
                setStartDate(date);
              }}
            />
          </View>
          <View style={{ position: "relative", right: 10 }}>
            <DatePicker
              style={{ width: 130 }}
              date={enddate}
              mode="date"
              placeholder="End date"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2055-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  borderRadius: 15,
                  borderColor: "#9c9c9a",
                  borderWidth: 2,
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => {
                setEndDate(date);
              }}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              borderRadius: 10,
              justifyContent: "center",
              left: 15,
            }}
          >
            <TouchableOpacity style={styles.roundbutton}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 2,
                }}
              >
                <Text style={{ color: "white", fontSize: 13 }}>Search</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
              left: 58,
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Count</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              left: 102,
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Pending</Text>
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
          <Colonybox
            colony="RELIEF YARD"
            score="1"
            navigation={navigation}
            count="12"
          />
          <Colonybox
            colony="BRICF FIELD"
            score="0"
            navigation={navigation}
            count="5"
          />
          <Colonybox
            colony="NEW COLONY"
            score="1"
            navigation={navigation}
            count="10"
          />
          <Colonybox
            colony="SOUTH HILL"
            score="2"
            navigation={navigation}
            count="8"
          />
          <Colonybox
            colony="LOCO COLONY"
            score="2"
            navigation={navigation}
            count="14"
          />
          <Colonybox
            colony="RPSF COLONY"
            score="1"
            navigation={navigation}
            count="6"
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  roundbutton: {
    width: 50,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#369398",
  },
});
export default ComplaintEachPool;
