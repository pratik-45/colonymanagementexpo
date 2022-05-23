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
import Redbox from "./Redbox";
import Score from "./Score";
import axios from "axios";
import Baseurl from "../Baseurl";
const FCManagement = ({ navigation, route }) => {
  const id = route.params.id;
  const token = route.params.token;
  const data = route.params.data;
  const [datas, setDatas] = useState();
  const authAxios = axios.create({
    baseURL: Baseurl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await authAxios.get(Baseurl + "api/pool-dashboard/" + id);
        setDatas(res.data[0]);
      } catch (e) {
        console.log(e);
      }
    };
    fetchdata();
  }, []);

  console.log(datas);

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
            {datas && (
              <View>
                <Score
                  today={datas.service.today}
                  overall={datas.service.overall}
                  heading="Service rating"
                  img={require("../../assets/score.png")}
                  navigation={navigation}
                  check="Score"
                  data1="Today"
                  data2="Overall"
                  id={id}
                  token={token}
                  data={data}
                  name={data.pool_name}
                ></Score>
                <Score
                  today={datas.feedback.today}
                  overall={datas.feedback.overall}
                  heading="Feedback"
                  img={require("../../assets/feedback.png")}
                  navigation={navigation}
                  check="Feedback"
                  data1="Today"
                  data2="Overall"
                  id={id}
                  token={token}
                  data={data}
                  name={data.pool_name}
                ></Score>
                <Score
                  today={datas.complaint.today}
                  overall={datas.complaint.overall}
                  heading="Complaint"
                  img={require("../../assets/complaint.png")}
                  navigation={navigation}
                  check="Complaint"
                  data1="Today"
                  data2="Overall"
                  id={id}
                  token={token}
                  data={data}
                  name={data.pool_name}
                ></Score>
                <Score
                  today={datas.occupancy.occ}
                  overall={datas.occupancy.total}
                  heading="Occupancy"
                  img={require("../../assets/Occupancy.png")}
                  navigation={navigation}
                  check="Occupancy"
                  data1="Occu."
                  data2="Total"
                  id={id}
                  token={token}
                  data={data}
                  name={data.pool_name}
                ></Score>
                <Score
                  today={datas.request.today}
                  overall={datas.request.overall}
                  heading="Request"
                  img={require("../../assets/request.png")}
                  navigation={navigation}
                  check="Request"
                  data1="Today"
                  data2="Overall"
                  id={id}
                  token={token}
                  data={data}
                  name={data.pool_name}
                ></Score>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FCManagement;
