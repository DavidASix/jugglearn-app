import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
  UIManager,
  LayoutAnimation,
  Platform,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

//Icons
import SVGIcon from '../../assets/SVGIcon';

const c = require('../../assets/constants');

const courses = require('./courseData')

const CourseCard = (props) => {
  let { course, i, selectedCourseIndex, onPressCourse, transformAnimation } = props;
  return (
    <Animated.View
      style={{
        alignItems: 'center',
        marginVertical: 10,
        transform: transformAnimation.getTranslateTransform()
      }}>
      <TouchableOpacity
        style={{
          width: '100%',
          aspectRatio: 3,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          elevation: 5
        }}
        onPress={() => onPressCourse(i)}>
        <Image
          style={{ width: '100%', position: 'absolute', height: '100%', opacity: 0.9 }}
          source={{ uri: course.coverImage }}
          resizeMode="cover" />

        <View style={{ width: '100%', position: 'absolute', height: '100%', backgroundColor: '#FFFFFF60' }} />

        <LinearGradient
          start={{x: 0, y: 0}} end={{x: 0.5, y: 0}}
          colors={[c.colors.balls.blue+"80", c.colors.balls.red+"80"]}
          style={{
            borderRadius: 10,
            width: '80%',
            minHeight: 50,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text style={{ fontSize: 32 }}>
            {course.title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={{
        minHeight: 30,
        elevation: 5,
        width: '95%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
      }}>
        <Text style={{ fontSize: 12, color: c.colors.text.dark }}>
          {course.description}
        </Text>
      </View>
    </Animated.View>
  )
}

export default CourseCard;
