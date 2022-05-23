import Redbox from "./PoolHolder/Redbox";
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
import axios from "axios";
import Baseurl from "./Baseurl";

const Changepass = ({ navigation, route }) => {
  const [newpass, setNewPass] = useState();
  const [confirmpass, setConfirmPass] = useState();
  const [err, setErr] = useState(false);
  const data = route.params.data;
  const token = route.params.token;
  console.log(data);

  const authAxios = axios.create({
    baseURL: Baseurl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const Changepass = async () => {
    if (
      newpass === confirmpass &&
      newpass !== undefined &&
      confirmpass !== undefined
    ) {
      try {
        const res = authAxios.post(Baseurl + "api/change-password/", {
          username: data.username,
          new_password: newpass,
        });
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    } else {
      alert(
        "New password and confirm password must be same and must not be empty."
      );
    }
  };

  return (
    <View>
      <Redbox content={"Change Password"} />
      <View
        style={{ alignItems: "center", justifyContent: "center", margin: 10 }}
      >
        <Text style={{ color: "#56CDD3", fontSize: 20 }}>
          Please enter the new password in the first box and confirm the
          password in the second box{" "}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#56CDD3",
          borderRadius: 20,
          height: 300,
          alignItems: "center",
          justifyContent: "center",
          margin: 20,
        }}
      >
        <View style={styles.inpbox}>
          <SafeAreaView>
            <TextInput
              style={styles.inputfieldsid}
              value={newpass}
              placeholder="New Password"
              onChangeText={setNewPass}
            />
          </SafeAreaView>
        </View>
        <View style={styles.inpbox}>
          <SafeAreaView>
            <TextInput
              style={styles.inputfieldsid}
              value={confirmpass}
              placeholder="Confirm Password"
              onChangeText={setConfirmPass}
            />
          </SafeAreaView>
        </View>
        <View
          style={{
            marginTop: 20,
            alignItems: "center",
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <TouchableOpacity
            style={styles.roundbutton}
            onPress={() => {
              Changepass();
            }}
          >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: "white", fontSize: 16 }}>Confirm</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inpbox: {
    backgroundColor: "white",
    paddingTop: 10,
    marginBottom: 10,
    borderRadius: 30,
    height: 55,
    width: "85%",
    justifyContent: "center",
    marginTop: 20,
  },
  inputfieldsid: {
    fontSize: 20,
    // height: 20,
    marginBottom: 2,
    paddingLeft: 20,
    alignSelf: "stretch",
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
export default Changepass;
