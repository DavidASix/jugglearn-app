import { connect } from 'react-redux';
import Profile from './Profile';
import * as actions from '../../actions';

function mapStateToProps ({ settings }) {
  return {
    theme: settings.theme,
  };
};

export default connect(mapStateToProps, actions)(Profile);
