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
  KeyboardAvoidingView,
} from "react-native";
import Redbox from "../PoolHolder/Redbox";
import axios from "axios";
import Baseurl from "../Baseurl";

const ComplaintDetailedBox = ({ navigation, route }) => {
  const [showcat, setShowCat] = useState(false);
  const [selectedCat, setSelectedCat] = useState(false);
  const [cat, setCat] = useState(["Pending", "Resolved", "Dissolved"]);
  const [catname, setCatName] = useState(route.params.status);
  const name = route.params.name;
  const quarter = route.params.quarter;
  const date = route.params.date;
  const id = route.params.id;
  const datas = route.params.data;
  const token = route.params.token;

  const [data, setData] = useState();
  const authAxios = axios.create({
    baseURL: Baseurl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const handleupdate = () => {
    const postdata = async () => {
      try {
        const response = await authAxios.post("api/update-complaint-status/", {
          complaint: id,
          status: catname,
        });
        console.log(response.data);

        // console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    postdata();
    navigation.navigate("Landing", { data: datas, token: token });
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await authAxios.get(Baseurl + "api/complaint/" + id);
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchdata();
  }, []);
  console.log(data);
  return (
    <View>
      <View>
        <ScrollView>
          <Redbox content="COMPLAINT"></Redbox>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 22, marginTop: 10 }}>{catname}</Text>
          </View>
          <View
            style={{
              backgroundColor: "#369398",
              margin: 5,
              borderRadius: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              {data && (
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ margin: 10 }}>
                      <Text style={{ fontSize: 16, color: "white" }}>
                        Name:
                      </Text>
                    </View>
                    <View style={{ margin: 10, marginLeft: 0 }}>
                      <Text style={{ fontSize: 16, color: "white" }}>
                        {data.name}
                      </Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ margin: 10 }}>
                      <Text style={{ fontSize: 16, color: "white" }}>
                        Quarter:
                      </Text>
                    </View>
                    <View style={{ margin: 10, marginLeft: 0 }}>
                      <Text style={{ fontSize: 16, color: "white" }}>
                        {data.quarter}
                      </Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ margin: 10 }}>
                      <Text style={{ fontSize: 16, color: "white" }}>
                        Complaint Date:
                      </Text>
                    </View>
                    <View style={{ margin: 10, marginLeft: 0 }}>
                      <Text style={{ fontSize: 16, color: "white" }}>
                        {data.date}
                      </Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ margin: 10 }}>
                      <Text style={{ fontSize: 16, color: "white" }}>
                        Complaint Type:
                      </Text>
                    </View>
                    <View style={{ margin: 10, marginLeft: 0 }}>
                      <Text style={{ fontSize: 16, color: "white" }}>
                        {data.complaint_type}
                      </Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ margin: 10 }}>
                      <Text style={{ fontSize: 16, color: "white" }}>
                        Complaint SubType:
                      </Text>
                    </View>
                    <View style={{ margin: 10, marginLeft: 0 }}>
                      <Text style={{ fontSize: 16, color: "white" }}>
                        {data.complaint_type}
                      </Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ margin: 10 }}>
                      <Text style={{ fontSize: 16, color: "white" }}>
                        Remarks:
                      </Text>
                    </View>
                    <View style={{ margin: 10, marginLeft: 0, width: 200 }}>
                      <Text style={{ fontSize: 16, color: "white" }}>
                        {data.remarks}
                      </Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ margin: 10 }}>
                      <Text style={{ fontSize: 16, color: "white" }}>
                        Days Left:
                      </Text>
                    </View>
                    <View style={{ margin: 10, marginLeft: 0 }}>
                      <Text style={{ fontSize: 16, color: "white" }}>
                        {data.rem_days}
                      </Text>
                    </View>
                    <View>
                      <View style={{ flexDirection: "row", left: 120 }}>
                        <View style={{ margin: 10 }}>
                          <Text style={{ fontSize: 16, color: "white" }}>
                            TAT:
                          </Text>
                        </View>
                        <View style={{ margin: 10, marginLeft: 0 }}>
                          <Text style={{ fontSize: 16, color: "white" }}>
                            {data.TAT} Days
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            </View>
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                margin: 10,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 24,
                    marginTop: 10,
                    color: "white",
                    marginLeft: 30,
                  }}
                >
                  Action :
                </Text>
              </View>
              <View style={{ marginTop: 10, marginLeft: 50 }}>
                <TouchableOpacity
                  onPress={() => {
                    setShowCat(!showcat);
                  }}
                >
                  <View
                    style={{
                      height: 35,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "white",
                      borderRadius: 5,
                      width: 150,
                    }}
                  >
                    <Text
                      style={{ fontSize: 20, color: "black", marginRight: 20 }}
                    >
                      {catname}
                    </Text>
                    {selectedCat && (
                      <Image
                        style={{
                          position: "absolute",
                          width: 20,
                          height: 20,
                          left: 120,
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
                        cat.map((item) => {
                          return (
                            <View>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedCat(true);
                                  setCatName(item);
                                  setShowCat(false);
                                }}
                              >
                                <View
                                  style={{
                                    height: 40,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 120,
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
                                style={{ backgroundColor: "white", height: 2 }}
                              ></View>
                            </View>
                          );
                        })}
                    </View>
                  </View>
                )}
                <View></View>
              </View>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <KeyboardAvoidingView>
                <View
                  style={{
                    height: 80,
                    backgroundColor: "white",
                    width: 350,
                    borderRadius: 10,
                    marginBottom: 20,
                    marginTop: 10,
                  }}
                >
                  <TextInput
                    placeholder="Remarks"
                    placeholderTextColor={"black"}
                    style={{
                      fontSize: 22,
                      margin: 10,
                    }}
                    multiline={true}
                  ></TextInput>
                </View>
              </KeyboardAvoidingView>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              alignItems: "center",
              borderRadius: 10,
              marginBottom: 30,
            }}
          >
            <TouchableOpacity
              style={styles.roundbutton}
              onPress={() => {
                handleupdate();
              }}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "white", fontSize: 25 }}>UPDATE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  roundbutton: {
    width: 120,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#369398",
  },
});
export default ComplaintDetailedBox;
