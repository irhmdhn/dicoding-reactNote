import React from 'react'
import { showFormattedDate } from '../../utils'

const NoteItemHeader = ({ title, createdAt }) => {
	return (
		<div className="note-item__header">
			<h3 className='note-item__header-title'>{title}</h3>
			<span className='note-item__header-date'>{showFormattedDate(createdAt)}</span>
		</div>
	)
}

export default NoteItemHeader