# Project Overview

## Project Links
[Project Final](https://herokudeployfinsta.herokuapp.com/)

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Due Date | Deliverable | Status
|:---:|---|---|:---:|
|Day 1| Nov 5 | Prject Worksheet, Project Approval, Wireframes, Priority Matrix, Determine Functional Components | Complete
|Day 2| Nov 6 | Basic Functionality: Database, Login to newsfeed, Nav, Footer | Complete
|Day 3| Nov 7 | Newfeed functionality: Render photos, Add photos, Comment, Like | Complete
|Day 4| Nov 8 | Newsfeed Page, Profile Page | Complete
|Day 5| Nov 9 | CSS, Problem Sovling, Possibly Post-MVP  | Complete
|Day 6| Nov 12 | Final Touches, Presentation Prep | Complete
|Day 7| Nov 13 | Present | Incomplete


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

Four our third project, we decided to recreate Instagram. Our goal was to recreate the basic functions of the app using React, Express, and PSQL. With our Finstagram ("Fake Instagram") app, you can create an account, upload photographs, view photographs, edit your account information, and delete photographs. The design of the app is as similar to Instagram as possible. We approached the project with mobile first methodology.

https://instagram.com/

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

[Wireframe Drawn](https://imgur.com/U6npG6W "Wireframe")

[Wireframe made in Sketch](https://imgur.com/bdl9r7e "Wireframe")


## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

[Priority Matrix](https://imgur.com/IuG6Ont "Priority Matrix")


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Create user account
- Login to user account
- Newsfeed (view photos from database)
- Photo likes counter
- Profile page
- Post photo
- Edit profile information
- Comment on photos


#### PostMVP 

- Profile page (photo, bio)
- Follow users
- Associate user with a like
- Hashtags
- Messaging
- Login with facebook
- Language translator


## Architectural Design

Define the the React components and the architectural design of your app.

[Initial React Architectural Design Written](https://res.cloudinary.com/drsaojfyp/image/upload/v1542120525/znJfojK.jpg)

[Redesigned React Architectural Design Written](https://res.cloudinary.com/dvjtpejbw/image/upload/v1541690969/IMG_2973.jpg)

[Redesigned React Architectural Design Lucidchart](https://res.cloudinary.com/drsaojfyp/image/upload/v1542117841/Projects_for_Portfolio.jpg)

[ERD](https://imgur.com/a/fLTtbNE)

### Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | --- |  
| App | This will render the UI | 
| Switcher | will handle the initial routes to the login, create account, and main page| 
| LoginPage | allows users to login to their account and then redirect to the newsfeed | 
| Create Account | if a user is not in the database, they can create a new account and then redirect to the newsfeed |
| Main | includes navbar and footer as well as a switch to all of the routes (newsfeed, profilepage, upload photos, camera, etc) | 
| NavBar | routes to the webcam component | 
| Footer | the footer is actually our main nav bar that includes links to the other components | 
| Newsfeed | scrolling list of photos saved in database | 
| Picture | shows picture with user img, caption, likes, and comments |
| AddPhoto | Add a photo with a url and give it a caption | 
| ProfilePage | Allows users to view their images and edit their profile- opens to pictures in a grid | 
| ProfilePageSingle | Allows users to view their images and edit their profile- allows users to view photos in newsfeed style instead of grid |
| PictureSingle | picture component for profile page single including delete photo button |
| Comments | create comments |
| CommentsLists | shows comments for each individual picture |
| WebCam | allows user to take picture with built in camera |
| Likes | displays likes counter |
| LikesList | Logic for linking clicks to like counter |



Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App | H | 3hrs | 2hrs | 2hrs |
| Switcher | H | 3hrs| 1hrs | 1hrs |
| Create User Account | H | 7hrs | 3hrs | 3hrs |
| Login Page/ Authentication | H | 5hrs | 6hrs | 6hrs |
| Database | H | 5hrs| 3hrs | 5hrs |
| Linking Components to DB | H | 10hrs| 6hrs | 8hrs |
| Newsfeed | H | 4hrs | 5hrs | 5hrs |
| Navigation | H | 2hrs | 1hrs | 1hrs |
| Footer | H | 2hrs | 8hrs | 6hrs |
| Add Photo Camera | H | 3hrs | 2hrs | 5hrs |
| Add Photo URL | H | 3hrs | 2hrs | 3hrs |
| Profile Page | L | 5hrs | 2.5hrs | 6hrs |
| Messages | L | 10hrs | 0hrs | 0hrs |
| Comments | L | 6hrs | 0hrs | 4hrs |
| Git Project Workflow | H | 3hrs | 2.5hrs | 3hrs |
| Wireframing| H | 5hrs | 5hrs | 5hrs |
| CSS| H | ∞hrs | 5hrs | 12hrs |
| Project Management| H | 2hrs | 2hrs | 3hrs |
| Deployment| H | 4hrs | 2hrs | 8hrs |
| Total | H | 68hrs| 52.5hrs | 86hrs |


## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | --- |  
| compondentDidMount | Pulling data when page renders | 
| handleClick | Changes state when called with an onclick|
| handleInputChange | Changes state when user is typing in an input field| 
| handleFormSubmit | uses axios post to submit form information to database | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

[TBD Messenger Library](). If we decide to do a messenger feature
[Rea
 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
export default class NewAccount extends Component {
  state = {
    newId: '',
    username: '',
    password:'',
    full_name: '',
    phone: '',
    bio: '',
    profpic: '',
    fireRedirect: false
  }


  handleInputChange(e){
    const name = e.target.name
    const value = e.target.value
    this.setState(prevState => ({
       [name]: value
    }))
  }


  // the event for a form is...onSubmit
  handleFormSubmit(e){
    e.preventDefault()

    axios.post('/', {
       username: this.state.username,
       password: this.state.password,
       full_name: this.state.full_name,
       phone: this.state.phone,
       bio: this.state.bio,
       profpic: this.state.profpic
    }).then(res => {
      localStorage.setItem('username', this.state.username)
      localStorage.setItem('profpic_url', this.state.profpic)
      console.log(res.data.data.id)
      this.setState({
        newId: res.data.data.id,
        fireRedirect:true
      })
      localStorage.setItem('user_id', res.data.data.id)

  })

}


  render() {
  return(
    <div className="login">
       <h1>Create Account Page</h1>
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          <label>
            Username
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Full Name
            <input
              type="text"
              placeholder="Full Name"
              name="full_name"
              value={this.state.full_name}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Phone
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={this.state.phone}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Bio
            <input
              type="text"
              placeholder="Bio"
              name="bio"
              value={this.state.bio}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Profile Picture URL
            <input
              type="text"
              placeholder="Profile Pic URL"
              name="profpic"
              value={this.state.profpic}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <input type="submit" value="Submit!" />
        </form>
        {this.state.fireRedirect
          ? <Redirect push to={{
              pathname: '/main',
              state: {referrer: this.state.username}
            }} />
          : ''}
      </div>
    )
  }
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
 
 We made a few changes once we started our project. The biggest change was restructuring our React components. Initially, we made the mistake of attempting to call the nav component and the footer component on each url route instead of making a main page with a switch. We restructured our app to have three switch components "homes". 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

 [TBD Error 1]()

 [TBD Error 2]()

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
