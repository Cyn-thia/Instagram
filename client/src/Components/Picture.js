import React, { Component } from 'react';

class Picture extends Component {
	state = {
		isLike: false
	}

	handleClick(e) {
		e.stopPropagation()
		console.log('inside handleClick')

		this.setState(prevState => ({
			isLike: !prevState.isLike
		}))
	}

	render () {
		const isLike = (this.state.isLike) ? 'liked' : 'noLike' 

		return (
			<div>
				<div className= 'userInformationNewsfeed'>
					<img className='userImg' src={this.props.picture.profpic_url} alt="UserImg"/>
					<div className="usernameTop">{this.props.picture.username}</div>
				</div>
				<img className='picture' src={this.props.picture.img_url} alt="Camera" onClick = {(e) => this.handleClick(e)}/>
				<div className='actions'>
					<div className={`${isLike}`}></div>
					<div className='commentButton'></div>
					<div className='messageButton'></div>
				</div>	
				<div className='usernameCaption'>
					<div className="username">{this.props.picture.username}</div>
					<div>{this.props.picture.caption}</div>
				</div>
			</div>
		)
	}

}

export default Picture;