import React from 'react'
import Header from './components/Header'
import FormNote from './components/FormNote'
import NoteList from './components/NoteList'
import { getInitialData } from './utils'

class NoteApp extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			isModalOpen: false,
			notes: getInitialData(),
			filteredNotes: this.notes,
		}

		this.modalHandler = this.modalHandler.bind(this)
		this.addNoteHandler = this.addNoteHandler.bind(this)
		this.deleteNoteHandler = this.deleteNoteHandler.bind(this)
		this.archiveNoteHandler = this.archiveNoteHandler.bind(this)
		this.searchNoteHandler = this.searchNoteHandler.bind(this)
	}

	modalHandler(){
		this.setState((prevState) => {
			return {
				isModalOpen: !prevState.isModalOpen
			}
		})
	}

	addNoteHandler({ title, body }){
		this.setState((prevState) => {
			return {
				notes : [
					...prevState.notes,
					{
						id: +new Date(),
						title,
						body,
						createdAt: new Date().toISOString(),
						archived: false,
					}
				]
			}
		})
	}

	deleteNoteHandler(id){
		const notes = this.state.notes.filter(note => note.id !== id)
		this.setState({ notes })
	}

	archiveNoteHandler(id){
		const notes = this.state.notes.map(note => {
			if(note.id === id){
				return {...note, archived: !note.archived}
			}
			return note
		})
		this.setState({ notes })
	}

	searchNoteHandler(keyword){
		const filteredNotes = this.state.notes.filter(note => note.title.toLowerCase().includes(keyword.toLowerCase()))
		this.setState(() => {
			return { filteredNotes }
		} )
	}

	render(){
		console.log(this.state.notes);
		
		return (
			<>
				<Header searchNoteHandler={this.searchNoteHandler} modalHandler={this.modalHandler}/>
				<main className="note-app__body">
					<FormNote 
						modalHandler={this.modalHandler} 
						addNoteHandler={this.addNoteHandler} 
						isModalOpen={this.state.isModalOpen}
					/>
					<NoteList 
						notes={this.state.filteredNotes || this.state.notes}
						deleteNoteHandler={this.deleteNoteHandler} 
						archiveNoteHandler={this.archiveNoteHandler}
					/>
				</main>
			</>
		)
	}
}

export default NoteApp