import React from 'react';
import {View, TextInput} from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
const c = require('../../assets/constants');

const StyledInput = ({
  type,
  placeholder,
  value,
  onChange,
  icon,
  theme,
  style,
  secure,
}) => {
  let height = style?.height || 45;
  return (
    <View
      style={[
        {
          borderRadius: 10,
          overflow: 'hidden',
          maxHeight: height,
          height: '30%',
          elevation: 5,
          marginVertical: 5,
          backgroundColor: '#DDD',
          flexDirection: 'row',
          width: '80%',
        },
        style || {},
      ]}>
      {icon && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: height,
            width: height,
            backgroundColor: c.colors.balls.red,
            borderRadius: 10,
          }}>
          <IIcon name={icon} size={height - 20} color={'#fff'} />
        </View>
      )}

      <TextInput
        underlineColorAndroid="transparent"
        textContentType={type}
        autoComplete={type}
        secureTextEntry={secure}
        placeholder={placeholder || 'Placeholder'}
        value={value}
        onChangeText={text => onChange(text)}
        style={{borderBottomWidth: 0, flex: 1, color: c.colors.text.dark}}
      />
    </View>
  );
};

export default StyledInput;
