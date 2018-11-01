import React from 'react';
import Sidebar from './Sidebar';
import Admins from '../admins/Admins';
//import { Link } from 'react-router-dom';

export default  () => {
  return (
    <div>
      <div className="row">
          <div className="col-md-10">
            <Admins />
          </div>

          <div className="col-md-2">
            <Sidebar />
          </div>             
        </div>
      
    </div>
  )
}
