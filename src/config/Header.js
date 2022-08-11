import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
//import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import * as actions from '../actions';

import c from '../assets/constants';

//Icons
import SVGIcon from '../assets/SVGIcon';

/** CUSTOM TAB HEADER **/

const Header = () => {
  const iconSize = 90;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.angledBg} />

      <View style={styles.headerContentRow}>
        <View style={{position: 'relative', height: '100%', width: iconSize}}>
          <Image
            source={require('../assets/icons/icon.png')}
            defaultSource={require('../assets/icons/icon.png')}
            style={{height: iconSize, width: iconSize, position: 'absolute'}}
            resizeMethod="scale"
            resizeMode="cover"
          />
        </View>
        <Text
          style={{
            fontSize: 38,
            alignSelf: 'center',
            marginTop: 20,
            fontFamily: 'Boiling',
            color: c.colors.text.dark,
          }}
        >
          Jugglearn
        </Text>
        <SVGIcon
          name="gear"
          size={35}
          color={c.colors.text.dark}
          style={{margin: 20}}
        />
      </View>
    </View>
  );
};

const styles = {
  headerContainer: {
    height: 70,
    backgroundColor: 'transparent',
    zIndex: 99,
    padding: 5,
    elevation: 10,
    //backgroundColor: 'red',
  },
  headerContentRow: {
    elevation: 10,
    width: '100%',
    height: 70, // Matches headerContainer
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  angledBg: {
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    bottom: -16,
    left: -20,
    height: '200%',
    width: '120%',
    backgroundColor: '#F3f3f3',
    opacity: 1,
    elevation: 10,
    transform: [{rotate: '-5deg'}],
  },
};

export default Header;
