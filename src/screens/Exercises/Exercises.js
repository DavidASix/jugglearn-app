import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const c = require('../../assets/constants');

class Exercises extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
  const iconSize = 90;
  return (
    <LinearGradient colors={[c.colors.gradient.light, c.colors.gradient.dark]} style={{ height: '100%' }}>

    <ScrollView style={{ flex: 1, width: '100%', zIndex: 5, padding: 10, paddingTop: 30, }}>
      <Text style={{ fontSize: 26, alignSelf: 'center' }}>
        Exercises
      </Text>

      <LinearGradient
        start={{x: 0, y: 0}} end={{x: 0.5, y: 0}}
        colors={[c.colors.balls.red, c.colors.balls.blue]}
        style={styles.gradButton}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('authentication')}>
        <Text style={{ fontSize: 26 }}>
          auth
        </Text>
      </TouchableOpacity>
      </LinearGradient>
    </ScrollView>

    </LinearGradient>
  );
}
}

const styles = {
headerContainer: {
  height: 70,
  backgroundColor: 'transparent',
  zIndex: 10,
  padding: 5,
  elevation: 1,
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
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  bottom: -16,
  left: -20,
  height: '200%', width: '120%',
  backgroundColor: '#F3f3f3',
  opacity: 1,
  elevation: 10,
  transform: [{ rotate: '-5deg' }]
},
gradButton: {
  width: '100%',
  height: 50,
  borderRadius: 20,
  elevation: 5,
  marginVertical: 10,
  paddingLeft: 30,
  justifyContent: 'center',
  alignItems: 'flex-start',
}
};

export default Exercises;
