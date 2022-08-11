import { connect } from 'react-redux';
import Exercises from './Exercises';
import * as actions from '../../actions';

function mapStateToProps ({ settings }) {
  return {
    theme: settings.theme,
  };
};

export default connect(mapStateToProps, actions)(Exercises);
