import React from 'react'

class FormNote extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			title: '',
			body: '',
		}
		
		this.keywordCounter = 50
		this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this)
		this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this)
		this.onSubmitHandler = this.onSubmitHandler.bind(this)
	}

	onTitleChangeHandler(event){
		this.setState((prevState)=>{
			return {
				title: event.target.value.length > 50 ? prevState.title : event.target.value,
			}
		})
	}

	onBodyChangeHandler(event){
		this.setState(()=>{
			return {
				body: event.target.value,
			}
		})
	}

	onSubmitHandler(event){
		event.preventDefault()
		this.props.modalHandler(false)
		this.props.addNoteHandler(this.state)
		this.setState(()=>{
			return {
				title: '',
				body: '',	
			}
		})
	}

	render(){
		return (
			<div className={`note-form ${this.props.isModalOpen ? '' : 'invisible'}`}>
				<div className="note-form__wrapper">
					<div className='note-form__content'>
						<div className="note-form__header">
							<h2>Add note</h2>
							<button className='btn-close' onClick={()=>this.props.modalHandler(false)}>X</button>
						</div>
						<form onSubmit={this.onSubmitHandler}>
							<div className="note-form__input-title">
								<input type="text" placeholder='Title' value={this.state.title} onChange={this.onTitleChangeHandler}/>
								<span>Character left: {this.keywordCounter - this.state.title.length}</span>
							</div>
							<textarea rows='10' placeholder='Your note' value={this.state.body} onChange={this.onBodyChangeHandler}></textarea>
							<button type='submit' className='btn-primary'>Save</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default FormNote;