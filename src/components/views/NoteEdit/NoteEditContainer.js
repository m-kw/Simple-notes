import { connect } from 'react-redux';
import { getAll, editNote } from '../../../redux/notesRedux';

import NoteEdit from './NoteEdit';

const mapStateToProps = state => ({
  notes: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  editNote: note => dispatch(editNote(note)),
});

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(NoteEdit);
