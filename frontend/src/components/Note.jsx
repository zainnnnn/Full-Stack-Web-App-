import "../styles/Note.css";
import PropTypes from "prop-types";

function Note({ note, onDelete }) {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

  return (
    <div className="note-container">
      <p className="note-title">{note.title}</p>
      <p className="note-content">{note.content}</p>
      <p className="note-date">{formattedDate}</p>
      <button className="delete-button" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}

Note.propTypes = {
  note: PropTypes.object.isRequired, // Change from PropTypes.node to PropTypes.object
  onDelete: PropTypes.func.isRequired, // Change from PropTypes.node to PropTypes.func
};

export default Note;
