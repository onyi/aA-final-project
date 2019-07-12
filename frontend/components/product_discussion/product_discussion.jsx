import React from 'react';

import LoadingIcon from '../loading_icon';

import ProductDiscussionItem from './product_discussion_item';

import merge from 'lodash/merge';

import { Link, withRouter } from 'react-router-dom';


class ProductDiscussion extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      discussions: props.discussions,
      discussion: {
        body: '',
        productId: this.props.productId,
      },
      loading: true
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e){
    // console.log(`Update: ${e.currentTarget.name} ${e.currentTarget.value}`);
    let discussion = this.state.discussion;
    this.setState({
      discussion: 
        merge({}, discussion, {[e.currentTarget.name]: e.currentTarget.value})
    });
  }

  componentDidUpdate(prevProp) {
    if (this.props.loading !== this.state.loading) {
      this.setState({
        loading: this.props.loading
      });
    }
  }

  handleSubmit(e){
    e.preventDefault();
    // console.log(JSON.stringify(this.state.discussion));
    this.props.postDiscussion(this.state.discussion);
  }

  componentDidMount() {
    this.props.getDiscussions(this.props.productId);
  }

  render(){

    const { loading, discussions, currentUser } = this.props;

    // if (loading){
    if (!discussions){
      return (<LoadingIcon />);
    }
    else {
      return (
        <div className="product-discussion-container">
          <hr/>
          <h3>Discussion Section</h3>
          <hr />

          <div className="discussion-input-wrapper">
            <form className="discussion-form" onSubmit={this.handleSubmit}>
              <img className="profile-img-thumbnail"
                src={currentUser && currentUser.profile_img ? currentUser.profile_img : "https://static.thenounproject.com/png/538846-200.png"} />
              <input type="text" name="body" onChange={this.update} />
              { currentUser ? <input type="submit" className="button" value="Send" /> : <Link to="/login" ><button className="button">Send</button></Link> }
              
            </form>
          </div>

          <ul className="discussion-list">
            { discussions.map( discussion => 
                (
                  <div>
                    <ProductDiscussionItem key={discussion.id} discussion={discussion} isReply={!discussion.parent_discussion_id ? false : true} />
                    { discussion.discussionReplies.map( subdiscussion => (
                      <ProductDiscussionItem key={subdiscussion.id} discussion={subdiscussion} isReply={true} />
                    )) }
                  </div>
                )
              )
            }

          </ul>

        </div>
      )
    }

  }

}


export default withRouter(ProductDiscussion);