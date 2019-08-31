import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    const user = this.props.fetchUser(this.props.userId);
    // console.log(user);
  }
  // const ({ fetchUser, id }) = this.props

  render() {
    let user;
    console.log(this.props.users);
    // const user = this.props.users.find(
    //   user => user.userId === this.props.userId
    // );
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = state => {
  return { user: state.users };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
