import React from 'react'
import { Link } from 'react-router-dom';

export default () => {
  return (
    <Link to="/doctors/doctor/add" className="btn btn-success btn-block">
        <i className="fas fa-plus"></i> New
    </Link>
  )
}
