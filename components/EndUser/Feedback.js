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

const Feedback = ({ navigation, route }) => {
  const [data, setdata] = useState();
  const [checkdata, setCheckdata] = useState(false);
  var values = [];
  var params = [];
  const token = route.params.token;
  const username = route.params.username;
  const authAxios = axios.create({
    baseURL: Baseurl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const postdata = async () => {
    try {
      const response = await authAxios.post("api/create-feedback/", {
        user: username,
        param: params,
        value: values,
      });
      console.log(response.data);
      setCheckdata(true);
      // console.log(data);
    } catch (e) {
      console.log(e);
    }
    navigates();
    console.log(values);
    console.log(params);
  };

  const navigates = () => {
    navigation.navigate("Thankyou", { where: "Feedback" });
  };
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await authAxios.get("api/feedback-parameters/");
        setdata(response.data);
        setCheckdata(true);
        // console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchdata();
  }, [checkdata]);

  console.log(data);

  const Feedbackdata = (props) => {
    const [show, setShow] = useState(false);
    const [level, setLevel] = useState("");
    const [selected, setSelected] = useState(false);

    // console.log(level);
    return (
      <View style={{ margin: 2 }}>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: "#369398",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            flexDirection: "row",
          }}
          onPress={() => {
            setShow(!show);
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              width: "75%",
              right: 10,
            }}
          >
            {props.data}
          </Text>
          {selected && (
            <Image
              style={{
                width: 20,
                height: 20,
                marginLeft: 20,
              }}
              source={require("../../assets/basic-tick.png")}
            />
          )}
        </TouchableOpacity>
        {show && (
          <View>
            <TouchableOpacity
              onPress={() => {
                setLevel("5");
                setShow(!show);
                setSelected(true);
                values[props.pos] = "5";
                params[props.pos] = props.id;
              }}
            >
              <View
                style={{
                  height: 30,
                  backgroundColor: "#56CDD3",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  height: 40,
                  flexDirection: "row",
                }}
              >
                <Text style={{ color: "white", fontSize: 18 }}>Excellent</Text>
                <Image
                  style={{
                    position: "absolute",
                    width: 25,
                    height: 25,
                    left: 320,
                  }}
                  source={require("../../assets/happy.png")}
                />
              </View>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: "white" }}></View>
            <TouchableOpacity
              onPress={() => {
                setLevel("4");
                setShow(!show);
                setSelected(true);
                values[props.pos] = "4";
                params[props.pos] = props.id;
              }}
            >
              <View
                style={{
                  height: 30,
                  backgroundColor: "#56CDD3",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  height: 40,
                  flexDirection: "row",
                }}
              >
                <Text style={{ color: "white", fontSize: 18 }}>Very Good</Text>
                <Image
                  style={{
                    position: "absolute",
                    width: 25,
                    height: 25,
                    left: 320,
                  }}
                  source={require("../../assets/happiness.png")}
                />
              </View>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: "white" }}></View>
            <TouchableOpacity
              onPress={() => {
                setLevel("3");
                setShow(!show);
                setSelected(true);
                values[props.pos] = "3";
                params[props.pos] = props.id;
              }}
            >
              <View
                style={{
                  height: 30,
                  backgroundColor: "#56CDD3",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  height: 40,
                  flexDirection: "row",
                }}
              >
                <Text style={{ color: "white", fontSize: 18 }}>Good</Text>
                <Image
                  style={{
                    position: "absolute",
                    width: 25,
                    height: 25,
                    left: 320,
                  }}
                  source={require("../../assets/happiness.png")}
                />
              </View>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: "white" }}></View>
            <TouchableOpacity
              onPress={() => {
                setLevel("2");
                setShow(!show);
                setSelected(true);
                values[props.pos] = "2";
                params[props.pos] = props.id;
              }}
            >
              <View
                style={{
                  height: 30,
                  backgroundColor: "#56CDD3",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  height: 40,
                  flexDirection: "row",
                }}
              >
                <Text style={{ color: "white", fontSize: 18 }}>Average</Text>
                <Image
                  style={{
                    position: "absolute",
                    width: 25,
                    height: 25,
                    left: 320,
                  }}
                  source={require("../../assets/neutral.png")}
                />
              </View>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: "white" }}></View>
            <TouchableOpacity
              onPress={() => {
                setLevel("1");
                setShow(!show);
                setSelected(true);
                values[props.pos] = "1";
                params[props.pos] = props.id;
              }}
            >
              <View
                style={{
                  height: 30,
                  backgroundColor: "#56CDD3",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  height: 40,
                  flexDirection: "row",
                }}
              >
                <Text style={{ color: "white", fontSize: 18 }}>Poor</Text>
                <Image
                  style={{
                    position: "absolute",
                    width: 25,
                    height: 25,
                    left: 320,
                  }}
                  source={require("../../assets/emoticon.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };
  return (
    <ScrollView style={{}}>
      <View style={{}}>
        <Redbox content="Feedback" />
        <View style={{ marginTop: 10 }}></View>

        {data &&
          data.map((item, index) => {
            return (
              <>
                <Feedbackdata
                  pos={index}
                  key={item.id}
                  data={item.title}
                  id={item.id}
                ></Feedbackdata>
              </>
            );
          })}
      </View>
      <View
        style={{
          marginTop: 30,
          alignItems: "center",
          borderRadius: 10,
          marginBottom: 30,
        }}
      >
        <TouchableOpacity
          style={styles.roundbutton}
          onPress={() => {
            postdata();
          }}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "white", fontSize: 25 }}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
export default Feedback;
