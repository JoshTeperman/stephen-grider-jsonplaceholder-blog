import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const UserHeader = ({ fetchUser, id }) => {
  const user = fetchUser(id);
  return <div>UserHeader</div>;
};

const mapStateToProps = state => {
  console.log(state.user);
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
