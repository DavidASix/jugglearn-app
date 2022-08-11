import { connect } from 'react-redux';
import ExerciseVideo from './ExerciseVideo';
import * as actions from '../../actions';

function mapStateToProps ({ settings }) {
  return {
    theme: settings.theme,
  };
};

export default connect(mapStateToProps, actions)(ExerciseVideo);
