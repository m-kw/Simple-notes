import { connect } from 'react-redux';
import { getAll, removeNote } from '../../../redux/notesRedux';

import Homepage from './Homepage';

const mapStateToProps = state => ({
  notes: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  removeNote: id => dispatch(removeNote(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
