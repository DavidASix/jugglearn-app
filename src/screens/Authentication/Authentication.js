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
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.navigate('modalStack')}>
              <Image
                source={require('../../assets/icons/appleSignIn.jpg')}
                resizeMode="cover"
                style={{width: '100%', height: '100%'}}
              />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Apple</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.navigate('modalStack')}>
              <Image
                source={require('../../assets/icons/googleSignIn.jpg')}
                resizeMode="cover"
                style={{width: '100%', height: '100%'}}
              />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Google</Text>
          </View>
          <View>
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
            </TouchableOpacity>
            <Text style={styles.buttonText}>Email</Text>
          </View>
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
    marginVertical: 5,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 5,
    marginHorizontal: 10,
    width: 50,
    height: 50,
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
  },
  gradButton: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Authentication;
