import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import {compose} from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';

class Doctors extends Component {
  render() {
    const {doctors}= this.props;
  //   const doctors=[
  //     {
  //       id:'46646',
  //       firstName:'Palinda',
  //       lastName:'Meegasooriya',
  //       email:'pali@gmail.com',
  //       phone:'0718899335',
  //       field:'Surgery',
  //       totalCount:"100",
  //       count:'12'
  //     },

  //     {
  //       id:'214545',
  //       firstName:'Anuradha',
  //       lastName:'Herath',
  //       email:'anuradha@gmail.com',
  //       phone:'0789966445',
  //       field:'dental',
  //       totalCount:"75",
  //       count:'25'
  //     },
  // ]
  if(doctors){
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h2>
              {' '}
              <i class="fas fa-user-md"></i> Doctors{ ' '}
            </h2>
          </div>
          <div className="col-md-6">
            <h5 className="text-right text-secondary">
              Total Doctors{' '}
                <span className="text-primary">
                    {doctors.length}
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
              <th>Total Patient</th>
              <th>Count</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {doctors.map(doctor => (
              <tr key={doctor.id}>
                <td> {doctor.firstName} {doctor.lastName} </td>
                <td> {doctor.email} </td>
                <td> {doctor.phone} </td>
                <td> {doctor.totalCount} </td>
                <td> {doctor.count} </td>
                <td> 
                  <Link to={`/doctor/${doctor.id}`} className="btn btn-secondary btn-sm">
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

Doctors.propTypes={
  firestore: PropTypes.object.isRequired,
  doctors: PropTypes.array.isRequired
}

export default compose(
  firestoreConnect([{ collection : 'doctors'}]),
  connect((state, props) => ({
    doctors: state.firestore.ordered.doctors
  }))
)(Doctors);
