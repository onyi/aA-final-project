import React from 'react';

class User extends React.Component {

  constructor(props){
    super(props);
    this.state = this.props.user || {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.fetchProfileImage = this.fetchProfileImage.bind(this);
  }

  fetchProfileImage(){
    // this.props.fetchProfileImage()

    // $.ajax({
    //   url: 'https://randomuser.me/api/',
    //   dataType: 'json',
    // }).then( )
  }

  componentDidUpdate(prevProps){
    if (this.props.errors.length != 0){
      this.props.removeSessionErrors();
    }
    if(this.props.user !== prevProps.user){
      Object.keys(this.props.user).forEach( key => {
        this.setState({ [key]: this.props.user[key] })
      });
    }
  }

  componentWillMount(){
    // this.props.getUser(this.props.userId);
  }

  componentDidMount(){
    this.props.getUser(this.props.userId);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateUser(this.state);
  }

  update(e){
    // console.log(`User form upate ${JSON.stringify(this.state)}`);
    this.setState({ [e.currentTarget.name] : e.currentTarget.value })
  }

  renderError() {
    this.props.errors.forEach((error, idx) => {
      toast(error,
        {
          type: toast.TYPE.ERROR,
          onClose: () => {
            this.props.removeSessionErrors();
          }
        });
    });
  }

  render(){
    // console.log(`Render state: ${ JSON.stringify(this.state) }`)
    // if (!user) return null;
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
            <input type="text" value={this.state.username} name="username" placeholder="Username" disabled />
            
          </div>
          <div className="field cf">
            <label>Email</label>
            <input type="text" value={this.state.email} name="email" placeholder="email" onChange={this.update} />
          </div>
          <div className="field cf">
            <label>Website</label>
            <input type="text" value={this.state.website} name="website" placeholder="website" onChange={this.update} />
          </div>
          <div className="field cf">
            <label>Headline</label>
            <input type="text" value={this.state.headline} name="headline" placeholder="headline" onChange={this.update} />
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