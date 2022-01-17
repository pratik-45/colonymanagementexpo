import React from 'react';
import {Text, View} from 'react-native';

const Infobox = props => {
  return (
    <View>
      <View
        style={{
          backgroundColor: 'white',
          paddingBottom: 6,
          paddingTop: 2,
        }}>
        <View style={{flexDirection: 'row', margin: 4}}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
            }}>
            Name:{' '}
          </Text>
          <Text style={{color: 'black', fontSize: 18}}>{props.name}</Text>
        </View>
        <View style={{flexDirection: 'row', margin: 4}}>
          <Text style={{color: 'black', fontSize: 18}}>Department: </Text>
          <Text style={{color: 'black', fontSize: 18}}>{props.department}</Text>
        </View>
        <View style={{flexDirection: 'row', margin: 4}}>
          <Text style={{color: 'black', fontSize: 18}}>UserID: </Text>
          <Text style={{color: 'black', fontSize: 18}}>{props.userid}</Text>
        </View>
      </View>
    </View>
  );
};

export default Infobox;
