import { connect } from 'react-redux';
import Purchases from './Purchases';
import * as actions from '../../actions';

function mapStateToProps ({ settings }) {
  return {
    theme: settings.theme,
  };
};

export default connect(mapStateToProps, actions)(Purchases);
