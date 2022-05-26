import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Footer from "./Footer";
import axios from "axios";
import Baseurl from "../Baseurl";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Loginpage = ({ navigation, route }) => {
  const [isloggedin, setIsLoggedIn] = useState(false);
  const [loginid, setloginid] = useState("");
  const [pass, setPass] = useState("");
  const [data, setData] = useState();
  const [sessiondata, setSessiondata] = useState();
  const [activity, setActivity] = useState(false);
  const [err, setErr] = useState(false);
  const [reload, setReload] = useState(false);
  var value = "";
  var value1 = "";

  const fetchtoken = async () => {
    try {
      console.log("hello");
      const res = await axios.post(Baseurl + "api/token/", {
        username: loginid,
        password: pass,
      });

      setData(res.data.access);
      setSessiondata(jwtDecode(res.data.access));

      // if (res.status === 401) {
      //   setErr(true);
      // }
    } catch (e) {
      console.log(e);
      try {
        e !== undefined && e.response.status === "401" && setErr(true);
      } catch (e) {
        // console.log(e);
      }
    }
    //
    // }if (e.response.status == "401") {
    // //   setErr(true);
    // // }

    const storeData = async (value, value1) => {
      try {
        await AsyncStorage.setItem("username", JSON.stringify(value));
      } catch (e) {
        // saving error
        console.log("error" + e);
      }
      try {
        await AsyncStorage.setItem("pass", JSON.stringify(value1));
      } catch (e) {
        // saving error
        console.log("error" + e);
      }
    };
    storeData(loginid, pass);
  };
  // console.log(sessiondata);
  useEffect(() => {
    if (data !== undefined) {
      setSessiondata(jwtDecode(data));
      setTimeout(() => {
        fetchtoken();
        navig();
      }, 500);
    }
    return () => {
      setloginid("");
      setPass("");
    };
  }, [data, reload]);

  // const changeSession = () => {
  //   const removeData = async () => {
  //     try {
  //       await AsyncStorage.removeItem("username");
  //     } catch (e) {
  //       // saving error
  //       console.log(e);
  //     }
  //     try {
  //       await AsyncStorage.removeItem("pass");
  //     } catch (e) {
  //       // saving error
  //       console.log(e);
  //     }
  //     setSessiondata();
  //     setIsLoggedIn(false);
  //   };
  //   console.log("deleated");

  //   removeData();
  // };

  const getData = async () => {
    try {
      value = await AsyncStorage.getItem("username");
      value1 = await AsyncStorage.getItem("pass");
      if (value !== null && value1 !== null) {
        // value previously stored
        setloginid(value.substring(1, value.length - 1));
        setPass(value1.substring(1, value1.length - 1));
        setIsLoggedIn(true);

        setTimeout(() => {
          fetchtoken(loginid, pass);
        }, 500);

        // console.log(value);
      } else {
        setReload(!reload);
        setloginid("");
        setPass("");
      }
    } catch (e) {
      // error reading value
      console.log(e);
      setlogin("");
      setPass("");
    }
  };
  setTimeout(() => {
    setActivity(true);
  }, 5000);
  // console.log(sessiondata);
  const navig = () => {
    if (sessiondata !== undefined) {
      if (sessiondata.position === "ManagerAdmin")
        navigation.navigate("Landing", {
          data: sessiondata,
          token: data,
          username: loginid,
          password: pass,
        });
      else if (sessiondata.position === "Resident")
        navigation.navigate("Choice", {
          data: sessiondata,
          token: data,
          username: loginid,
          password: pass,
        });
      else if (sessiondata.position === "PoolManager")
        navigation.navigate("PoolLanding", {
          data: sessiondata,
          token: data,
          username: loginid,
          password: pass,
        });
      else {
        console.log("Session data is undefined1");
        navigation.navigate("Landing", {
          data: sessiondata,
          token: data,
          username: loginid,
          password: pass,
        });
        // console.log(sessiondata);
        // console.log(data);
      }
    } else {
      console.log("Session data is undefined");
      console.log(isloggedin);
      setIsLoggedIn(!isloggedin);
      setReload(!reload);
    }
  };
  useEffect(() => {
    getData();
  }, [isloggedin]);

  const setlogin = () => {
    setIsLoggedIn(true);
  };

  // console.log(data);
  // console.log(sessiondata);
  return (
    <View style={{ flex: 1 }}>
      {!activity && (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#56CDD3" />
        </View>
      )}

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{
            width: 140,
            position: "relative",
            marginTop: 30,
            height: 90,
          }}
          source={require("../../assets/beatle_logo.png")}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
          marginBottom: 15,
        }}
      >
        <Text style={{ color: "grey", fontSize: 30 }}>Authorization Page</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#56CDD3",
          paddingTop: 60,
          height: "100%",
          flex: 1,
        }}
      >
        {/* <TextInput style={{backgroundColor: 'white'}}></TextInput> */}
        {err === true && (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 4,
            }}
          >
            <Text style={{ color: "red", fontSize: 14 }}>
              Please enter correct userId and password
            </Text>
          </View>
        )}
        <View style={styles.inpbox}>
          <SafeAreaView>
            <TextInput
              style={styles.inputfieldsid}
              value={loginid}
              placeholder="User ID"
              onChangeText={setloginid}
            />
          </SafeAreaView>
        </View>
        <View style={styles.inpbox}>
          <SafeAreaView>
            <TextInput
              secureTextEntry
              style={styles.inputfieldspassword}
              placeholder="Password"
              value={pass}
              onChangeText={setPass}
            />
          </SafeAreaView>
        </View>

        <View
          style={{
            marginTop: 30,
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            style={styles.roundbutton}
            onPress={() => {
              fetchtoken().then(
                setTimeout(() => {
                  setlogin;
                }, 1000)
              );
            }}
          >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: "white", fontSize: 25 }}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* <View
          style={{
            marginTop: 30,
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            style={styles.roundbutton}
            onPress={() => {
              changeSession();
            }}
          >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: "white", fontSize: 25 }}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View> */}
        <View style={{ justifyContent: "flex-end", flex: 1 }}>
          <Footer />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputfieldsid: {
    fontSize: 20,
    // height: 20,
    marginBottom: 2,
    paddingLeft: 20,
    alignSelf: "stretch",
  },
  inputfieldspassword: {
    fontSize: 20,
    alignSelf: "stretch",
    // height: 20,
    marginBottom: 2,
    paddingLeft: 20,
  },
  inpbox: {
    backgroundColor: "white",
    paddingTop: 10,
    marginBottom: 10,
    borderRadius: 30,
    height: 55,
    width: "85%",
    justifyContent: "center",
  },
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
export default Loginpage;
