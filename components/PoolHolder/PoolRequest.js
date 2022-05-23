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
import Baseurl from "../Baseurl";
import axios from "axios";

const PoolRequest = ({ route }) => {
  const data = route.params.data;
  const token = route.params.token;
  const name = route.params.name;
  const id = route.params.id;
  console.log(id);
  const [reqData, setReqData] = useState();
  const authAxios = axios.create({
    baseURL: Baseurl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await authAxios.get(Baseurl + "api/colony-requests/" + id);
      setReqData(res.data);
    };
    fetchData();
  }, []);
  console.log(reqData);
  const Requestbox = (props) => {
    return (
      <View>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "#2f9c9c",
              margin: 4,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  left: 10,
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text
                    style={{ fontSize: 14, color: "white", fontWeight: "bold" }}
                  >
                    Request Type:{" "}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 14, color: "white" }}>
                    {props.request}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  left: 220,
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text
                    style={{ fontSize: 14, fontWeight: "bold", color: "white" }}
                  >
                    Quarter:{" "}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 14, color: "white" }}>
                    {props.Quarter}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 15,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  left: 10,
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text
                    style={{ fontSize: 14, fontWeight: "bold", color: "white" }}
                  >
                    Name:{" "}
                  </Text>
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
                  left: 195,
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text
                    style={{ fontSize: 14, fontWeight: "bold", color: "white" }}
                  >
                    Department:{" "}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 14, color: "white" }}>
                    {props.department}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  left: 120,
                }}
              >
                <Text style={{ fontSize: 14, color: "white" }}>
                  {props.count}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 5,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  left: 10,
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text
                    style={{ fontSize: 14, fontWeight: "bold", color: "white" }}
                  >
                    Date:{" "}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 14, color: "white" }}>
                    {props.date}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  left: 120,
                }}
              >
                <Text style={{ fontSize: 14, color: "white" }}>
                  {props.count}
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
      <Redbox content={name} content2="Request" />
      <View>
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
            reqData.allot.map((item) => {
              return (
                <Requestbox
                  key={item.id}
                  colony={item.colony}
                  request="New Allotment"
                  name={item.user}
                />
              );
            })}
          {reqData &&
            reqData.vac.map((item) => {
              return (
                <Requestbox
                  key={item.id}
                  colony={item.colony}
                  request="Vacant Request"
                  name={item.user}
                />
              );
            })}
        </View>
      </View>
    </View>
  );
};

export default PoolRequest;
