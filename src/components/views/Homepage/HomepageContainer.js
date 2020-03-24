import { connect } from 'react-redux';
import { getAll } from '../../../redux/notesRedux';

import Homepage from './Homepage';

const mapStateToProps = state => ({
  notes: getAll(state),
});

export default connect(mapStateToProps)(Homepage);
