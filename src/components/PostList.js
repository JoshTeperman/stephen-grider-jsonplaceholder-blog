import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    // console.log(this.props);
    const response = this.props.fetchPosts();
    console.log(response);
  }
  render() {
    return <div>PostList</div>;
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
