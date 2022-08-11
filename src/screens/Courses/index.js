import { connect } from 'react-redux';
import Courses from './Courses';
import * as actions from '../../actions';

function mapStateToProps ({ settings }) {
  return {
    theme: settings.theme,
  };
};

export default connect(mapStateToProps, actions)(Courses);
