import React from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import SVGIcon from '../assets/SVGIcon';
import c from '../assets/constants';

// Animated values used in the TabBar Component
let opacityAnimation = new Animated.Value(1);
let scrollAnimation = new Animated.ValueXY();
let indicatorPosition = new Animated.ValueXY();

const TabBar = ({state, descriptors, navigation}) => {
  // Should the tab bar be hiding?
  const hideTabBar = !!state.routes[state.index].params?.hideBar;

  if (hideTabBar) {
    Animated.spring(scrollAnimation, {
      toValue: {x: 0, y: 100},
      bounciness: 16,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(opacityAnimation, {
      toValue: -1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  } else {
    Animated.spring(scrollAnimation, {
      toValue: {x: 0, y: 0},
      bounciness: 16,
      duration: 250,
      useNativeDriver: true,
    }).start();
    Animated.timing(opacityAnimation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }
  //Animate the indicator position
  Animated.spring(indicatorPosition, {
    toValue: {x: state.index * ((c.device.width * 0.7) / 4), y: 0},
    duration: 80,
    bounciness: 5,
    useNativeDriver: true,
  }).start();

  function icons(route, focused, size = 30) {
    let color = focused ? c.colors.accent : c.colors.text.medium;
    switch (route.name) {
      case 'courses':
        return <SVGIcon name="courses" color={color} size={size} />;
      case 'exercises':
        return <SVGIcon name="exercises" color={color} size={size} />;
      case 'profile':
        return <SVGIcon name="profile" color={color} size={size} />;
      case 'purchases':
        return <SVGIcon name="purchases" color={color} size={size} />;
      default:
        return <SVGIcon name="" color={color} size={size} />;
    }
  }

  function renderTabBarButtons() {
    return state.routes.map((route, index) => {
      const {options} = descriptors[route.key];

      // Gets most proper tab bar title
      const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;
      const isFocused = state.index === index;
      const onLongPress = () =>
        navigation.emit({type: 'tabLongPress', target: route.key});

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });
        if (!isFocused && !event.defaultPrevented) {
          // The `merge: true` option makes sure that the params inside the tab screen are preserved
          navigation.navigate({name: route.name, merge: true});
        }
      };

      return (
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={options.tabBarAccessibilityLabel}
          onPress={onPress}
          onLongPress={onLongPress}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          key={index}
        >
          {icons(route, isFocused, 30)}
          <Text
            style={{
              fontSize: 10,
              marginTop: 5,
              color: isFocused ? c.colors.accent : c.colors.text.medium,
            }}
          >
            {label}
          </Text>
        </TouchableOpacity>
      );
    });
  }

  return (
    <Animated.View style={[styles.mainContainer, {}]}>
      <Animated.View style={styles.indicatorContainer}>
        <View style={styles.indicator} />
      </Animated.View>
      {renderTabBarButtons()}
    </Animated.View>
  );
};

const styles = {
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    padding: 0,
    bottom: 10,
    left: c.device.width / 2 - (c.device.width * 0.7) / 2,
    width: c.device.width * 0.7,
    height: 55,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 10,
    backgroundColor: '#ededed',
    opacity: opacityAnimation,
    transform: scrollAnimation.getTranslateTransform(),
  },
  indicatorContainer: {
    position: 'absolute',
    width: (c.device.width * 0.7) / 4,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    transform: indicatorPosition.getTranslateTransform(),
  },
  indicator: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    width: 55,
    height: 55 * 0.9,
    elevation: 5,
    borderRadius: 10,
    borderColor: c.colors.balls.red,
  },
};

export default TabBar;
