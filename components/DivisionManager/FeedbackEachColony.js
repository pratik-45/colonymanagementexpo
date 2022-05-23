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
const FeedbackEachColony = ({ navigation, route }) => {
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
  const colony = route.params.name;
  const [startdate, setStartDate] = useState(past30);
  const [enddate, setEndDate] = useState(today);
  const [data, setData] = useState();
  const authAxios = axios.create({
    baseURL: Baseurl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await authAxios.get(
          Baseurl +
            "api/colony-feedbacks/<colony id>/" +
            startdate +
            "/" +
            enddate
        );
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchdata();
  }, []);
  console.log(data);

  const FeedbackBox = (props) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("FeedbackPlayCard", {
              name: props.name,
              quarter: props.quarter,
            });
          }}
        >
          <View
            style={{
              backgroundColor: "#2f9c9c",
              margin: 4,
              height: 80,
              borderRadius: 10,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  left: 20,
                  top: 10,
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text style={{ fontSize: 15, color: "white" }}>Name : </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 14, color: "white" }}>
                    {props.name}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  left: 20,
                  top: 45,
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text style={{ fontSize: 15, color: "white" }}>
                    Quarter:{" "}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 14, color: "white" }}>
                    {props.quarter}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                left: 270,
                bottom: 50,
                position: "absolute",
              }}
            >
              <View>
                <Text style={{ fontSize: 15, color: "white" }}>
                  Rating :{props.rating}{" "}
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                left: 270,
                top: 46,
                position: "absolute",
              }}
            >
              <View>
                <Text style={{ fontSize: 15, color: "white" }}>
                  Date :{props.date}{" "}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <Redbox content={colony + " FEEDBACK"}></Redbox>
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
      <FeedbackBox name="Aman" quarter="A-150" rating="5"></FeedbackBox>
      <FeedbackBox name="Rahul" quarter="A-123" rating="4.8"></FeedbackBox>
      <FeedbackBox name="Rohit" quarter="C-77" rating="4.9"></FeedbackBox>
      <FeedbackBox name="Rohan" quarter="C-150" rating="4.6"></FeedbackBox>
      <FeedbackBox name="Amit" quarter="G-150" rating="4.7"></FeedbackBox>
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
export default FeedbackEachColony;
