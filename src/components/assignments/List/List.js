import React from 'react'
import Actions from './List.Actions'

export default ({ currentUserId, destroyAssignment, user }) => {
  const assignments = user.assignments.map(assignment => (
    <div key={assignment._id} className='card'>
      <div className='card-body'>
        <span>
          <h5 className='card-title'>{assignment.title}</h5>
          <h6 className='card-subtitle mb-2 text-muted'>
          {assignment.score_earned === undefined ? ("TBD") : (<div>{assignment.score_earned} of {assignment.score_total}</div>)}
          </h6>
        </span>
        <p className='card-text'>{ assignment.description }</p>
        <a href='#' className='card-link'>{ assignment.url }</a>
      </div>
      <Actions currentUserId={currentUserId} destroyAssignment={destroyAssignment} assignment={assignment} user={user} />
    </div>
  ))

  return (
    <>
      { assignments }
    </>
  )
}
