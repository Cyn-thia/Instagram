import React, { Component } from 'react';
import axios from 'axios';
import ProfilePicture from './ProfilePicture'
import { disableBodyScroll } from 'body-scroll-lock';
import { Link } from 'react-router-dom';

class ProfilePage extends Component {
  state = {
    apiDataLoaded: false,
    apiData: null,
  }

  componentDidMount() {
    const username = localStorage.getItem('username')
      axios.get(`http://localhost:3001/finsta/${username}`)
      .then( res => {
        this.setState(prevState => ({
          apiDataLoaded: true,
          apiData: res.data.data
        }))
        console.log(res.data.data)
      })
      this.targetElement = document.querySelector('.scroll')
      disableBodyScroll(this.targetElement)
  }

  handleClick(e) {
    e.stopPropagation()
    console.log('inside handleClick')

    this.setState(prevState => ({
      isGrid: !this.state.isGrid,
      isSingle: !this.state.isSingle,
    }))
  }

  renderPictures() {
    if(this.state.apiDataLoaded) {
      return this.state.apiData.map(d => {
        return(
          <ProfilePicture key={d.id} picture={d} />
        )
      })
    } else return <p>Loading...</p>
  }

  renderUserImg() {
    const profpic_url = localStorage.getItem('profpic_url')

      return profpic_url

  }

  // renderUserName() {
  //     if(this.state.apiDataLoaded) {
  //       return this.state.apiData[0].full_name
  //     } else return <p>Loading...</p>
  //   }

  // renderUserBio() {
  //     if(this.state.apiDataLoaded) {
  //       console.log(this.state.apiData[0].bio)
  //       return this.state.apiData[0].bio
  //     } else return <p>Loading...</p>
  //   }

  render () {

  const username = localStorage.getItem('username')

    return (
      <div className="newsFeed">
        <div className="scroll">
          <div className='top'>
            <div className='profHead'>
                <img className='userImgProfPage' src={this.renderUserImg()} alt="UserImg"/>
                <Link to = {`/editprofile/${username}`} className='edit'><div className='editThis'> Edit Profile </div></Link>
            </div>
           {/* <div className='name'>{this.renderUserName()}</div>
            <div className='bio'>{this.renderUserBio()}</div>*/}
          </div>
          <div className='viewBar'>
            <div className='gridPic'></div>
            <Link to={`/profilepagesingle/${username}`}
              onClick = {(e) => this.handleClick(e)}
              className='singlePic'/>
            <div className='tagPic'></div>
          </div>
          <div className='profilePicGrid'>{this.renderPictures()}</div>
         </div>
      </div>
    )
  }

}

export default ProfilePage;
