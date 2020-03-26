import { connect } from 'react-redux';
import { getAll, addNote } from '../../../redux/notesRedux';

import NoteAdd from './NoteAdd';

const mapStateToProps = state => ({
  notes: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  addNote: note => dispatch(addNote(note)),
});

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(NoteAdd);
