import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './NavBar';
import Footer from './Footer';
import NewsFeed from './NewsFeed';
import ProfilePageGrid from './ProfilePageGrid';
import ProfilePage from './ProfilePage';
import AddPhoto from './AddPhoto';
import Explore from './ExplorePage';
import CommentsList from './CommentsList';
import EditProfile from './EditProfile';
import WebCam from './WebCam';
import LikesList from './LikesList'


class Main extends Component {

render(){

    return (
      <Router>
        <div className="newsFeed">
          <NavBar/>
          <div className="scroll">
            <Switch>
              <Route path='/EditProfile' component= { EditProfile } />
              <Route path='/Newsfeed' component= { NewsFeed } />
              <Route path='/AddPhoto' component= { AddPhoto } />
              <Route path='/WebCam' component= { WebCam } />
              <Route path='/Explore' component= { Explore } />
              <Route path='/ProfilePage/:id' component = { ProfilePage } />
              <Route path='/CommentsList' component = { CommentsList } />
              <Route path='/Likes' component = { LikesList } />
              <Route path='/Main' component={ NewsFeed } />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}
export default Main;
