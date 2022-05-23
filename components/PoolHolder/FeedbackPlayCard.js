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
import axios from "axios";
import Baseurl from "../Baseurl";

const FeedbackPlayCard = ({ route }) => {
  const name = route.params.name;
  const quarter = route.params.quarter;
  const colony = route.params.colony;
  const section = route.params.section;
  const division = route.params.division;
  const contact = route.params.contact;
  const id = route.params.id;
  const token = route.params.token;
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
        const res = await authAxios.get(Baseurl + "api/feedback-values/" + id);
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchdata();
  }, []);
  console.log(data);
  const Feedbackdata = (props) => {
    return (
      <View
        style={{
          backgroundColor: "#369398",
          padding: 6,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 4,
          borderRadius: 10,
        }}
      >
        {props.score > 2 ? (
          <View style={{ flexDirection: "row" }}>
            <View style={{ position: "relative", left: -8, width: "90%" }}>
              <Text style={{ fontSize: 16, color: "white" }}>
                {props.data}{" "}
              </Text>
            </View>
            <View style={{ top: 4 }}>
              <Text style={{ fontSize: 16, color: "white" }}>
                {props.score}
              </Text>
            </View>
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <View style={{ position: "relative", left: -8, width: "90%" }}>
              <Text style={{ fontSize: 16, color: "#ff8080" }}>
                {props.data}
              </Text>
            </View>
            <View style={{ top: 6 }}>
              <Text style={{ fontSize: 16, color: "#ff8080" }}>
                {" "}
                {props.score}
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  };
  return (
    <View>
      <Redbox content={"Feedback by " + name} />
      <View
        style={{
          backgroundColor: "#56CDD3",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15,
          marginTop: 2,
        }}
      >
        <View style={{ right: 120 }}>
          <View style={{ margin: 1 }}>
            <Text style={{ color: "white", fontSize: 16 }}>Name: {name}</Text>
          </View>
          <View style={{ margin: 1 }}>
            <Text style={{ color: "white", fontSize: 16 }}>
              Quarter: {quarter}
            </Text>
          </View>
          <View style={{ margin: 1 }}>
            <Text style={{ color: "white", fontSize: 16 }}>
              Colony Name: {colony}
            </Text>
          </View>
          <View style={{ margin: 1 }}>
            <Text style={{ color: "white", fontSize: 16 }}>
              Pool/Section: {section}
            </Text>
          </View>
          <View style={{ margin: 1 }}>
            <Text style={{ color: "white", fontSize: 16 }}>
              Division: {division}
            </Text>
          </View>
          <View style={{ margin: 1 }}>
            <Text style={{ color: "white", fontSize: 16 }}>
              Contact: {contact}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#56CDD3",
          padding: 5,
          marginTop: 10,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 1,
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Ratings
        </Text>
      </View>
      {data &&
        data.map((item) => {
          return (
            <Feedbackdata
              key={item.id}
              data={item.feed_param}
              score={item.value}
            />
          );
        })}
    </View>
  );
};

export default FeedbackPlayCard;
