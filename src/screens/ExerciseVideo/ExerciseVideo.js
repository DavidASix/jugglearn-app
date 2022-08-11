import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
  TouchableWithoutFeedback
} from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
//Icons
import SVGIcon from '../../assets/SVGIcon';

const c = require('../../assets/constants');

class ExerciseVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: true
    };

    this.opAnim = new Animated.Value(1);
    this.checkboxAnimation = new Animated.Value(0)
    this.checkboxOpacity = new Animated.Value(0);
    this.confetti = new Animated.Value(0);
    this.congratulations = new Animated.Value(0);
    this.description = new Animated.Value(0);
    this.eyeIcon = new Animated.Value(0);
    this.scrollPosition = new Animated.ValueXY()
  }

  renderVideo() {
    const { exercise, course } = this.props.route.params;
    let { showDescription } = this.state;
    let checkboxValue = false;
    if (!exercise) return this.props.navigation.goBack();
    return (
      <View style={{ height: c.device.height - 70, width: '100%' }}>
        <Video source={{uri: exercise.videoLink }}
           ref={(ref) => { this.player = ref }}
           onLoad={(e) => {
             Animated.timing(this.opAnim, { toValue: 0, duration: 600, useNativeDriver: true }).start();
             Animated.timing(this.checkboxOpacity, { toValue: 1, duration: 600, useNativeDriver: true }).start();
             Animated.timing(this.description, { toValue: 1, duration: 500, useNativeDriver: true }).start()
             Animated.timing(this.eyeIcon, { toValue: 1, duration: 500, useNativeDriver: true }).start();
           }}
           onBuffer={(e) => console.log('Buffering: ', e)}
           onError={(e) => console.log('Could not load vid: ', e)}
           resizeMode="cover"
           useTextureView={true}
           repeat={true}
           style={{
            width: '100%',
            height: '100%',}} />

        <Animated.View style={{ width: '100%', height: '100%', position: 'absolute', opacity: this.opAnim }}>
          <LinearGradient colors={[c.colors.balls.blue, c.colors.balls.red]} style={styles.gradientBgStyle}>

            <View style={{ height: 100, width: 100, position: 'absolute' }}>
              <LottieView
                source={require('../../assets/lottie/Cascade.json')}
                autoPlay
                loop />
            </View>
          </LinearGradient>
        </Animated.View>



        <Animated.View style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          backgroundColor: '#FFFFFF70',
          padding: 10,
          opacity: this.congratulations
        }}>
          <Text style={{ fontSize: 38, alignSelf: 'center',fontFamily: "Boiling", color: c.colors.text.dark }}>
            Congratulations!
          </Text>
          <Text style={{ fontSize: 20, alignSelf: 'center',  textAlign: 'center', marginTop: 20, color: c.colors.text.dark }}>
            Awesome job with {exercise.title}! Swipe down and move on to the next activity!
          </Text>
        </Animated.View>


        <LottieView
          style={{ height: '100%', position: 'absolute' }}
          source={require('../../assets/lottie/confettiTop.json')}
          loop={false}
          progress={this.confetti} />


        <Animated.View style={{
          height: 60,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          top: 0,
          paddingHorizontal: 10,
          backgroundColor: '#FFFFFF40',
          opacity: this.checkboxOpacity }}>

          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}>
            <SVGIcon name='chevronDown' size={50} color='#FFF' />
          </TouchableOpacity>


          <View style={{ height: 50, width: 50 }}>
            <TouchableWithoutFeedback
              onPress={() => {
                //console.log(checkboxAnimation._value);
                checkboxValue = !checkboxValue
                Animated.timing(this.checkboxAnimation, { toValue: checkboxValue * 1, duration: 1000, useNativeDriver: true }).start();
                if (checkboxValue) {
                  setTimeout(() => {
                    Animated.timing(this.confetti, { toValue: 1, duration: 6000, useNativeDriver: true }).start()
                    Animated.timing(this.congratulations, { toValue: 1, duration: 1000, useNativeDriver: true }).start()
                    Animated.timing(this.description, { toValue: 0, duration: 500, useNativeDriver: true }).start()
                  }, 500);
                } else {
                  Animated.timing(this.congratulations, { toValue: 0, duration: 500, useNativeDriver: true }).start()
                  Animated.timing(this.description, { toValue: 1, duration: 500, useNativeDriver: true }).start()
                  this.confetti.setValue(0);
                }
              }}>
              <LottieView
                source={require('../../assets/lottie/checkbox2.json')}
                loop={false}
                progress={this.checkboxAnimation} />
            </TouchableWithoutFeedback>
          </View>
        </Animated.View>

        <Animated.View style={{
          minHeight: 100,
          width: '100%',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'transparent',
          opacity: this.description }}>

          <Animated.View style={styles.angledBg} />

          <Text style={{ fontSize: 30, marginHorizontal: 10, fontFamily: "Boiling", color: c.colors.text.dark }}>
            {exercise.title}
          </Text>

          <ScrollView
            horizontal
            pagingEnabled
            alwaysBounceHorizontal={false}
            showsHorizontalScrollIndicator={false}
            onScroll={(evt) => Animated.spring(this.scrollPosition, { toValue: { x: evt.nativeEvent.contentOffset.x / 5 / 3, y: 0 }, useNativeDriver: false }).start()}>

            <View style={{ width: c.device.width - 35, marginHorizontal: 10 }}>
              <Text style={{ fontSize: 16, textAlign: 'left', color: c.colors.text.dark, fontWeight: 'bold' }}>
                Description
              </Text>
              <Text style={{ fontSize: 13, textAlign: 'left', color: c.colors.text.dark }}>
                {exercise.description}
              </Text>
            </View>

            <View style={{ width: c.device.width - 35, marginHorizontal: 10 }}>
              <Text style={{ fontSize: 16, textAlign: 'left', color: c.colors.text.dark, fontWeight: 'bold' }}>
                Goal
              </Text>
              <Text style={{ fontSize: 13, textAlign: 'left', color: c.colors.text.dark }}>
                {exercise.goal}
              </Text>
            </View>

            <View style={{ width: c.device.width - 35, marginHorizontal: 10 }}>
              <Text style={{ fontSize: 16, textAlign: 'left', color: c.colors.text.dark, fontWeight: 'bold' }}>
                Tips
              </Text>
              <Text style={{ fontSize: 13, textAlign: 'left', color: c.colors.text.dark }}>
                {exercise.tips}
              </Text>
            </View>

          </ScrollView>

          <View style={{ width: '20%', height: 20, marginVertical: 10, alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

          <View style={{
            height: 13,
            width: 13,
            borderRadius: 10,
            backgroundColor: c.colors.balls.red }} />
          <View style={{
            height: 13,
            width: 13,
            borderRadius: 10,
            backgroundColor: c.colors.balls.blue }} />
            <View style={{
              height: 13,
              width: 13,
              borderRadius: 10,
              backgroundColor: c.colors.balls.yellow }} />
          <Animated.View
            style={{
              position: 'absolute',
              left: 0,
              justifyContent: 'center',
              alignItems: 'center',
              width: 1/3*100 + '%',
              height: 20,
              transform: this.scrollPosition.getTranslateTransform() }}>
            <View style={{
              borderWidth: 2,
              height: 20,
              width: 20,
              borderRadius: 10,
              borderColor: c.colors.accent,}} />
            </Animated.View>
          </View>
        </Animated.View>


        <TouchableOpacity
          style={{ position: 'absolute', right: 10, bottom: 10 }}
          onPress={() => {
            Animated.timing(this.description, { toValue: !showDescription ? 1 : 0.2, duration: 500, useNativeDriver: true }).start();
            this.setState({ showDescription: !showDescription });
            }}>
            <Animated.View style={{ opacity: this.eyeIcon, width: 30, height: 30, backgroundColor: '#FFFFFF90', borderRadius: 50 }}>
              <SVGIcon name={showDescription ? 'eye' : 'eyeOff'} color={c.colors.text.dark} size={30} />
            </Animated.View>
          </TouchableOpacity>

      </View>
    );
  }

  render() {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modal}>

        {this.renderVideo()}

      </View>
    </View>
  );
}
}

