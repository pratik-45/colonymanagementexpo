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

const OccupancyDivision = ({ navigation, route }) => {
  const datas = route.params.data;
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
      const res = await authAxios.get(
        Baseurl + "api/occupancy-sections/" + datas.division_id
      );
      setData(res.data);
    };
    fetchdata();
  }, []);

  console.log(data);

  const Colonybox = (props) => {
    const name = props.colony;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("OccupancyEachPool", {
              name: name,
              id: props.id,
              token: token,
              data: datas,
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
                width: 180,
                left: 0,
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
                left: 40,
              }}
            >
              <Text style={{ fontSize: 18, color: "white" }}>{props.occu}</Text>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                left: 120,
              }}
            >
              <Text style={{ fontSize: 18, color: "white" }}>{props.vac}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <Redbox content="OCCUPIED" />
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
              left: 35,
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Pool/Section</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              left: 48,
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Occu.</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              left: 102,
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Vac.</Text>
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
          {data &&
            data.map((item) => {
              return (
                <>
                  <Colonybox
                    colony={item.name}
                    score="90.33%"
                    navigation={navigation}
                    occu={item.occ}
                    vac={item.vac}
                    id={item.id}
                  />
                </>
              );
            })}
        </View>
      </View>
    </View>
  );
};

export default OccupancyDivision;
