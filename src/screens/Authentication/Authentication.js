import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import IIcon from 'react-native-vector-icons/Ionicons';

const c = require('../../assets/constants');

function Authentication(props) {
  const [emailPressed, setEmailPressed] = useState(false);
  const [loginFormHeight] = useState(new Animated.Value(0));

  const LoginForm = () => {
    //if (!emailPressed) return null;
    return (
      <Animated.View style={[styles.loginForm, {height: loginFormHeight}]}>
        <View style={[styles.formAngle, {position: 'absolute'}]}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0.2, y: 1}}
            colors={[c.colors.gradient.light, c.colors.gradient.dark]}
            style={{position: 'absolute', height: '100%', width: '100%'}}
          />
        </View>
        <View style={styles.formsContainer}>
          <Text
            style={{
              fontSize: 24,
              color: c.colors.text.light,
              alignSelf: 'center',
              fontFamily: 'Boiling',
            }}>
            JuggLearn
          </Text>
          <Text>Or sign up here</Text>
        </View>
      </Animated.View>
    );
  };

  const onPressEmail = () => {
    if (!emailPressed) {
      Animated.spring(loginFormHeight, {
        toValue: 300,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(loginFormHeight, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
    setEmailPressed(!emailPressed);
  };

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
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
          style={{height: 100, width: 100, position: 'absolute'}}
          resizeMethod="scale"
          resizeMode="cover"
        />
      </View>
      <View style={styles.section}>
        <Text
          style={{
            fontSize: 48,
            color: c.colors.text.light,
            alignSelf: 'center',
            fontFamily: 'Boiling',
          }}>
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
              onPress={() => onPressEmail()}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0.5, y: 0}}
                colors={[c.colors.balls.red, c.colors.balls.blue]}
                style={styles.gradButton}>
                <IIcon name="mail-outline" size={25} color="#FFF" />
              </LinearGradient>
            </TouchableOpacity>
            <Text style={styles.buttonText}>Email</Text>
          </View>
        </View>
      </View>
      <LoginForm />
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
  loginForm: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '95%',
    height: 0,
  },
  formAngle: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: '110%',
    width: '150%',
    opacity: 0.9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.95,
    shadowRadius: 2.22,
    elevation: 10,
    backgroundColor: '#F3f3f3',
    transform: [{rotate: '-10deg'}],
    overflow: 'hidden',
  },
  formsContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    marginVertical: 20,
    width: c.device.width,
  },
};

export default Authentication;
