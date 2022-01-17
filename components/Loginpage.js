import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Footer from './Footer';

const Loginpage = ({navigation}) => {
  const [loginid, setloginid] = useState('');
  const [pass, setPass] = useState('');
  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{
            width: 140,
            position: 'relative',
            marginTop: 30,
            height: 90,
          }}
          source={require('../assets/beatle_logo.png')}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
          marginBottom: 15,
        }}>
        <Text style={{color: 'grey', fontSize: 30}}>Authorization Page</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#56CDD3',
          paddingTop: 60,
          height: '100%',
          flex: 1,
        }}>
        {/* <TextInput style={{backgroundColor: 'white'}}></TextInput> */}
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
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <TouchableOpacity
            style={styles.roundbutton}
            onPress={() => navigation.navigate('Choice')}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: 'white', fontSize: 25}}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'flex-end', flex: 1}}>
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
    alignSelf: 'stretch',
  },
  inputfieldspassword: {
    fontSize: 20,
    alignSelf: 'stretch',
    // height: 20,
    marginBottom: 2,
    paddingLeft: 20,
  },
  inpbox: {
    backgroundColor: 'white',
    paddingTop: 10,
    marginBottom: 10,
    borderRadius: 30,
    height: 55,
    width: '85%',
    justifyContent: 'center',
  },
  roundbutton: {
    width: 120,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#369398',
  },
});
export default Loginpage;