const styles = {
  modalContainer: {
    height: '100%',
    width: '100%',
    elevation: 0,
    paddingHorizontal: 7.5,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  modal: {
    height: c.device.height - 70,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: c.colors.text.medium,
    backgroundColor: c.colors.text.dark,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gradientBgStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollviewContainer: {
    flex: 1,
    width: '100%',
    zIndex: 5,
  },
  scrollviewContentContainer: {
    paddingHorizontal: 5,
    paddingTop: 10,
    paddingBottom: 10
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: '85%',
  },
  listDetailContainer: {
    borderWidth: 0,
  },
  descriptionContainer: {
    width: '100%',
    backgroundColor: '#FFF',
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
    marginTop: 10,
    elevation: 1
  },
  gradientDetailsContainer: {
    width: '99%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
    marginTop: -15,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    overflow: 'hidden'
  },
  categoryScrollView: {
    flex: 1,
    width: '100%',
    borderRadius: 20,
    paddingTop: 5
  },
  categoryButton: {
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconCircle: {
    height: 50,
    width: 50,
    borderRadius: 40,
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
    alignItems: 'center',
  },

  angledBg: {
    position: 'absolute',
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    left: -20,
    top: -10,
    height: '150%', width: '120%',
    backgroundColor: '#F3f3f3',
    opacity: 0.90,
    transform: [{ rotate: '5deg' }]
  },
};

export default ExerciseVideo;
