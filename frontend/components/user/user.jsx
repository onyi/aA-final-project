import React from 'react';


class User extends React.Component {

  constructor(props){
    super(props);
    this.state = this.props.user || {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchProfileImage = this.fetchProfileImage.bind(this);
    console.log(`In User Profile Constructor, ${this.props}`);
  }

  fetchProfileImage(){
    // this.props.fetchProfileImage()

    // $.ajax({
    //   url: 'https://randomuser.me/api/',
    //   dataType: 'json',
    // }).then( )
  }


  componentDidMount(){
    this.props.getUser(this.props.userId);
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    const { username, email, profileImg, headline, website} = this.state;
    return (
      <div className="user-profile-wrapper">
        <h1>User Profile</h1>
        <form className="user-profile-form">
          <div className="field cf">
            <h2>Profile Image</h2>
            <div className="user-profile-img">
              { profileImg ? (<i className="fas fa-user-circle"></i>) : (<i className="fas fa-radiation-alt"></i>) }
            </div>

          </div>
          <div className="field cf">
            <input type="text" value={username} name="username" placeholder="Username" disabled />
          </div>
          <div className="field cf">
            <input type="text" value={email} name="email" placeholder="email" />
          </div>
          <div className="field cf">
            <input type="text" value={website} name="website" placeholder="website" />
          </div>
          <div className="field cf">
            <input type="text" value={headline} name="headline" placeholder="headline" />
          </div>
          <div className="field cf buttons">
            <input type="submit" value="Update Profile" className="button" />
          </div>
        </form>

      </div>
    );
  }



}


export default User;