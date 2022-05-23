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
import * as ScreenOrientation from "expo-screen-orientation";
const DivisionSummary = ({ route }) => {
  const datas = route.params.data;
  const token = route.params.token;
  const [cat, setCat] = useState();
  const [showcat, setShowCat] = useState(true);
  const [selectedCat, setSelectedCat] = useState(false);
  const [Item, setItem] = useState();
  const [sections, setSections] = useState();
  const [data, setData] = useState();
  const [sectionData, setSectionData] = useState();
  const [Type1, setType1] = useState();
  const [Type2, setType2] = useState();
  const [Type3, setType3] = useState();
  const [Type4, setType4] = useState();
  const [ids, setIds] = useState();
  const [orientationIsLandscape, setOrientation] = useState(true);
  const [quarterTypes, setQuarterTypes] = useState();

  const authAxios = axios.create({
    baseURL: Baseurl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  var temp = [];
  var tempids = [];
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
      const res = await authAxios.get(
        Baseurl + "api/division-summary/" + datas.division_id
      );
      setData(res.data);
    };
    fetchdata();
    fetchsectionname();
  }, [Item]);
  console.log(token);
  const fetchsectionname = () => {
    data &&
      data.map((item) => {
        temp.push(item.name);
        tempids.push(item.id);
      });
    setCat(temp);
    setIds(tempids);
    setShowCat(!showcat);
    fetchsectiondata();
  };
  // console.log(data);
  const fetchsectiondata = () => {
    data !== undefined &&
      data.map((item) => {
        // console.log(item.name);
        // console.log(Item);
        if (item.name === Item) {
          setSectionData(item);
          setQuarterTypes(item.quarterTypes);
        }
      });
  };
  // console.log(sectionData);
  // console.log(Item);
  // console.log(sectionData);

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
                  position: "absolute",
                }}
              >
                <Text style={{ color: "white" }}>Colony</Text>
              </View>
              {quarterTypes &&
                quarterTypes.map((item) => {
                  return (
                    <View style={{ left: 44, marginLeft: 40, marginRight: 25 }}>
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
          {Item !== undefined ? (
            <Redbox content={Item} content2="Summary"></Redbox>
          ) : (
            <Redbox content="Summary"></Redbox>
          )}

          <View style={{ marginTop: 20 }}>
            <TouchableOpacity
              onPress={() => {
                fetchsectionname();
              }}
            >
              <View
                style={{
                  maxHeight: 100,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#369398",
                  borderRadius: 5,
                  flexDirection: "row",
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontSize: 20, color: "white", marginRight: 10 }}>
                  Section :
                </Text>
                <Text style={{ fontSize: 20, color: "white", width: 190 }}>
                  {" "}
                  {Item}
                </Text>
                {selectedCat && (
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      left: 320,
                    }}
                    source={require("../../assets/basic-tick.png")}
                  />
                )}
              </View>
            </TouchableOpacity>
            {showcat && (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 5,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#56CDD3",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    width: "99%",
                  }}
                >
                  {cat &&
                    cat.map((item, index) => {
                      return (
                        <View key={index}>
                          <TouchableOpacity
                            onPress={() => {
                              setShowCat(false);
                              setSelectedCat(true);
                              setItem(item);
                              fetchsectiondata();
                            }}
                          >
                            <View
                              style={{
                                height: 40,
                                alignItems: "center",
                                justifyContent: "center",
                                width: 400,
                              }}
                            >
                              <Text
                                style={{
                                  fontSize: 20,
                                  color: "white",
                                }}
                              >
                                {item}
                              </Text>
                            </View>
                          </TouchableOpacity>
                          <View
                            style={{ backgroundColor: "#56CDD3", height: 2 }}
                          ></View>
                        </View>
                      );
                    })}
                </View>
              </View>
            )}
            <View></View>
          </View>

          {/* {data &&
            data.map((item) => {
              console.log(item.colonyTypes);
            })} */}

          {Item !== undefined ? (
            <View style={{ width: "100%", backgroundColor: "#56CDD3" }}>
              {sectionData !== undefined &&
                sectionData.colonyTypes.map((item) => {
                  return (
                    <>
                      <QuarterHead type={item.title}></QuarterHead>
                      {item.colonies.map((ite) => {
                        return (
                          <>
                            <ScrollView horizontal={true}>
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
                                        alignItems: "center",
                                        justifyContent: "center",
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
                            </ScrollView>
                          </>
                        );
                      })}
                    </>
                  );
                })}
            </View>
          ) : (
            <View
              style={{
                // backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                margin: 20,
                marginTop: 150,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 22,
                  color: "#56CDD3",
                  marginBottom: 10,
                }}
              >
                Select The Section
              </Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 22, color: "#56CDD3" }}
              >
                Click On The Section Button
              </Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 22, color: "#56CDD3" }}
              >
                And Select The Section
              </Text>
            </View>
          )}
          <View style={{ marginBottom: 30 }}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DivisionSummary;
