import React from "react";

export default ({ users }) => {
  const listItems = users.map(user => (
    <div key={user._id} className='bg-light border-dark mb-3'>
      <div className='card-body'>
          <h5 className='card-title'>{user.firstName} {user.lastName}</h5>
          <p className='card-text'>{user.email}</p>
      </div>
  </div>
  ));

  return (
    <>
      <h1>All Students</h1>
      <ul>{listItems}</ul>
    </>
  );
};