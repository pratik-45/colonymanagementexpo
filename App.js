import React, { useState, useEffect } from "react";

import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Loginpage from "./components/EndUser/Loginpage";
import Choice from "./components/EndUser/Choice";
import Feedback from "./components/EndUser/Feedback";
import Complaint from "./components/EndUser/Complaint";
import Allotment from "./components/EndUser/Allotment";
import NewAllotment from "./components/EndUser/NewAllotment";
import Vacant from "./components/EndUser/Vacant";
import ComplaintStatus from "./components/EndUser/CompaintStatus";
import PoolLanding from "./components/PoolHolder/PoolLanding";
import FCManagement from "./components/PoolHolder/FCManagement";
import Camera from "./components/EndUser/Camera";
import PoolScore from "./components/PoolHolder/PoolScore";
import PoolComplaint from "./components/PoolHolder/PoolComplaint";
import PoolFeedback from "./components/PoolHolder/PoolFeedback";
import PoolOccupancy from "./components/PoolHolder/PoolOccupancy";
import PoolRequest from "./components/PoolHolder/PoolRequest";
import EachColonyStats from "./components/PoolHolder/EachColonyStats";
import PoolSummary from "./components/PoolHolder/PoolSummary";
import EachColonyStatusFeedbackWise from "./components/PoolHolder/EachColonyStatusFeedbackWise";
import EachColonyStatusComplaintWise from "./components/PoolHolder/EachColonyStatusComplaintWise";
import FeedbackPlayCard from "./components/PoolHolder/FeedbackPlayCard";
import Landing from "./components/DivisionManager/Landing";
import DivisionDashboard from "./components/DivisionManager/DivisionDashboard";
import ServiceRatingDivision from "./components/DivisionManager/ServiceRatingDivision";
import ServiceRatingEachPool from "./components/DivisionManager/ServiceRatingEachPool";
import FeedbackDivision from "./components/DivisionManager/FeedbackDivision";
import FeedbackEachPool from "./components/DivisionManager/FeedbackEachPool";
import FeedbackEachColony from "./components/DivisionManager/FeedbackEachColony";
import ComplaintDivision from "./components/DivisionManager/ComplaintDivision";
import ComplaintEachPool from "./components/DivisionManager/ComplaintEachPool";
import OccupancyDivision from "./components/DivisionManager/OccupancyDivision";
import OccupancyEachPool from "./components/DivisionManager/OccupancyEachPool";
import ComplaintDetailedBox from "./components/PoolHolder/ComplaintDetailedBox";
import RequestDivision from "./components/DivisionManager/RequestDivision";
import RequestEachPool from "./components/DivisionManager/RequestEachPool";
import DivisionSummary from "./components/DivisionManager/DivisionSummary";
import Thankyou from "./components/EndUser/Thankyou";
import Changepass from "./components/Changepass";
import * as ScreenOrientation from "expo-screen-orientation";
const Stack = createNativeStackNavigator();

const App = () => {
  // const [orientationIsLandscape, setOrientation] = useState(true);
  // useEffect(() => {
  //   async function changeScreenOrientation() {
  //     if (orientationIsLandscape == true) {
  //       ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  //     }
  //   }
  //   const toggleOrientation = () => {
  //     setOrientation(!orientationIsLandscape);
  //     changeScreenOrientation();
  //   };
  //   toggleOrientation();
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loginpage"
          component={Loginpage}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Choice"
          component={Choice}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Feedback"
          component={Feedback}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Complaint"
          component={Complaint}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Allotment"
          component={Allotment}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="NewAllotment"
          component={NewAllotment}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Vacant"
          component={Vacant}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="ComplaintStatus"
          component={ComplaintStatus}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="PoolLanding"
          component={PoolLanding}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="FCManagement"
          component={FCManagement}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="PoolScore"
          component={PoolScore}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="PoolFeedback"
          component={PoolFeedback}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="PoolComplaint"
          component={PoolComplaint}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="PoolOccupancy"
          component={PoolOccupancy}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="PoolRequest"
          component={PoolRequest}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="EachColonyStats"
          component={EachColonyStats}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="PoolSummary"
          component={PoolSummary}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="ECSFW"
          component={EachColonyStatusFeedbackWise}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="ECSCW"
          component={EachColonyStatusComplaintWise}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="FeedbackPlayCard"
          component={FeedbackPlayCard}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="DivisionDashboard"
          component={DivisionDashboard}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="ServiceRatingDivision"
          component={ServiceRatingDivision}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="ServiceRatingEachPool"
          component={ServiceRatingEachPool}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="FeedbackDivision"
          component={FeedbackDivision}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="FeedbackEachPool"
          component={FeedbackEachPool}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="FeedbackEachColony"
          component={FeedbackEachColony}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="ComplaintDivision"
          component={ComplaintDivision}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="ComplaintEachPool"
          component={ComplaintEachPool}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="OccupancyDivision"
          component={OccupancyDivision}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="OccupancyEachPool"
          component={OccupancyEachPool}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="ComplaintDetailedBox"
          component={ComplaintDetailedBox}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="RequestDivision"
          component={RequestDivision}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="RequestEachPool"
          component={RequestEachPool}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="DivisionSummary"
          component={DivisionSummary}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },

            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Thankyou"
          component={Thankyou}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Changepass"
          component={Changepass}
          options={{
            headerStyle: {
              backgroundColor: "#56CDD3",
            },
            title: "",
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
