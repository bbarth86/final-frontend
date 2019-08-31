import React from 'react'
import { Route } from 'react-router-dom'

import * as users from "../../api/users";

import List from './List/List'
import AssignmentsContainer from '../assignments/Container'

export default class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: [],
      //loading: true
    }

    this.refreshUsers = this.refreshUsers.bind(this);
  }

  async componentDidMount() {
    const token = window.localStorage.getItem('assignment-tracker')
    if (token) {
      const { response } = await users.fetchUsers();
      this.setState({ users: response });
    }
  }

  async refreshUsers() {
    const { response } = await users.fetchUsers();
    this.setState({ users: response });
  }

  render () {
    const { currentUserId } = this.props;
    const { users } = this.state;
    return (
      <main className='container'>
        <Route path='/users' exact component={() => <List users={users} />} />
        <AssignmentsContainer currentUserId={currentUserId} users={users} refreshUsers={this.refreshUsers} />
      </main>
    )
  }
}
