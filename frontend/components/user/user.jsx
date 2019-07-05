import React from 'react';


class User extends React.Component {

  constructor(props){
    super(props);
    this.state = this.props.user || {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.fetchProfileImage = this.fetchProfileImage.bind(this);
    console.log(`In User Profile Constructor, ${JSON.stringify(this.props)}`);
  }

  fetchProfileImage(){
    // this.props.fetchProfileImage()

    // $.ajax({
    //   url: 'https://randomuser.me/api/',
    //   dataType: 'json',
    // }).then( )
  }

  componentWillReceiveProps(prevProps){
    console.log(`Component receive props: ${JSON.stringify(this.props.user)}`);
    // this.setState(this.props.user);
  }

  componentDidUpdate(){
    // this.setState(this.props.user);
    if (this.props.errors.length != 0)
      this.props.removeSessionErrors();
  }

  componentDidMount(){
    this.props.getUser(this.props.userId);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateUser(this.state);
  }

  update(e){
    this.setState({ [e.currentTarget.name] : e.currentTarget.value })
  }

  renderError() {
    this.props.errors.forEach(error => {
      toast.error(error);
    });
  }

  render(){
    const {user} = this.props;
    this.renderError();
    return (
      <div className="user-profile-wrapper">
        
        <h1>User Profile</h1>
        <form className="user-profile-form" onSubmit={this.handleSubmit}>
          <div className="field cf">
            <h3>Profile Image</h3>
            <div className="user-profile-img">
              {/* { user.profile_img ? (<i className="fas fa-user-circle"></i>) : (<i className="fas fa-radiation-alt"></i>) } */}
              <i className="fas fa-radiation-alt"></i>
            </div>

          </div>
          <div className="field cf">
            <label>Username</label>
            <input type="text" value={user.username} name="username" placeholder="Username" disabled />
            
          </div>
          <div className="field cf">
            <label>Email</label>
            <input type="text" value={user.email} name="email" placeholder="email" onChange={this.update} />
          </div>
          <div className="field cf">
            <label>Website</label>
            <input type="text" value={user.website} name="website" placeholder="website" onChange={this.update} />
          </div>
          <div className="field cf">
            <label>Headline</label>
            <input type="text" value={user.headline} name="headline" placeholder="headline" onChange={this.update} />
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