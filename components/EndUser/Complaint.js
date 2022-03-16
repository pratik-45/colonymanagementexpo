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
import Footer from "./Footer";
import Redbox from "../PoolHolder/Redbox";
import axios from "axios";
import Baseurl from "../Baseurl";
const Complaint = ({ navigation, route }) => {
  const token = route.params.token;
  const username = route.params.username;
  const [data, setData] = useState();
  const [showcat, setShowCat] = useState(false);
  const [selectedCat, setSelectedCat] = useState(false);
  const [savecat, setSaveCat] = useState("");
  const [selectedSubCat, setSelectedSubCat] = useState(false);
  const [cat, setCat] = useState([]);
  const [subcat, setSubCat] = useState([]);
  const [showsubcat, setShowSubCat] = useState(false);
  const [prev, setPrev] = useState("");
  const [catid, setCatid] = useState();
  const [subcatid, setSubcatid] = useState();
  const [cid, setCid] = useState();
  const [scid, setScid] = useState();
  const [remark, setRemark] = useState("");
  var cate = [];
  var subcate = [];
  var cateid = [];
  var subcateid = [];

  const authAxios = axios.create({
    baseURL: Baseurl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await authAxios.get(Baseurl + "api/complaint-types/");

        console.log(response);
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchdata();

    // data !== undefined &&
  }, []);
  console.log(data);

  const showtype = () => {
    data.map((item, index) => {
      // setCat([...cat, item.title]);
      cate.push(item.title);
      cateid.push(item.id);
      setCat(cate);
      setCatid(cateid);
    });
    console.log(cat);
  };

  const showsubtype = (category) => {
    setPrev(category);
    prev !== category &&
      data.map((item) => {
        if (item.title === category) {
          item.subtypes.map((item) => {
            subcate.push(item.title);
            subcateid.push(item.id);
            setSubCat(subcate);
            setSubcatid(subcateid);
          });
        }
      });
  };

  const handleSubmit = async () => {
    try {
      const response = await authAxios.post("api/create-complaint/", {
        user: username,
        type: cid,
        subtype: scid,
        remark: remark,
      });
      console.log(response.data);
      // setCheckdata(true);
      // console.log(data);
    } catch (e) {
      console.log(e);
    }
    navigation.navigate("Thankyou", { where: "Complaint" });
  };

  console.log(cid);
  console.log(scid);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Redbox content="Complaint" />
        {/* category */}
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => {
              setShowCat(!showcat);
              showtype();
            }}
          >
            <View
              style={{
                height: 35,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#369398",
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>
                Category Of Complaint
              </Text>
              {selectedCat && (
                <Image
                  style={{
                    position: "absolute",
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
            <View style={{ alignItems: "center", justifyContent: "center" }}>
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
                            setSelectedCat(true);
                            showsubtype(item);
                            setCid(catid[index]);
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
        {/* subcategory */}
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity
            onPress={() => {
              setShowSubCat(!showsubcat);
            }}
          >
            <View
              style={{
                height: 35,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#369398",
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>
                SubCategory Of Complaint
              </Text>
              {selectedSubCat && (
                <Image
                  style={{
                    position: "absolute",
                    width: 25,
                    height: 25,
                    left: 320,
                  }}
                  source={require("../../assets/basic-tick.png")}
                />
              )}
            </View>
          </TouchableOpacity>
          {showsubcat && (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
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
                {subcat &&
                  subcat.map((item, index) => {
                    return (
                      <View>
                        <TouchableOpacity
                          onPress={() => {
                            setSelectedSubCat(true);
                            setScid(subcatid[index]);
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
        {/* remark */}
        <View
          style={{
            height: 400,
            marginTop: 20,
            backgroundColor: "#56CDD3",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 25, color: "#369398", left: 0 }}>
              Remark
            </Text>
          </View>
          <Text style={{ fontSize: 20, color: "white", marginTop: 10 }}>
            Add a short description of the problem!
          </Text>
          <View
            style={{
              height: "55%",
              backgroundColor: "white",
              width: "92%",
              marginTop: 10,
              borderRadius: 10,
            }}
          >
            <TextInput
              style={{ margin: 10, fontSize: 20, height: 100 }}
              multiline={true}
              onChangeText={(item) => {
                setRemark(item);
              }}
            ></TextInput>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginTop: 20,
                alignItems: "center",
                borderRadius: 10,
                margin: 15,
              }}
            >
              <TouchableOpacity
                style={styles.roundbutton2}
                onPress={() => navigation.navigate("Camera")}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 16 }}>
                    Take a Picture
                  </Text>
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      marginLeft: 4,
                    }}
                    source={require("../../assets/camera.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            // flexDirection: 'row',
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              marginTop: 30,
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <TouchableOpacity
              style={styles.roundbutton}
              onPress={() => handleSubmit()}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "white", fontSize: 25 }}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  roundbutton: {
    maxWidth: 250,
    maxHeight: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#369398",
  },
  roundbutton1: {
    maxWidth: 250,
    maxHeight: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    borderRadius: 15,
    backgroundColor: "#369398",
  },
  roundbutton2: {
    maxWidth: 250,
    maxHeight: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
    borderRadius: 20,
    backgroundColor: "#369398",
  },
});
export default Complaint;
