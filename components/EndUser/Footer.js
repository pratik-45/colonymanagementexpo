import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';

const Footer = () => {
  return (
    <View style={{}}>
      <View
        style={{
          height: 50,
          width: '100%',
          backgroundColor: '#56CDD3',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18, color: 'white'}}>
          Powered By : beatleanalytics.com
        </Text>
      </View>
    </View>
  );
};
export default Footer;
