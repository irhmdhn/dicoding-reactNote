import React from 'react'
import NoteItem from '../NoteItem'

const NoteType = ({ className, title, emptyMsg, notes, deleteNoteHandler, archiveNoteHandler }) => {
	const noteMapping = (note) => {
		return <NoteItem key={note.id} {...note} {...{deleteNoteHandler, archiveNoteHandler}} />
	}

	return (
		<div className={`notes__${className}`}>
			<h1 className='notes__title'>{title}</h1>
			<div className="note-list">
			{
				notes.length ? 
				notes.map(noteMapping) 
				:
				<p className='empty-note'>{emptyMsg}</p>
			}	
			</div>
		</div>
	)
}

export default NoteType