import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import PostForm from './PostForm';
import PostFormReview from './PostReview';

class PostNew extends Component {
  state = { showPostReview: false };

  renderContent(){
    if(this.state.showPostReview){
      return <PostForm onCancel={() => this.setState({showPostReview: false})}/>;
    }

    return <PostForm onPostSubmit={() => this.setState({showPostReview: true})}/>;
  }

  render(){
    return(
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'postForm'
})(PostNew);