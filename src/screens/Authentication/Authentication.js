import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Image, Animated, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import IIcon from 'react-native-vector-icons/Ionicons';
import AIcon from 'react-native-vector-icons/AntDesign';
import SlideUpModal from '../../components/SlideUpModal/';
import StyledTextInput from '../../components/StyledTextInput/';

const c = require('../../assets/constants');

function Authentication(props) {
  const [emailPressed, setEmailPressed] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);
  const [loginFormHeight] = useState(new Animated.Value(0));
  const [loginFormRot] = useState(new Animated.Value(1));
  const rot = loginFormRot.interpolate({
    inputRange: [0, 1],
    outputRange: ['-10deg', '10deg'],
  });
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

  const onPressGoogle = () => {
    console.log('Google');
  };

  const onPressApple = () => {
    console.log('Apple');
  };

  const onPressEmail = () => {
    if (!emailPressed) {
      Animated.spring(loginFormHeight, {
        toValue: 325,
        useNativeDriver: false,
      }).start();
      Animated.spring(loginFormRot, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(loginFormHeight, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }).start();
      Animated.timing(loginFormRot, {
        toValue: 1,
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
    <View style={[c.styles.centerContent, c.styles.big]}>
      {/**
        Background Video
      **/}
      <View style={styles.videoContainer}>
        <Video
          source={require('../../assets/localVideo/home.mp4')}
          resizeMode="cover"
          useTextureView={true}
          repeat={true}
          onLoad={() => setVideoLoaded(true)}
          style={{position: 'absolute', width: '100%', height: '100%'}}
        />
        {!videoLoaded && ( //May alternatively fade this out when unrendered
          <Image
            source={require('../../assets/localVideo/homethumb.png')}
            style={{position: 'absolute', width: '100%', height: '100%'}}
            resizeMode="cover"
          />
        )}
      </View>
      {/**
        LogoSection
      **/}
      <View style={styles.section}>
        <Image
          source={require('../../assets/icons/icon.png')}
          defaultSource={require('../../assets/icons/icon.png')}
          style={{height: 100, width: 100, position: 'absolute'}}
          resizeMethod="scale"
          resizeMode="cover"
        />
      </View>
      {/**
        Title Section
      **/}
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
      {/**
        Sign in buttons
      **/}
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
      {/**
        Login with Email Details
      **/}
      <Animated.View style={[styles.loginForm, {height: loginFormHeight}]}>
        <Animated.View style={[styles.formAngle, {transform: [{rotate: rot}]}]}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0.2, y: 1}}
            colors={[c.colors.gradient.light, c.colors.gradient.dark]}
            style={{position: 'absolute', height: '100%', width: '100%'}}
          />
        </Animated.View>
        <View style={styles.formsContainer}>
          <Text
            style={{
              fontSize: 40,
              color: c.colors.text.light,
              fontFamily: 'Boiling',
            }}>
            JuggLearn
          </Text>
          <Text style={{fontSize: 20, marginLeft: 20}}>Sign in to juggle!</Text>
          <View style={[c.styles.centerContent, c.styles.big]}>
            <StyledTextInput
              placeholder="Username"
              type="username"
              value={username}
              onChange={text => setUsername(text)}
              icon="person-outline"
            />
            <StyledTextInput
              placeholder="Password"
              type="password"
              value={password}
              onChange={text => setPassword(text)}
              secure
              icon="lock-closed-outline"
            />
            <View style={styles.loginButton}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0.5, y: 0}}
                colors={[c.colors.balls.red, c.colors.balls.blue]}
                style={[{position: 'absolute', left: 0}, c.styles.big]}
              />
              <Text>Login</Text>
              <AIcon name="arrowright" size={25} color={c.colors.text.light} />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => console.log('nav to signup')}
            style={{alignSelf: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 12}}>or</Text>
            <Text style={{fontSize: 16}}>Or sign up here</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      {/**
        Are you sure you don't want an account modal
      **/}
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
    overflow: 'hidden',
  },
  formsContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
    paddingHorizontal: 10,
    marginVertical: 15,
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
  loginButton: {
    maxHeight: 45,
    height: '30%',
    width: '40%',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 10,
    borderRadius: 20,
    elevation: 5,
    overflow: 'hidden',
    flexDirection: 'row',
  },
};

export default Authentication;
