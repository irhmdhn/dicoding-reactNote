import React from 'react'

const NoteItemFooter = ({ id, deleteNoteHandler, archiveNoteHandler, archived }) => {
	return (
		<div className="note-item__footer">
			<button onClick={() => deleteNoteHandler(id)} className='btn-delete'>Delete</button>
			<button onClick={() => archiveNoteHandler(id)} className='btn-primary btn-archive'>{archived ? 'Unarchive' : 'Archive'}</button>
		</div>
	)
}

export default NoteItemFooter