import React from 'react';

import { Modal } from '../../util/modal_util'

import { withRouter } from 'react-router-dom';



class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      show: props.show
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.loginUser(this.state);
    this.hideModal();
  }

  componentWillUnmount() {
    console.log(`Component will unmount`);
    this.props.removeSessionErrors();
  }

  update(e) {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal(e) {
    e.stopPropagation();
    this.setState({ show: false });
    this.props.history.goBack();
  }

  render() {
    return (
      <Modal show={this.state.show} handleClose={this.hideModal} >
        <div className="login-form">
          <h2>This is a login form</h2>
          <div className="login-form-content">
            <form onSubmit={this.handleSubmit}>
              <label>Username: </label>
              <input type="text" value={this.state.username} onChange={this.update} name="username" />
              <label>Password: </label>
              <input type="password" value={this.state.password} onChange={this.update} name="password" />
              <input type="submit" value="Sign In" />
            </form>
          </div>
        </div>
      </Modal>
    )

  }

}

export default withRouter(Login);