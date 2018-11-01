import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import {compose} from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';

class Nurses extends Component {
    render() {
      const {nurses}= this.props;
    //   const nurses=[
    //     {
    //       id:'46646',
    //       firstName:'Sadheera',
    //       lastName:'Mahannama',
    //       email:'sadhee@gmail.com',
    //       phone:'0778899235',
    //       status:"Active",
    //       duty:'7-5'
    //     },
  
    //     {
    //       id:'214545',
    //       firstName:'Dulanga',
    //       lastName:'Heshan',
    //       email:'dulanga@gmail.com',
    //       phone:'0779944568',
    //       status:"Off",
    //       duty:'6-2'
    //     },
    // ]
    if(nurses){
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {' '}
                <i class="fas fa-notes-medical"></i> Nurses{ ' '}
              </h2>
            </div>
            <div className="col-md-6">
              <h5 className="text-right text-secondary">
                    Total Nurses{' '}
                    <span className="text-primary">
                        {nurses.length}
                    </span>
                </h5>
            </div>
          </div>
  
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Duty</th>
                <th></th>
              </tr>
            </thead>
  
            <tbody>
              {nurses.map(nurse => (
                <tr key={nurse.id}>
                  <td> {nurse.firstName} {nurse.lastName} </td>
                  <td> {nurse.email} </td>
                  <td> {nurse.phone} </td>
                  <td> {nurse.status} </td>
                  <td> {nurse.duty} </td>
                  <td> 
                    <Link to={`/nurse/${nurse.id}`} className="btn btn-secondary btn-sm">
                      <i className="fas fa-arrow-circle-right"></i> Details
                    </Link>                   
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }else{
      return <Spinner />
    }  
    }
  }


  Nurses.propTypes={
    firestore: PropTypes.object.isRequired,
    doctors: PropTypes.array.isRequired
  }
  
  export default compose(
    firestoreConnect([{ collection : 'nurses'}]),
    connect((state, props) => ({
      nurses: state.firestore.ordered.nurses
    }))
  )(Nurses);
  