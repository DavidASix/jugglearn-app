import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//Icons
import SVGIcon from '../../assets/SVGIcon';

const c = require('../../assets/constants');

const tbs = {
  position: 'absolute',
  padding: 0,
  paddingHorizontal: 5,
  bottom: 10,
  left: (c.device.width / 2) - (c.device.width  * 0.7 / 2),
  width: (c.device.width  * 0.7),
  height: 55,
  borderRadius: 15,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  elevation: 10,
  backgroundColor: '#ededed',
};

class SingleCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0.5,
      fadeAnim: new Animated.Value(1)
    };
    this.offset = 0;
  }

  componentDidMount() {
    //this.props.navigation.setOptions({ tabBarStyle: {...tbs, opacity: this.state.fadeAnim } });
  }

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 5000
    }).start();
  };

  fadeOut = () => {
    this.props.navigation.setParams({ showTab: !this.props.route.params?.showTab });
    //console.log(this.props.navigation);
    //console.log(!this.props.route.params?.showTab);
    return;
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 3000
    }).start();
  };

  onScroll = (event) => {
    const { navigation } = this.props;
    const currentOffset = event.nativeEvent.contentOffset.y;
    const dif = currentOffset - (this.offset || 0);

    if (currentOffset > 20 && dif > 0) {
        this.props.navigation.setParams({ hideBar: true });
    } else if (dif < 0) {
        this.props.navigation.setParams({ hideBar: false });
    }

    this.offset = currentOffset;
  }



  render() {
  const iconSize = 90;
  return (
    <View style={styles.modalContainer}>
    <LinearGradient colors={[c.colors.gradient.light, c.colors.gradient.dark]} style={styles.modal}>

    <ScrollView
      onScroll={(e) => this.onScroll(e)}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollviewContentContainer}
      style={styles.scrollviewContainer}>

      <View style={styles.listHeader}>
        <Text style={{ fontSize: 32  }}>
          SingleCourse!
        </Text>
          <SVGIcon name='courses' color={'#FFF'} size={50} />
      </View>

      <View style={styles.listDetailContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={{ fontSize: 12, color: c.colors.text.dark }}>
            This page contains all of the exercises and courses offered in this app.
          </Text>
          <Text style={{ fontSize: 12, color: c.colors.text.dark, marginVertical: 5 }}>
            Feel free to browse and complete these courses at your leisure.
          </Text>
          <Text style={{ fontSize: 12, color: c.colors.text.dark }}>
            If you see a trick you're interested in but feel it is too advanced, select the trick to see which prerequisites will help you get there.
          </Text>
        </View>
      </View>

      <LinearGradient
        start={{x: 0, y: 0}} end={{x: 0.5, y: 0}}
        colors={[c.colors.balls.red, c.colors.balls.blue]}
        style={styles.gradientDetailsContainer}>
        <ScrollView
          horizontal
          alwaysBounceHorizontal={false}
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScrollView}>

          </ScrollView>
      </LinearGradient>

    </ScrollView>

  </LinearGradient>
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
    paddingTop: 40,
    backgroundColor: 'transparent'
  },
  modal: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: c.colors.text.medium
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
  }
};

export default SingleCourse;
