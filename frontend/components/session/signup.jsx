import React from 'react';

import {Modal} from '../../util/modal_util';

import {withRouter} from 'react-router-dom';
import { toast } from 'react-toastify';

import merge from 'lodash/merge';


class Signup extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      show: props.show,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  // componentDidMount(){
  //   console.log('Component mount');
  // }

  componentDidUpdate(prevProps){
    console.log(`Component updated, ${JSON.stringify(this.state.error)}`);
    
  }

  componentWillUnmount(){
    console.log(`Component will unmount`);
    this.props.removeSessionErrors();

  }

  handleSubmit(e){
    e.preventDefault();
    let user = merge({}, this.state);
    this.props.signupUser(user);
  }

  update(e){
    this.setState({ [e.currentTarget.name] : e.currentTarget.value });
    if (this.props.errors.length != 0)
      this.props.removeSessionErrors();
  }

  showModal(e){
    this.setState({ show: true })
  }

  hideModal(e){
    e.stopPropagation();
    this.setState({ session: { show: false, errors: [] }});
    this.props.removeSessionErrors();
    this.props.history.goBack();
  }

  renderError(){
    this.props.errors.forEach( error => {
      toast.error(error);
    });
  }

  render() {
    this.renderError();
    return (
      <Modal show={this.props.session.show} handleClose={this.hideModal} >
        <div >
          <h2>This is a signup form</h2>
          <div className="signup-form-content">
            <form onSubmit={this.handleSubmit}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label>Username: </label>
                      <input type="text" value={this.state.username} onChange={this.update} name="username" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Password: </label>
                      <input type="password" value={this.state.password} onChange={this.update} name="password" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Email: </label>
                      <input type="text" value={this.state.email} onChange={this.update} name="email" />
                    </td>
                  </tr>
                </tbody>
              </table>

                <input type="submit" value="Sign Up" />
            </form>

          </div>
        </div>

      </Modal>
    )
  }

}

export default withRouter(Signup);