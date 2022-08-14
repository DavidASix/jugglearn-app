import {Dimensions} from 'react-native';
let c = module.exports;

c.device = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

c.colors = {
  gradient: {
    light: '#C9C9C9',
    medium: '#777777',
    dark: '#404040',
  },
  balls: {
    blue: '#6785FC',
    yellow: '#FFDD56',
    red: '#FE5E5E',
  },
  text: {
    light: '#FFF',
    medium: '#707070',
    dark: '#393939',
  },
  accent: '#6395E9',
};

c.urls = {
  api: 'https://dev.dave6.com/midwife/',
};

c.t = {
  ms: 1,
  sec: 1000,
  min: 1000 * 60,
  hour: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24,
  week: 1000 * 60 * 60 * 24 * 7,
  month: 1000 * 60 * 60 * 24 * 30,
  year: 1000 * 60 * 60 * 24 * 365,
};

c.randomString = () => Math.random().toString(36).substr(2).toUpperCase();

c.themes = {
  dark: {},
  light: {},
};

c.styles = require('./commonStyles');
