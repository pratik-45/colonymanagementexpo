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

const Complaint = ({navigation}) => {
  const [showcat, setShowCat] = useState(false);

  const [cat, setCat] = useState([
    'Wall is cracked',
    'Windows are broken',
    'Sealing is broken',
  ]);
  const [subcat, setSubCat] = useState([
    'Wall is cracked',
    'Windows are broken',
    'Sealing is broken',
  ]);
  const [showsubcat, setShowSubCat] = useState(false);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Redbox content="Complaint" />
        {/* category */}
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            onPress={() => {
              setShowCat(!showcat);
            }}>
            <View
              style={{
                height: 35,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#369398',
                borderRadius: 5,
              }}>
              <Text style={{fontSize: 20, color: 'white'}}>
                Category Of Complaint
              </Text>
            </View>
          </TouchableOpacity>
          {showcat && (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#56CDD3',
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  width: '99%',
                }}>
                {cat &&
                  cat.map(item => {
                    return (
                      <View>
                        <TouchableOpacity>
                          <View
                            style={{
                              height: 40,
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 400,
                            }}>
                            <Text
                              style={{
                                fontSize: 20,
                                color: 'white',
                              }}>
                              {item}
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <View
                          style={{backgroundColor: 'white', height: 2}}></View>
                      </View>
                    );
                  })}
              </View>
            </View>
          )}
          <View></View>
        </View>
        {/* subcategory */}
        <View style={{marginTop: 10}}>
          <TouchableOpacity
            onPress={() => {
              setShowSubCat(!showsubcat);
            }}>
            <View
              style={{
                height: 35,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#369398',
                borderRadius: 5,
              }}>
              <Text style={{fontSize: 20, color: 'white'}}>
                SubCategory Of Complaint
              </Text>
            </View>
          </TouchableOpacity>
          {showsubcat && (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#56CDD3',
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  width: '99%',
                }}>
                {subcat &&
                  subcat.map(item => {
                    return (
                      <View>
                        <TouchableOpacity>
                          <View
                            style={{
                              height: 40,
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 400,
                            }}>
                            <Text
                              style={{
                                fontSize: 20,
                                color: 'white',
                              }}>
                              {item}
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <View
                          style={{backgroundColor: 'white', height: 2}}></View>
                      </View>
                    );
                  })}
              </View>
            </View>
          )}
          <View></View>
        </View>
        {/* remark */}
        <View
          style={{
            height: 320,
            marginTop: 20,
            backgroundColor: '#56CDD3',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <Text style={{fontSize: 25, color: '#369398'}}>Remark</Text>
          <Text style={{fontSize: 20, color: 'white', marginTop: 10}}>
            Add a short description of the problem!
          </Text>
          <View
            style={{
              height: '55%',
              backgroundColor: 'white',
              width: '92%',
              marginTop: 10,
              borderRadius: 10,
            }}>
            <TextInput
              style={{margin: 10, fontSize: 20}}
              multiline={true}></TextInput>
          </View>
        </View>
        <View
          style={{
            // flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
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
          <View
            style={{
              marginTop: 16,
              margin: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{fontSize: 16, color: '#369398', fontWeight: 'bold'}}>
                NOTE -{' '}
              </Text>
              <Text style={{fontSize: 16, color: '#369398'}}>
                If You Want To View Previous Complaints
              </Text>
            </View>
            <Text style={{fontSize: 16, color: '#369398'}}>
              Or Want To Know The Status Of
            </Text>
            <Text style={{fontSize: 16, color: '#369398'}}>
              Complaint Press The Button Below
            </Text>
          </View>
          <View
            style={{
              marginTop: 30,
              alignItems: 'center',
              borderRadius: 10,
              marginLeft: 20,
              marginBottom: 30,
            }}>
            <TouchableOpacity
              style={styles.roundbutton}
              onPress={() => navigation.navigate('ComplaintStatus')}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'white', fontSize: 25}}>
                  Complaint Status
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  roundbutton: {
    maxWidth: 250,
    maxHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#369398',
  },
});
export default Complaint;
