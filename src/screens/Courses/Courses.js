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
import CourseCard from './CourseCard';

const c = require('../../assets/constants');

const courses = require('./courseData')


if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayScreen: 'courseList',
      selectedCourseIndex: null
    };
    this.offset = 1;
    this.horizontalScrollView;
    this.cardTransform = new Animated.ValueXY();
    this.courseTransform = courses.map((course, i ) => new Animated.ValueXY());
  }

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

  onPressCourse = (i) => {
    // Slides course screen to Course View
    this.setState({ selectedCourseIndex: i, displayScreen: 'course' });
    this.courseTransform.forEach((transform, i) => {
      Animated.spring(transform,
        { toValue: { x: -c.device.width, y: 0 },
          bounciness: 5,
          delay: 150 * i,
          duration: 100,
          useNativeDriver: true
        }).start();
    });
    this.horizontalScrollView.scrollTo({ x:c.device.width, y:0, animated: true });
  }

  onPressBack = () => {

    this.setState({ displayScreen: 'courseScreen' });
    this.courseTransform.forEach((transform, i) => {
      Animated.spring(transform,
        { toValue: { x: 0, y: 0 },
          bounciness: 10,
          delay: 150 * i,
          duration: 150,
          useNativeDriver: true
        }).start();
    });
    this.horizontalScrollView.scrollTo({ x: 0, y: 0, animated: true })
  }

  renderCategories() {
    return (
      <>
      <TouchableOpacity
        style={styles.categoryButton}>
        <View style={styles.iconCircle}>
          <SVGIcon name='oneBall' size='40%' />
        </View>
        <Text style={{ fontSize: 12 }}>
          One Ball
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => this.props.navigation.navigate('authentication')}>
        <View style={styles.iconCircle}>
          <SVGIcon name='twoClub' size='60%' />
        </View>
        <Text style={{ fontSize: 12 }}>
          Clubs
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => this.props.navigation.navigate('authentication')}>
        <View style={styles.iconCircle}>
          <SVGIcon name='twoBall' size='60%' />
        </View>
        <Text style={{ fontSize: 12 }}>
          Two Ball
        </Text>
      </TouchableOpacity>
      </>
    );
  }

  renderCourseCards() {
    let { selectedCourseIndex } = this.state;
    let courseArray = courses;
    if (selectedCourseIndex !== null) {
      let course = courseArray[selectedCourseIndex];
    }
    return courseArray.map((course, i) => {
      return (
        <CourseCard
          course={course}
          i={i}
          key={i}
          transformAnimation={this.courseTransform[i]}
          selectedCourseIndex={selectedCourseIndex}
          onPressCourse={(c) => this.onPressCourse(c)} />
        );
    });
  }

  renderCourseList() {
  let { selectedCourseIndex } = this.state;
  return (
    <ScrollView
      onScroll={(e) => this.onScroll(e)}
      ref={(ref) => this.scrollView = ref}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollviewContentContainer}
      style={styles.scrollviewContainer}>
      <View style={styles.listHeader}>
        <Text style={{ fontSize: 32  }}>
          Courses
        </Text>
          <SVGIcon name='courses' color={'#FFF'} size={50} />
      </View>

      <Animated.View style={[{ transform: this.courseTransform[0].getTranslateTransform() }]}>
        <View style={[styles.listDetailContainer]}>
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
          style={[styles.gradientDetailsContainer]}>
          <ScrollView
            horizontal
            alwaysBounceHorizontal={false}
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScrollView}>
            {this.renderCategories()}
            </ScrollView>
        </LinearGradient>
      </Animated.View>

      {this.renderCourseCards()}
    </ScrollView>
    )
  }

  renderCourseDetails() {
    let { selectedCourseIndex } = this.state;
    if (selectedCourseIndex === null) {
      return (
          <View style={[styles.scrollviewContainer, styles.scrollviewContentContainer]}>
          </View>
      )
    }
    let course = courses[selectedCourseIndex];
    return (
      <ScrollView
        onScroll={(e) => this.onScroll(e)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollviewContentContainer}
        style={styles.scrollviewContainer}>

        <View style={styles.listHeader}>

          <TouchableOpacity
            onPress={this.onPressBack}
            style={{ height: 50, width: 50, }}>
            <SVGIcon name='chevronLeft' color={c.colors.text.light} />
          </TouchableOpacity>

          <Text style={{ fontSize: 32  }}>
            {course.title}
          </Text>
        </View>



          <View style={styles.descriptionContainer}>
            <Text style={{ fontSize: 12, color: c.colors.text.dark  }}>
              {course.description}
            </Text>
          </View>

        <LinearGradient
          start={{x: 0, y: 0}} end={{x: 0.5, y: 0}}
          colors={[c.colors.balls.red, c.colors.balls.blue]}
          style={[styles.gradientDetailsContainer, { marginBottom: 10 }]}>
          <View style={{ width: '100%', minHeight: 40 }}>
            <Text>Completion</Text>
            <Text>Completion</Text>
          </View>
        </LinearGradient>

        {course.steps?.length && course.steps.map((step, i) => (
          <>
            <View
            key={i}
            style={{
              height: 20,
              width: 20,
              borderRadius: 20,
              backgroundColor: 'white',
              alignSelf: 'flex-start',
              justifyContent: 'center',
              alignItems: 'center' }}>
              <Text style={{ color: c.colors.text.dark, fontSize: 12, }}>{i + 1}</Text>
            </View>

            <TouchableOpacity
              style={{ width: '100%', borderLeftWidth: 1, borderColor: 'white', paddingHorizontal: 10,  marginLeft: 17.5, }}
              onPress={() => this.props.navigation.navigate('exerciseVideo', { exercise: step, course: selectedCourseIndex })}>
              <Image
                source={require('../../assets/OneBallHeader.jpg')}
                resizeMode='cover'
                style={{ width: '100%', height: 75, marginBottom: -15, borderRadius: 10, }} />
              <View style={{ padding: 10, backgroundColor: 'white', borderRadius: 10 }}>
                <Text style={{ color: c.colors.text.dark }}>{step.title}</Text>
                <Text style={{ color: c.colors.text.dark, fontSize: 12, }}>{step.shortDescription}</Text>
              </View>
            </TouchableOpacity>
          </>
        ))}

        {course.steps?.length && <View style={{
          height: 20,
          width: 20,
          borderRadius: 20,
          backgroundColor: 'white',
          alignSelf: 'flex-start',
          justifyContent: 'center',
          alignItems: 'center' }}>
          <Text style={{ color: c.colors.text.dark, fontSize: 12, }}>✔</Text>
        </View>}


      </ScrollView>
    );
  }

  render() {
    return (
      <LinearGradient colors={[c.colors.gradient.light, c.colors.gradient.dark]} style={{ height: '100%', elevation: 0 }}>

      <ScrollView
        horizontal
        directionalLockEnabled
        pagingEnabled
        scrollEnabled={false}
        ref={(ref) => this.horizontalScrollView = ref}>

        {this.renderCourseList()}
        {this.renderCourseDetails()}

        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = {
  scrollviewContainer: {
    flex: 1,
    width: c.device.width,
    zIndex: 5
  },
  scrollviewContentContainer: {
    paddingHorizontal: 5,
    paddingTop: 30,
    paddingBottom: 10,
    alignItems: 'center'
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

export default Courses;
