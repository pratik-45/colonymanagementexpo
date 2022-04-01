import { NavigationContainer } from "@react-navigation/native";
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
import DivisionScore from "./DivisionScore";
import Baseurl from "../Baseurl";
import axios from "axios";

const DivisionDashboard = ({ navigation, route }) => {
  const [data, setData] = useState();
  const token = route.params.token;

  const datas = route.params.data;
  const authAxios = axios.create({
    baseURL: Baseurl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  useEffect(() => {
    const fetchdata = async () => {
      const res = await authAxios.get(Baseurl + "api/admin-dashboard/1");
      setData(res.data[0]);
    };
    fetchdata();
  }, []);
  data !== undefined && console.log(data.service);
  return (
    <View>
      <ScrollView>
        <Redbox content="MY DASHBOARD" />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              backgroundColor: "#56CDD3",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              borderRadius: 20,
              paddingTop: 20,
              paddingBottom: 20,
              marginBottom: 30,
            }}
          >
            {data && (
              <View>
                <DivisionScore
                  today={data.service.today + "%"}
                  overall={data.service.overall + "%"}
                  heading="Service Rating"
                  img={require("../../assets/score.png")}
                  navigation={navigation}
                  check="Score"
                  data1="Today"
                  data2="Overall"
                  data={datas}
                  token={token}
                ></DivisionScore>
                <DivisionScore
                  today={data.feedback.today + "%"}
                  overall={data.feedback.overall + "%"}
                  heading="Feedback"
                  img={require("../../assets/feedback.png")}
                  navigation={navigation}
                  check="Feedback"
                  data1="Today"
                  data2="Overall"
                  data={datas}
                  token={token}
                ></DivisionScore>
                <DivisionScore
                  today={data.complaint.today}
                  overall={data.complaint.overall}
                  heading="Complaint"
                  img={require("../../assets/complaint.png")}
                  navigation={navigation}
                  check="Complaint"
                  data1="Today"
                  data2="Overall"
                  data={datas}
                  token={token}
                ></DivisionScore>
                <DivisionScore
                  today={data.occupancy.occ}
                  overall={data.occupancy.total}
                  heading="Occupancy"
                  img={require("../../assets/Occupancy.png")}
                  navigation={navigation}
                  check="Occupancy"
                  data1="Occu."
                  data2="Total"
                  data={datas}
                  token={token}
                ></DivisionScore>
                <DivisionScore
                  today={data.request.today}
                  overall={data.request.overall}
                  heading="Request"
                  img={require("../../assets/request.png")}
                  navigation={navigation}
                  check="Request"
                  data1="Today"
                  data2="Overall"
                  data={datas}
                  token={token}
                ></DivisionScore>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DivisionDashboard;
