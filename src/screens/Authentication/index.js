import { connect } from 'react-redux';
import Authentication from './Authentication';
import * as actions from '../../actions';

function mapStateToProps ({ settings }) {
  return {
    theme: settings.theme,
  };
};

export default connect(mapStateToProps, actions)(Authentication);
