import { connect } from 'react-redux';
import BLANK from './BLANK';
import * as actions from '../../actions';

function mapStateToProps ({ settings }) {
  return {
    theme: settings.theme,
  };
};

export default connect(mapStateToProps, actions)(BLANK);
