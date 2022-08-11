import 'react-native-gesture-handler';

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  YellowBox
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { setCustomTextInput, setCustomText } from 'react-native-global-props';

import { store, persistor } from './src/config/store';
const c = require('./src/assets/constants');

import Authentication from './src/screens/Authentication/';
//import BasePage from './src/SlideUpModal/BasePage';
import Router from './src/config/Router';

const fontFamilyProps = { style: { fontSize: 20, fontFamily: 'Quicksand', color: c.colors.text.light } };
setCustomTextInput(fontFamilyProps);
setCustomText(fontFamilyProps);

class App extends React.Component {
  render() {
    // console.disableYellowBox = false;
    // return <BasePage />
    return (
			<Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <>
            <StatusBar barStyle="light-content" />
            <Router />
          </>
        </PersistGate>
			</Provider>
    );
  }
}

export default App;
