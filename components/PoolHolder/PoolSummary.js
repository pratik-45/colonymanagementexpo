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
import * as ScreenOrientation from "expo-screen-orientation";
const PoolSummary = ({ route }) => {
  const token = route.params.token;
  const id = route.params.id;
  const datas = route.params.data;
  const [cat, setCat] = useState(["SSE/W/S/LMG", "SSE/W/N/LMG"]);
  const [showcat, setShowCat] = useState(false);
  const [selectedCat, setSelectedCat] = useState(false);
  const [Item, setItem] = useState("");
  const [quarterTypes, setQuarterTypes] = useState();
  const [orientationIsLandscape, setOrientation] = useState(true);
  const [data, setData] = useState();
  const authAxios = axios.create({
    baseURL: Baseurl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  useEffect(() => {
    async function changeScreenOrientation() {
      if (orientationIsLandscape == true) {
        ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
        );
      }
    }
    const toggleOrientation = () => {
      setOrientation(!orientationIsLandscape);
      changeScreenOrientation();
    };
    toggleOrientation();
    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    };
  }, []);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await authAxios.get(Baseurl + "api/pool-summary/" + id);
      setData(res.data);
      setQuarterTypes(res.data.quarterTypes);
    };
    fetchdata();
  }, []);
  console.log(datas);

  const Colonyname = (props) => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          left: 0,
          width: 100,
          position: "relative",
        }}
      >
        <Text style={{ color: "white" }}>{props.colony}</Text>
      </View>
    );
  };
  const DataHead = (props) => {
    return (
      <View
        style={{
          marginLeft: 25,
          marginRight: 80,
          marginTop: 4,
          marginBottom: 4,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#56CDD3",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: 20,
            width: 40,
            alignItems: "center",
            justifyContent: "center",
            bottom: 10,
          }}
        >
          <View style={{ marginRight: 0, flexDirection: "row" }}>
            <View
              style={{
                position: "absolute",
                left: -25,
              }}
            >
              <Text style={{ color: "white" }}>{props.vss}</Text>
            </View>
            <View
              style={{
                position: "absolute",
                left: 0,
              }}
            >
              <Text style={{ color: "white" }}>{props.oss}</Text>
            </View>
            <View
              style={{
                position: "absolute",
                left: 25,
              }}
            >
              <Text style={{ color: "white" }}>{props.tss}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const QuarterHead = (props) => {
    const quarterName = props.quarter;
    return (
      <View>
        <View
          style={{
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            backgroundColor: "#56CDD3",
            marginTop: 10,
            paddingLeft: 10,
            paddingRight: 20,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 2,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
              {props.type}
            </Text>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: "white",
              width: "100%",
              marginTop: 10,
            }}
          ></View>
          <ScrollView style={{ height: 50 }} horizontal={true}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",

                flexDirection: "row",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  left: 0,
                }}
              >
                <Text style={{ color: "white" }}>Colony</Text>
              </View>
              {quarterTypes &&
                quarterTypes.map((item) => {
                  return (
                    <View style={{ marginLeft: 50, marginRight: 20 }}>
                      <View
                        style={{
                          marginTop: 10,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ fontSize: 14, color: "white" }}>
                          {item.title}
                        </Text>
                      </View>

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
                          }}
                        >
                          <Text style={{ color: "white", fontSize: 12 }}>
                            V
                          </Text>
                        </View>
                        <View
                          style={{
                            alignItems: "center",
                            justifyContent: "center",
                            margin: 6,
                            padding: 6,
                            left: 6,
                          }}
                        >
                          <Text style={{ color: "white", fontSize: 12 }}>
                            O
                          </Text>
                        </View>
                        <View
                          style={{
                            alignItems: "center",
                            justifyContent: "center",
                            margin: 6,
                            padding: 6,
                            right: 0,
                          }}
                        >
                          <Text style={{ color: "white", fontSize: 12 }}>
                            T
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
            </View>
          </ScrollView>

          <View
            style={{
              height: 1,
              backgroundColor: "white",
              width: "100%",
              marginTop: 8,
              top: 10,
            }}
          ></View>

          {/* s-p */}
        </View>
      </View>
    );
  };
  return (
    <View>
      <ScrollView>
        <View>
          <Redbox content={datas.pool_name} content2="Summary"></Redbox>

          {data !== undefined &&
            data.colonyTypes.map((item) => {
              return (
                <>
                  <QuarterHead type={item.title}></QuarterHead>
                  {item.colonies.map((ite) => {
                    // console.log(ite);
                    return (
                      <>
                        <View
                          style={{
                            flexDirection: "row",
                            backgroundColor: "#56CDD3",
                          }}
                        >
                          <View style={{ left: 20 }}>
                            <Colonyname colony={ite.name}></Colonyname>
                          </View>
                          {ite.quarter_types.map((item, index) => {
                            return (
                              <View
                                style={{
                                  flexDirection: "row",
                                  backgroundColor: "#56CDD3",
                                  left: 44,
                                }}
                              >
                                <DataHead
                                  key={item.id}
                                  vss={item.vac}
                                  oss={item.occ}
                                  tss={item.total}
                                ></DataHead>
                              </View>
                            );
                          })}
                        </View>
                      </>
                    );
                  })}
                </>
              );
            })}

          <View style={{ marginBottom: 30 }}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PoolSummary;
