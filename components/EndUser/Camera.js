import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Camera } from "expo-camera";
import { NavigationContainer } from "@react-navigation/native";

export default function App({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);
  // const Camera = useRef().current;
  const Modals = (props) => {
    return (
      <ScrollView>
        <KeyboardAvoidingView>
          <Modal
            animationType="slide"
            // transparent={true}
            visible={modalVisible}
            // onRequestClose={() => {
            //   // Alert.alert("Modal has been closed.");
            //   setModalVisible(!modalVisible);
            // }}
          >
            <View>
              <View
                style={{
                  paddingTop: 2,
                  backgroundColor: "#56CDD3",
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 80,
                  paddingBottom: 20,
                  margin: 5,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: 20,
                    paddingTop: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 22,
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Do You Want To Share This Picture?
                  </Text>
                </View>
                <KeyboardAvoidingView>
                  <View style={{ height: 350, width: 300 }}>
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 10,
                      }}
                      source={{ uri: capturedImage }}
                    />
                  </View>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView>
                  <View>
                    <TextInput
                      style={{
                        height: 80,
                        width: 260,
                        backgroundColor: "white",
                        margin: 20,
                        borderRadius: 15,
                        padding: 10,
                      }}
                      multiline={true}
                      placeholder="You can add remarks regarding the problem inside this box"
                      placeholderTextColor="#369398"
                    ></TextInput>
                  </View>
                </KeyboardAvoidingView>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      marginTop: 20,
                      alignItems: "center",
                      borderRadius: 10,
                    }}
                  >
                    <TouchableOpacity
                      style={styles.roundbutton}
                      onPress={() => {
                        setCapturedImage(null);
                        setModalVisible(false);
                        props.navigation.navigate("Complaint");
                      }}
                    >
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ color: "pink", fontSize: 25 }}>
                          Reject
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      marginTop: 20,
                      alignItems: "center",
                      borderRadius: 10,
                      marginLeft: 50,
                    }}
                  >
                    <TouchableOpacity
                      style={styles.roundbutton}
                      onPress={() => {}}
                    >
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ color: "white", fontSize: 25 }}>
                          Save
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, [modalVisible]);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const takePicture = async () => {
    if (!Camera) return;
    const options = { quality: 0.5 };
    const photo = await cameraRef.takePictureAsync(options);
    setCapturedImage(photo.uri);
    setModalVisible(true);
    // console.log(photo);
    setPreviewVisible(true);
  };
  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ratio="16:9"
        ref={(ref) => {
          setCameraRef(ref);
        }}
      >
        {modalVisible && <Modals navigation={navigation} />}
        <View style={styles.buttonContainer}>
          <View
            style={{
              marginTop: 20,
              alignItems: "center",
              borderRadius: 10,
              margin: 15,
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <Text style={styles.text}> Flip </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.roundbutton2}
                onPress={() => takePicture()}
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
      </Camera>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    height: 30,
    width: 50,
    backgroundColor: "#369398",
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginRight: 40,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  roundbutton2: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    borderRadius: 20,
    backgroundColor: "#369398",
    left: -10,
  },
  roundbutton: {
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#369398",
  },
});
