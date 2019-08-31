import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUserId, destroyAssignment, assignment, user, assignmentDestroyed }) => (
  <div className="card-footer text-muted d-flex justify-content-left">
    {currentUserId === user._id && (
      <>
        <Link
          className="btn btn-primary col px-md-3"
          to={`/users/${user._id}/assignments/${assignment._id}/edit`}
        >
        Edit Assignment
        </Link>
        <button
          className="btn btn-danger col px-md-3"
          onClick={() => 
          destroyAssignment(assignment)}
        >
          Delete Assignment
        </button>
      </>
    )}
  </div>
);