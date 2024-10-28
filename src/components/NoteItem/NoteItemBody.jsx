import React from 'react'

const NoteItemBody = ({ body }) => {
	return (
		<div className="note-item__body">
			<p className='note-item__body-text'>{body}</p>
		</div>
	)
}

export default NoteItemBody