import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';

const c = require('../../assets/constants');

const Authentication = props => {
  const iconSize = 90;
  return (
    <View style={{flex: 1, width: '100%'}}>
      <View style={styles.videoContainer}>
        <Video
          source={require('../../assets/localVideo/home.mp4')}
          resizeMode="cover"
          useTextureView={true}
          repeat={true}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={styles.section}>
        <Image
          source={require('../../assets/icons/icon.png')}
          defaultSource={require('../../assets/icons/icon.png')}
          style={{height: iconSize, width: iconSize, position: 'absolute'}}
          resizeMethod="scale"
          resizeMode="cover"
        />
      </View>
      <View style={styles.section}>
        <Text
          style={{fontSize: 48, alignSelf: 'center', fontFamily: 'Boiling'}}>
          JuggLearn
        </Text>
      </View>

      <View style={styles.section}>
        <Text>Sign in with</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate('modalStack')}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0.5, y: 0}}
              colors={[c.colors.balls.red, c.colors.balls.blue]}
              style={styles.gradButton}>
              <Text style={{fontSize: 26}}>@</Text>
            </LinearGradient>
            <Text style={{ fontSize: 16}}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = {
  videoContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  section: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradButton: {
    height: 50,
    width: 50,
    borderRadius: 20,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Authentication;
