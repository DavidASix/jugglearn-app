import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Image, Animated, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import IIcon from 'react-native-vector-icons/Ionicons';
import SlideUpModal from '../../components/SlideUpModal/';

const c = require('../../assets/constants');

function Authentication(props) {
  const [emailPressed, setEmailPressed] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [loginFormHeight] = useState(new Animated.Value(0));
  const slideUpRef = useRef(null);
  useEffect(() => {
    console.log('mounted');
    // handle video loading while screen refocuses
    const screenFocusListener = props.navigation.addListener('blur', () => {
      console.log('blurred');
      setVideoLoaded(false);
    });
    return () => {
      console.log('unmounted');
      screenFocusListener();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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

  const onPressGoogle = () => {
    console.log('Google');
  };

  const onPressApple = () => {
    console.log('Apple');
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

  const onPressNoSignIn = () => {
    slideUpRef.current.changeVisibility();
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
          onLoad={() => setVideoLoaded(true)}
          style={{position: 'absolute', width: '100%', height: '100%'}}
        />
        {!videoLoaded && (
          <Image
            source={require('../../assets/localVideo/homethumb.png')}
            style={{position: 'absolute', width: '100%', height: '100%'}}
            resizeMode="cover"
          />
        )}
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
              onPress={() => onPressApple()}>
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
              onPress={() => onPressGoogle()}>
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
        <Text style={{fontSize: 10}}>or</Text>
        <TouchableOpacity onPress={() => onPressNoSignIn(slideUpRef)}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>
            Continue Without Account
          </Text>
        </TouchableOpacity>
      </View>
      <LoginForm />
      <SlideUpModal
        ref={slideUpRef}
        style={{
          width: '80%',
          overflow: 'hidden',
          borderRadius: 15,
          borderColor: c.colors.gradient.light,
        }}
        peek={0}>
        <LinearGradient
          start={{x: 0.2, y: 0}}
          end={{x: 1, y: 1}}
          colors={[c.colors.gradient.light, c.colors.gradient.medium]}
          style={{position: 'absolute', height: '100%', width: '100%'}}
        />
        <Image
          source={require('../../assets/clubs.png')}
          style={{
            position: 'absolute',
            height: 120,
            width: 120,
            top: -40,
            left: -25,
          }}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            paddingVertical: 15,
            paddingHorizontal: 10,
          }}>
          <Text style={[styles.shadowText]}>Are you sure?</Text>
          <Text style={[styles.noAccountText, styles.shadowText]}>
            It's a better experience with an account!
          </Text>
          <Text style={[styles.noAccountText, styles.shadowText]}>
            Using an account allows you to track & save your progress, earn
            achievements, and do something else.
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                slideUpRef.current.changeVisibility();
                props.navigation.navigate('modalStack');
              }}
              style={styles.noAccountButton}>
              <Text style={{fontSize: 16, color: c.colors.text.light}}>
                Continue
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => slideUpRef.current.changeVisibility()}
              style={styles.noAccountButton}>
              <Text style={{fontSize: 16, color: c.colors.text.light}}>
                Go Back
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SlideUpModal>
    </View>
  );
}

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
  noAccountButton: {
    backgroundColor: c.colors.gradient.medium,
    borderColor: c.colors.gradient.dark,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 30,
    marginHorizontal: 10,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  noAccountText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  shadowText: {
    textShadowColor: '#000',
    textShadowRadius: 10,
    textShadowOffset: {width: 1, height: 1},
  },
};

export default Authentication;
