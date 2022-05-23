import React from "react";
import { Text, View } from "react-native";
import Redbox from "../PoolHolder/Redbox";
import Baseurl from "../Baseurl";
import axios from "axios";
import { useState, useEffect } from "react/cjs/react.development";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const ComplaintStatus = ({ route }) => {
  const datas = route.params.data;
  const token = route.params.token;
  const [data, setdata] = useState();
  const authAxios = axios.create({
    baseURL: Baseurl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await authAxios.get(
          "api/user-complaints/" + datas.username
        );
        setdata(response.data);

        // console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchdata();
  }, []);

  console.log(data);

  const ComplaintBox = (props) => {
    return (
      <View
        style={{
          backgroundColor: "#369398",
          alignItems: "center",
          justifyContent: "center",
          margin: 5,
          borderRadius: 20,
          height: 100,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            left: 10,
            top: 10,
          }}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Name:{" "}
            </Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 16,
              }}
            >
              {props.name}
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            left: 10,
            top: 30,
          }}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Division:{" "}
            </Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 16,
              }}
            >
              {props.division}
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            left: 10,
            top: 50,
          }}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Colony:{" "}
            </Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 16,
              }}
            >
              {props.colony}
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            left: 10,
            top: 70,
          }}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Complaint Status:{" "}
            </Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 16,
              }}
            >
              {props.status}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <Redbox content="Complaint Status" />
      {data &&
        data.map((item) => {
          return (
            <ComplaintBox
              key={item.id}
              name={datas.name}
              division={datas.division}
              colony={datas.colony}
              status={item.status}
            ></ComplaintBox>
          );
        })}
    </View>
  );
};

export default ComplaintStatus;
