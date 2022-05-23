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
import Baseurl from "../Baseurl";
import axios from "axios";

const RequestEachPool = ({ navigation, route }) => {
  const data = route.params.data;
  const token = route.params.token;
  const name = route.params.name;
  const id = route.params.id;
  const [reqData, setReqData] = useState();
  const authAxios = axios.create({
    baseURL: Baseurl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    const fetchdata = async () => {
      const res = await authAxios.get(
        Baseurl + "api/colony-vise-requests/" + id + "/"
      );
      setReqData(res.data);
    };
    fetchdata();
  }, []);

  console.log(reqData);
  const Colonybox = (props) => {
    const name = props.colony;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("PoolRequest", {
              name: name,
              data: data,
              token: token,
              id: props.id,
            });
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
              padding: 10,
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

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                left: 140,
              }}
            >
              <Text style={{ fontSize: 18, color: "white" }}>
                {props.count}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <Redbox content={name} content2="Request" />
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
              left: 140,
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Count</Text>
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
          {reqData &&
            reqData.map((item) => {
              return (
                <Colonybox
                  key={item.id}
                  id={item.id}
                  colony={item.name}
                  count={item.count}
                  navigation={navigation}
                />
              );
            })}
        </View>
      </View>
    </View>
  );
};

export default RequestEachPool;
