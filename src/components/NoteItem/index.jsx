import React from 'react'
import NoteItemHeader from './NoteItemHeader'
import NoteItemBody from './NoteItemBody'
import NoteItemFooter from './NoteItemFooter'

const NoteItem = ({ id, title, body, createdAt, archived, deleteNoteHandler, archiveNoteHandler }) => {	
	return (
		<div className='note-item'>
			<div className='note-item__content'>
				<NoteItemHeader {...{title, createdAt}}/>
				<NoteItemBody body={body} />
				<NoteItemFooter id={id} {...{deleteNoteHandler, archiveNoteHandler, archived}}/>
			</div>
		</div>
	)
}

export default NoteItem