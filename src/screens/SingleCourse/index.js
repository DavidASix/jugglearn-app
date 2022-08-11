import { connect } from 'react-redux';
import SingleCourse from './SingleCourse';
import * as actions from '../../actions';

function mapStateToProps ({ settings }) {
  return {
    theme: settings.theme,
  };
};

export default connect(mapStateToProps, actions)(SingleCourse);
