import React from 'react'

class Header extends React.Component{
	constructor(props){
		super(props)
		this.onChangeKeyword = this.onChangeKeyword.bind(this)
	}

	onChangeKeyword(event){
		this.props.searchNoteHandler(event.target.value)
	}

	render(){
		return (
			<header className='note-app__header'>
				<h2>MyNotes</h2>
				<div className='note-app__header-form'>
					<input type='text' placeholder='Find notes...' onChange={this.onChangeKeyword}/>
					<div className='v-divider'></div>
					<button onClick={this.props.modalHandler} className='btn-primary'>Add note +</button>
				</div>
			</header>
		)
	}
}

export default Header