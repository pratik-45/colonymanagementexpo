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
import axios from "axios";
import Baseurl from "../Baseurl";

const OccupancyEachPool = ({ navigation, route }) => {
  const datas = route.params.data;
  const token = route.params.token;
  const name = route.params.name;
  const id = route.params.id;
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
        Baseurl + "api/occupancy-section-colonies/" + id
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
            alert("For further details please visit Division Summary");
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
                left: 10,
              }}
            >
              <Text style={{ fontSize: 18, color: "white" }}>{props.occu}</Text>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                left: 70,
              }}
            >
              <Text style={{ fontSize: 18, color: "white" }}>{props.vac}</Text>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                left: 130,
              }}
            >
              <Text style={{ fontSize: 18, color: "white" }}>{props.tot}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <Redbox content={name} content2="Occupancy Status" />
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
              left: 25,
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Occu.</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              left: 60,
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Vac.</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              left: 104,
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Tot</Text>
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
                    key={item.id}
                    colony={item.name}
                    score="90.33%"
                    navigation={navigation}
                    occu={item.occ}
                    vac={item.vac}
                    tot={item.total}
                  />
                </>
              );
            })}
        </View>
      </View>
    </View>
  );
};

export default OccupancyEachPool;
