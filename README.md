# Product Hub: aA Final Project

A project that clone Product Hunt website. 

Product Hub is a platform for other user to post latest or popular product. Product could be just an App, a physical product, or anything else that is considered as a product! Members in Product Hub could give upvote to a product post, as well as to add discussion on all products posted by other users. User can update its own account detail, too.

## Technology Used
Product Hub is built with Ruby on Rails as the backend, and React-Redux as the frontend.

## Features and Functionality

#### User Authentication
User is able to login and signup. Some features are available only to authenticated users.

#### User Profile (only for current user)
Users are able to view and edit their own account information. Users can adjust profile picture.

#### Product Post
Authenticated users are able to create, update, and delete their product posts. User can create a product post by providing title, header, header image, and optional description.

#### Product Upvote
Similar to like, user can upvote a product, or cancel previous upvote. Each product post should have a button for user to click on in order to create or remove upvote.

#### Discussion
Authenticated users are able to comment on existing product posts in product post detail page.



## Future Implementation
##### Product Post Images
Product Post should contains banner/gallery images

##### Reply on Discussion (Nested Discussion)
Users will be able to reply to an existing discussion, as well as to reply a reply under a discussion, etc.

##### Discussion Upvote
Users will be able to upvote a discussion.

##### User Level
Users with special level will be able to add new product post. All other users will have read only permission.

##### Product and User Search
Users will be able to search for product posts based on keyword for title, header, or description. Users can also search for other user based on username.

##### Pagination
Users will be able to filter product or user result from search.  

##### User Profile (extended feature)
Users will be able to view other user's profile. On other user's profile, users are able to view published posts and upvoted posts.

##### Product Post Tag
Users with publish permission will be able to create tag to defines what type of tag a post should belongs to.

##### Product Share
Users will be able to share a product post using a generated link to redirect to product post detail.

##### Product Recommendation
Users will be able to ask question, and then other users will be able to reply with a recommended App in this platform.

##### Loading Mask
Whenever there is submittion, page should pops up a global loading icon with mask to prevent user from doing anything.


