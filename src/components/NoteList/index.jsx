import React from 'react'
import NoteType from './NoteType'

const NoteList = ({ notes, deleteNoteHandler, archiveNoteHandler }) => {
	const activeNotes = notes.filter(note => note.archived === false) 
	const archiveNotes = notes.filter(note => note.archived === true)

	return (
		<div className='notes'>
			<NoteType 
				className={'active'} 
				title={'Active notes'}
				emptyMsg={'Empty active notes'} 
				notes={activeNotes}
				{...{deleteNoteHandler, archiveNoteHandler}}
			/>
			<NoteType 
				className={'archive'} 
				title={'Archived'}
				emptyMsg={'Empty archived notes'} 
				notes={archiveNotes}
				{...{deleteNoteHandler, archiveNoteHandler}}
			/>
		</div>
	)
}

export default NoteList