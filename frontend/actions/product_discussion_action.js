export const RECEIVE_DISCUSSION = 'RECEIVE_DISCUSSION';
export const RECEIVE_DISCUSSIONS = 'RECEIVE_DISCUSSIONS';
export const REMOVE_DISCUSSION = 'REMOVE_DISCUSSION';

export const START_LOADING_DISCUSSIONS = 'START_LOADING_DISCUSSIONS';
export const FINISH_LOADING_DISCUSSIONS = 'FINISH_LOADING_DISCUSSIONS';

import * as ProductDiscussionApi from '../util/product_discussion.util';

import {
  renderError,
  removeErrorMessage
} from './error_action';

import {
  addNotification
} from './notification_action';

export const receiveDiscussion = (discussion) => {
  return {
    type: RECEIVE_DISCUSSION,
    discussion
  }
};

export const receiveDiscussions = (discussions) => {
  // console.log(`receiveDiscussions ${JSON.stringify(discussions)}`);
  return {
    type: RECEIVE_DISCUSSIONS,
    discussions
  }
};

export const removeDiscussion = (discussion) => {
  return {
    type: REMOVE_DISCUSSION,
    discussion
  }
}

export const startLoadingDiscussions = () => {
  return {
    type: START_LOADING_DISCUSSIONS
  }
};
export const finishLoadingDiscussions = () => {
  return {
    type: FINISH_LOADING_DISCUSSIONS
  }
};

export const postDiscussion = (discussion) => dispatcher => {
  // console.log(`ProductDiscussionApi  postDiscussion ${JSON.stringify(discussion)}`);

  return ProductDiscussionApi.postDiscussion(discussion)
    .then(discussion => {
      // console.log(`ProductDiscussionApi  postDiscussion result: ${JSON.stringify(discussion)}`);
      dispatcher(receiveDiscussion(discussion))
      dispatcher(addNotification("Successfully add discussion!"));
    })
    .catch(errors => dispatcher(renderError(errors)))
};

export const deleteDiscussion = (discussion) => dispatcher => {
  return ProductDiscussionApi.deleteDiscussion(discussion)
    .then(discussion => dispatcher(removeDiscussion(discussion)))
    .catch(errors => dispatcher(renderError(errors)))
};

export const getDiscussions = (productId) => dispatcher => {
  dispatcher(startLoadingDiscussions());
  return ProductDiscussionApi.getDiscussions(productId)
    .then( discussions => {
      // console.log(`ProductDiscussionApi  getDiscussions ${JSON.stringify(discussions)}`);

      dispatcher(receiveDiscussions(discussions)) ;
      dispatcher(finishLoadingDiscussions());
    })
    .catch(errors => dispatcher(renderError(errors)))
};

export const getDiscussion = (productId, discussionId) => dispatcher => {
  return ProductDiscussionApi.getDiscussion(productId, discussionId)
    .then(discussion => dispatcher(receiveDiscussion(discussion)))
    .catch(errors => dispatcher(renderError(errors)))
};


