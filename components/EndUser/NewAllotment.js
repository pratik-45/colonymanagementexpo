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

const NewAllotment = ({ navigation, route }) => {
  const data = route.params.data;
  const token = route.params.token;
  const username = route.params.username;
  const [sectionCat, setSectionCat] = useState([]);
  const [sectionCatId, setSectionCatId] = useState([]);
  const [colonyCat, setColonyCat] = useState([]);
  const [colonyCatId, setColonyCatId] = useState([]);
  const [typeCat, setTypeCat] = useState([]);
  const [typeCatId, setTypeCatId] = useState([]);
  const [quarTypeCat, setQuarTypeCat] = useState([]);
  const [quarTypeCatId, setQuarTypeCatId] = useState([]);
  const [datas, setdatas] = useState();
  const [reload, setReload] = useState(false);

  const [show, setshow] = useState(false);
  const [selected, setSelected] = useState(false);
  const [value, setvalue] = useState();
  const [valueId, setvalueId] = useState();

  const [show3, setshow3] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [value3, setValue3] = useState();
  const [value3Id, setValue3Id] = useState();

  const [show1, setshow1] = useState(false);
  const [selected1, setSelected1] = useState(false);
  const [value1, setValue1] = useState();
  const [value1Id, setValue1Id] = useState();

  const [show2, setshow2] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [value2, setvalue2] = useState();
  const [valueId2, setvalueId2] = useState();

  var section = [];
  var sectionId = [];
  var colony = [];
  var colonyId = [];
  var type = [];
  var typeId = [];
  var quarType = [];
  var quarTypeId = [];
  // console.log(token);
  const authAxios = axios.create({
    baseURL: Baseurl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  useEffect(() => {
    const fetchdata = async () => {
      const res = await authAxios.get(
        Baseurl + "api/division-summary/" + data.division_id
      );
      setdatas(res.data);
      setData();
      getColonyData();
    };
    fetchdata();
  }, []);

  const setData = () => {
    try {
      datas &&
        datas.map((item) => {
          section.push(item.name);
          sectionId.push(item.id);
          item.quarterTypes.map((item) => {
            quarType.push(item.title);
            quarTypeId.push(item.id);
          });
        });
      setSectionCat(section);
      setSectionCatId(sectionId);
      setQuarTypeCat(quarType);
      setQuarTypeCatId(quarTypeId);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(valueId);
  console.log(valueId2);

  console.log(value3Id);
  console.log(value1Id);
  // console.log(quarTypeCat);
  // console.log(colonyCat);
  // console.log(username);
  // console.log(data);

  const getColonyData = () => {
    datas &&
      datas.map((item) => {
        if (item.name === value) {
          item.colonyTypes.map((item) => {
            type.push(item.title);
            typeId.push(item.id);
          });
          item.colonies.map((item) => {
            colony.push(item.name);
            colonyId.push(item.id);
          });
          setTypeCat(type);
          setTypeCatId(typeId);
          setColonyCat(colony);
          setColonyCatId(colonyId);
        }
      });
  };

  const postdata = async () => {
    const response = await authAxios.post(Baseurl + "api/create-request/", {
      username: username,
      pool: valueId,
      ct: valueId2,
      qt: value3Id,
      colony: value1Id,
    });
    console.log(response.data);
    navigation.navigate("Choice", {
      data: data,
      token: token,
      username: username,
    });
  };

  const Dropdowndata = (props) => {
    return (
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setData();
            setshow(!show);
          }}
          style={{
            backgroundColor: "#369398",
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
            borderRadius: 8,
            height: 40,
          }}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 20, color: "white" }}>
              {props.heading}
            </Text>
            {selected && (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  left: 100,
                  bottom: 12,
                }}
              >
                <Image
                  style={{
                    position: "absolute",
                    width: 20,
                    height: 20,
                  }}
                  source={require("../../assets/basic-tick.png")}
                />
              </View>
            )}
          </View>
        </TouchableOpacity>
        {show &&
          props.data.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setshow(!show);
                  // console.log(item);
                  setSelected(true);
                  setvalue(item);
                  setvalueId(sectionCatId[index]);
                }}
                key={index}
                style={{
                  backgroundColor: "#56CDD3",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "90%",
                  borderRadius: 8,
                  padding: 8,
                  marginTop: 1,
                }}
              >
                <View>
                  <Text style={{ color: "white", fontSize: 18 }}>{item}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
      </View>
    );
  };
  const DropdownDataColony = (props) => {
    return (
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setshow1(!show1);
            getColonyData();
          }}
          style={{
            backgroundColor: "#369398",
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
            borderRadius: 8,
            height: 40,
          }}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 20, color: "white" }}>
              {props.heading}
            </Text>
            {selected1 && (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  left: 100,
                  bottom: 12,
                }}
              >
                <Image
                  style={{
                    position: "absolute",
                    width: 20,
                    height: 20,
                  }}
                  source={require("../../assets/basic-tick.png")}
                />
              </View>
            )}
          </View>
        </TouchableOpacity>
        {show1 &&
          props.data.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setshow1(!show1);
                  // console.log(item);
                  setSelected1(true);
                  setValue1(item);
                  setValue1Id(colonyCatId[index]);
                }}
                key={index}
                style={{
                  backgroundColor: "#56CDD3",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "90%",
                  borderRadius: 8,
                  padding: 8,
                  marginTop: 1,
                }}
              >
                <View>
                  <Text style={{ color: "white", fontSize: 18 }}>{item}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
      </View>
    );
  };
  const DropdownDataType = (props) => {
    return (
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setshow2(!show2);
            getColonyData();
          }}
          style={{
            backgroundColor: "#369398",
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
            borderRadius: 8,
            height: 40,
          }}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 20, color: "white" }}>
              {props.heading}
            </Text>
            {selected2 && (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  left: 100,
                  bottom: 12,
                }}
              >
                <Image
                  style={{
                    position: "absolute",
                    width: 20,
                    height: 20,
                  }}
                  source={require("../../assets/basic-tick.png")}
                />
              </View>
            )}
          </View>
        </TouchableOpacity>
        {show2 &&
          props.data.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setshow2(!show2);
                  // console.log(item);
                  setSelected2(true);
                  setvalue2(item);
                  setvalueId2(typeCatId[index]);
                }}
                key={index}
                style={{
                  backgroundColor: "#56CDD3",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "90%",
                  borderRadius: 8,
                  padding: 8,
                  marginTop: 1,
                }}
              >
                <View>
                  <Text style={{ color: "white", fontSize: 18 }}>{item}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
      </View>
    );
  };
  const DropdownDataQuarterType = (props) => {
    return (
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setshow3(!show3);
          }}
          style={{
            backgroundColor: "#369398",
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
            borderRadius: 8,
            height: 40,
          }}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 20, color: "white" }}>
              {props.heading}
            </Text>
            {selected3 && (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  left: 100,
                  bottom: 12,
                }}
              >
                <Image
                  style={{
                    position: "absolute",
                    width: 20,
                    height: 20,
                  }}
                  source={require("../../assets/basic-tick.png")}
                />
              </View>
            )}
          </View>
        </TouchableOpacity>
        {show3 &&
          props.data.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setshow3(!show);
                  // console.log(item);
                  setSelected3(true);
                  setValue3(item);
                  setValue3Id(quarTypeCatId[index]);
                }}
                key={index}
                style={{
                  backgroundColor: "#56CDD3",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "90%",
                  borderRadius: 8,
                  padding: 8,
                  marginTop: 1,
                }}
              >
                <View>
                  <Text style={{ color: "white", fontSize: 18 }}>{item}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
      </View>
    );
  };
  return (
    <View>
      <ScrollView>
        <Redbox content="New Allotment" />
        <View
          style={{
            backgroundColor: "#56CDD3",
            marginTop: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: "100%",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 22, color: "white" }}>
              I would like to apply for a new quarter
            </Text>
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>
              You can provide additional details
            </Text>
            <Text style={{ fontSize: 18, color: "white" }}>
              Regarding the Section, Colony and
            </Text>
            <Text style={{ fontSize: 18, color: "white" }}>
              Type of quarter in the section below
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#369398",
              }}
            >
              This is Optional information
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: "90%",
                borderRadius: 20,
                alignItems: "center",
                marginBottom: 20,
                paddingBottom: 20,
              }}
            >
              <Dropdowndata heading="Section" data={sectionCat} />
              <DropdownDataType
                heading="Type"
                data={typeCat}
              ></DropdownDataType>
              <DropdownDataColony
                heading="Colony"
                data={colonyCat}
              ></DropdownDataColony>
              <DropdownDataQuarterType
                heading="Quarter Type"
                data={quarTypeCat}
              ></DropdownDataQuarterType>
            </View>
          </View>
          <View
            style={{
              marginTop: 30,
              alignItems: "center",
              borderRadius: 10,
              paddingBottom: 20,
            }}
          >
            <TouchableOpacity
              style={styles.roundbutton}
              onPress={() => postdata()}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "white", fontSize: 25 }}>Apply</Text>
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
    width: 120,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#369398",
  },
});

export default NewAllotment;
