import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const c = require('../../assets/constants');

class BLANK extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <LinearGradient colors={[c.colors.gradient.light, c.colors.gradient.dark]} style={{ height: '100%' }}>
      </LinearGradient>
    );
  }
}

const styles = {
};

export default BLANK;
