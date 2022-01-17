import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Footer from './Footer';
import Redbox from './Redbox';

const Feedback = ({navigation}) => {
  const Feedbackdata = props => {
    const [show, setShow] = useState(false);
    const [level, setLevel] = useState('');
    console.log(level);
    return (
      <View style={{margin: 2}}>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: '#369398',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
          }}
          onPress={() => {
            setShow(!show);
          }}>
          <Text style={{fontSize: 20, color: 'white'}}>{props.data}</Text>
        </TouchableOpacity>
        {show && (
          <View>
            <TouchableOpacity
              onPress={() => {
                setLevel('Excellent');
                setShow(!show);
              }}>
              <View
                style={{
                  height: 30,
                  backgroundColor: '#56CDD3',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 8,
                  height: 40,
                  flexDirection: 'row',
                }}>
                <Text style={{color: 'white', fontSize: 18}}>Excellent</Text>
                <Image
                  style={{
                    position: 'absolute',
                    width: 25,
                    height: 25,
                    left: 350,
                  }}
                  source={require('../assets/happy.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={{height: 1, backgroundColor: 'white'}}></View>
            <TouchableOpacity
              onPress={() => {
                setLevel('Good');
                setShow(!show);
              }}>
              <View
                style={{
                  height: 30,
                  backgroundColor: '#56CDD3',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 8,
                  height: 40,
                  flexDirection: 'row',
                }}>
                <Text style={{color: 'white', fontSize: 18}}>Good</Text>
                <Image
                  style={{
                    position: 'absolute',
                    width: 25,
                    height: 25,
                    left: 350,
                  }}
                  source={require('../assets/happiness.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={{height: 1, backgroundColor: 'white'}}></View>
            <TouchableOpacity
              onPress={() => {
                setLevel('Average');
                setShow(!show);
              }}>
              <View
                style={{
                  height: 30,
                  backgroundColor: '#56CDD3',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 8,
                  height: 40,
                  flexDirection: 'row',
                }}>
                <Text style={{color: 'white', fontSize: 18}}>Average</Text>
                <Image
                  style={{
                    position: 'absolute',
                    width: 25,
                    height: 25,
                    left: 350,
                  }}
                  source={require('../assets/neutral.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={{height: 1, backgroundColor: 'white'}}></View>
            <TouchableOpacity
              onPress={() => {
                setLevel('Poor');
                setShow(!show);
              }}>
              <View
                style={{
                  height: 30,
                  backgroundColor: '#56CDD3',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 8,
                  height: 40,
                  flexDirection: 'row',
                }}>
                <Text style={{color: 'white', fontSize: 18}}>Poor</Text>
                <Image
                  style={{
                    position: 'absolute',
                    width: 25,
                    height: 25,
                    left: 350,
                  }}
                  source={require('../assets/emoticon.png')}
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
        <View style={{marginTop: 10}}></View>
        <Feedbackdata data="Condition of windows of the flat" />
        <Feedbackdata data="Condition of walls of the flat" />
        <Feedbackdata data="Condition of drainage of the flat" />
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
            <Text style={{color: 'white', fontSize: 25}}>Submit</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#369398',
  },
});
export default Feedback;
