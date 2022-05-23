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
  KeyboardAvoidingView,
} from "react-native";
import Footer from "./Footer";
import Redbox from "../PoolHolder/Redbox";
import DatePicker from "react-native-datepicker";
import Baseurl from "../Baseurl";
import axios from "axios";

const Vacant = ({ navigation, route }) => {
  const data = route.params.data;
  const token = route.params.token;
  const username = route.params.username;
  const [remarks, setRemarks] = useState();
  const [vacantDate, setVacantDate] = useState("");
  const authAxios = axios.create({
    baseURL: Baseurl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const quarter = 100;
  const postData = async () => {
    const res = await authAxios.post(Baseurl + "api/create-vacancy-request/", {
      username: username,
      date: vacantDate,
      remark: remarks,
    });
    console.log(res.data);
    navigation.navigate("Allotment", {
      data: data,
      token: token,
      username: username,
    });
  };
  // console.log(username);
  // console.log(vacantDate);
  // console.log(token);
  return (
    <View>
      <Redbox content="Request For Vacant" />
      <KeyboardAvoidingView>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#56CDD3",
            marginTop: 30,
            borderRadius: 20,
            height: "70%",
            padding: 20,
          }}
        >
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 24, color: "white" }}>
              I want to vacate my quarter
            </Text>
          </View>
          <View style={{ marginTop: 20, flexDirection: "row" }}>
            <Text style={{ fontSize: 18, color: "#369398" }}>Note : </Text>
            <Text style={{ fontSize: 18, color: "#369398" }}>
              Select the date on which you will{" "}
            </Text>
          </View>
          <Text style={{ fontSize: 18, color: "#369398" }}>
            vacate the quarter. You can add any
          </Text>

          <Text style={{ fontSize: 18, color: "#369398" }}>
            additional details in the remark
          </Text>
          <Text style={{ fontSize: 18, color: "#369398" }}>section below.</Text>
          <View>
            <View
              style={{
                marginTop: 30,
                borderRadius: 20,
                alignItems: "center",
                padding: 4,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <View style={{}}>
                <Text style={{ fontSize: 20, color: "white", left: -30 }}>
                  Select Date:
                </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  left: 30,
                }}
              >
                <DatePicker
                  onCloseModal={() => {
                    setVacantDate("");
                  }}
                  style={{ width: 180 }}
                  date={vacantDate}
                  mode="date"
                  placeholder="select date"
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
                      borderRadius: 10,
                      backgroundColor: "white",
                      borderColor: "white",
                    },
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => {
                    setVacantDate(date);
                  }}
                />
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  left: -10,
                  marginTop: 30,
                }}
              >
                Remarks:
              </Text>
              <View>
                <View
                  style={{
                    height: "60%",
                    backgroundColor: "white",
                    width: 240,
                    top: 32,
                    borderRadius: 10,
                    left: 12,
                  }}
                >
                  <TextInput
                    onChangeText={(value) => {
                      setRemarks(value);
                    }}
                    style={{ margin: 6, fontSize: 16, height: 80 }}
                    multiline={true}
                  ></TextInput>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 30,
            alignItems: "center",
            borderRadius: 10,
            marginLeft: 20,
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            style={styles.roundbutton}
            onPress={() => {
              postData();
            }}
          >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: "white", fontSize: 25 }}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  roundbutton: {
    maxWidth: 250,
    maxHeight: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#369398",
  },
});
export default Vacant;
