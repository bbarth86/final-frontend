import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

const AuthenticatedLinks = ({ currentUserId, history }) => {
  const logout = () => {
    window.localStorage.clear('assignment-tracker')
    history.push('/login')
    window.location.reload(true);
  }
  return (
    <ul className='nav justify-content-left'>
     <li className='nav-item'>
        <Link className='nav-link' to={`/users/${currentUserId}/assignments`}>Home</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/users'>All Students</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to={`/users/${currentUserId}/assignments/new`}>
          Create New Assignment
        </Link>
      </li>
      <li className='nav-item'>
        <button
          className='btn btn-link'
          onClick={logout}>
            Logout
        </button>
      </li>
    </ul>
  )
}

export default withRouter(AuthenticatedLinks)
