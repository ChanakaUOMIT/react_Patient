import React from 'react';
import Sidebar from './Sidebar';
import Nurses from '../nurses/Nurses';
//import { Link } from 'react-router-dom';

export default  () => {
  return (
    <div>
      <div className="row">
          <div className="col-md-10">
            <Nurses />
          </div>

          <div className="col-md-2">
            <Sidebar />
          </div>             
        </div>
      
    </div>
  )
}
