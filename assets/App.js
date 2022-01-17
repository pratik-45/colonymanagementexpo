import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loginpage from './components/Loginpage';
import Choice from './components/Choice';
import Feedback from './components/Feedback';
import Complaint from './components/Complaint';
import Allotment from './components/Allotment';
import NewAllotment from './components/NewAllotment';
import Vacant from './components/Vacant';
import ComplaintStatus from './components/CompaintStatus';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loginpage"
          component={Loginpage}
          options={{
            headerStyle: {
              backgroundColor: '#56CDD3',
            },
            title: '',
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Choice"
          component={Choice}
          options={{
            headerStyle: {
              backgroundColor: '#56CDD3',
            },
            title: '',
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Feedback"
          component={Feedback}
          options={{
            headerStyle: {
              backgroundColor: '#56CDD3',
            },
            title: '',
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Complaint"
          component={Complaint}
          options={{
            headerStyle: {
              backgroundColor: '#56CDD3',
            },
            title: '',
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Allotment"
          component={Allotment}
          options={{
            headerStyle: {
              backgroundColor: '#56CDD3',
            },
            title: '',
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="NewAllotment"
          component={NewAllotment}
          options={{
            headerStyle: {
              backgroundColor: '#56CDD3',
            },
            title: '',
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Vacant"
          component={Vacant}
          options={{
            headerStyle: {
              backgroundColor: '#56CDD3',
            },
            title: '',
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="ComplaintStatus"
          component={ComplaintStatus}
          options={{
            headerStyle: {
              backgroundColor: '#56CDD3',
            },
            title: '',
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
