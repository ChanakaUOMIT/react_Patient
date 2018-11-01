import React from 'react';
import { Link } from 'react-router-dom';

export default  () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to="/admins" className="nav-link">
                     Admin
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/doctors" className="nav-link">
                     Doctor
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/nurses" className="nav-link">
                     Nurse
                </Link>
            </li>

        </ul>
    </div>
  )
}
