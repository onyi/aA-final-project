import React from 'react';

import { Modal } from '../../util/modal_util'

import { withRouter } from 'react-router-dom';

import { toast } from 'react-toastify';


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
    this.renderError = this.renderError.bind(this);
    this.demoUserLogin = this.demoUserLogin.bind(this);
  }

  handleSubmit(e) { 
    e.preventDefault();
    this.props.loginUser(this.state);
  }

  componentWillUnmount() {
    console.log(`Component will unmount`);
    this.props.removeSessionErrors();
  }

  componentDidUpdate(prevProps){
    console.log(`componentDidUpdate Show: ${this.props.session.show}`);
    if(prevProps.session.show != this.state.show){
      this.setState({
        show: this.props.session.show
      });
    }
  }

  update(e) {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    if (this.props.errors.length != 0)
      this.props.removeSessionErrors();
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal(e) {
    e.stopPropagation();
    this.setState({ session: { show: false, errors: [] } });
    this.props.removeSessionErrors();
    this.props.history.goBack();
  }

  renderError() {
    this.props.errors.forEach(error => {
      toast.error(error);
    });
  }

  async demoUserLogin(e){
    e.preventDefault();

    const demoUser = {
      username: 'demouser',
      password: 'demouser'
    };

    const sleep = ms => new Promise(res => setTimeout(res, ms));

    document.getElementById('username').focus();
    for (let i = 1; i <= demoUser.username.length; i++) {
      this.setState({ username: demoUser.username.substr(0, i) });
      await sleep(50);
    }

    await sleep(250);

    document.getElementById('password').focus();
    for (let i = 1; i <= demoUser.password.length; i++) {
      this.setState({ password: demoUser.password.substr(0, i) });
      await sleep(50);
    }

    await sleep(250);

    document.getElementById('signin').click();
  }

  render() {
    this.renderError();
    debugger;
    return (
      <Modal show={this.props.session.show} handleClose={this.hideModal} >
        <div className="session-form">
          <h2>Sign In</h2>
          <div className="session-form-wrapper">
            <form onSubmit={this.handleSubmit} className="session-form-element">
              <div className="field cf">
                <input type="text" value={this.state.username} onChange={this.update} name="username" id="username"  placeholder="Username" />
              </div>
              <div className="field cf">
                <input type="password" value={this.state.password} onChange={this.update} name="password" id="password"placeholder="Password" />
              </div>
              <div className="field cf buttons">
                <input type="submit" value="Sign In" name="signin" id="signin" className="button" />
                <button onClick={this.demoUserLogin} className="button">Demo</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    )

  }

}

export default withRouter(Login);