import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import Redbox from "../PoolHolder/Redbox";

const Thankyou = ({ navigation, route }) => {
  const where = route.params.where;
  const token = route.params.token;
  const username = route.params.username;
  const data = route.params.data;
  return (
    <View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Redbox content="THANK YOU" />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 60,
              marginRight: 10,
              marginTop: 30,
            }}
          >
            Good Job !
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            top: 80,
          }}
        >
          <Text
            style={{
              fontSize: 26,
              color: "grey",
            }}
          >
            Your {where} was
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            top: 80,
          }}
        >
          <Text
            style={{
              fontSize: 26,
              color: "grey",
            }}
          >
            saved successfully !
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            maxHeight: 100,
            minHeight: 55,
            margin: 10,
            width: 280,
            backgroundColor: "#369398",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
            top: 150,
          }}
        >
          {
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Choice", {
                  username: username,
                  data: data,
                  token: token,
                })
              }
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                }}
              >
                GO Back TO MAIN PAGE
              </Text>
            </TouchableOpacity>
            /* <Button
          title="Submit"
          onPress={() => navigation.navigate("Feedback")}
        /> */
          }
        </View>
      </View>
    </View>
  );
};
export default Thankyou;
