import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Exercises from './icons/Exercises.js';
import Courses from './icons/Courses.js';
import Profile from './icons/Profile.js';
import Purchases from './icons/Purchases.js';
import OneBall from './icons/OneBall.js';
import TwoClub from './icons/TwoClub.js';
import TwoBall from './icons/TwoBall.js';
import ChevronDown from './icons/ChevronDown.js';
import ChevronUp from './icons/ChevronUp.js';
import ChevronRight from './icons/ChevronRight.js';
import ChevronLeft from './icons/ChevronLeft.js';
import Gear from './icons/Gear.js';
import Eye from './icons/Eye.js';
import EyeOff from './icons/EyeOff.js';


//Icons

export default function SVGIcon(props) {

  const icon = {
    exercises: <Exercises {...props} />,
    courses: <Courses {...props} />,
    profile: <Profile {...props} />,
    purchases: <Purchases {...props} />,
    oneBall: <OneBall {...props} />,
    twoClub: <TwoClub {...props} />,
    twoBall: <TwoBall {...props} />,
    chevronDown: <ChevronDown {...props} />,
    chevronUp: <ChevronUp {...props} />,
    chevronRight: <ChevronRight {...props} />,
    chevronLeft: <ChevronLeft {...props} />,
    gear: <Gear {...props} />,
    eye: <Eye {...props} />,
    eyeOff: <EyeOff {...props} />,
   };

  return icon[props.name] ?  icon[props.name] : <Text style={{color: 'red' }}>⛔</Text>;
}
