import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import {compose} from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';

class Admins extends Component {

  render() {
    const {admins}= this.props;
  //   const admins=[
  //     {
  //       id:'46646',
  //       firstName:'Bhanuka',
  //       lastName:'Rathnayaka',
  //       email:'bhanuka@gmail.com',
  //       phone:'0718899365',
  //     },

  //     {
  //       id:'214545',
  //       firstName:'Udara',
  //       lastName:'Wanasinhe',
  //       email:'udara@gmail.com',
  //       phone:'0718846578',
  //     },
  // ]

    if(admins){
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {' '}
                <i className="fas fa-users"></i> Admins{ ' '}
              </h2>
            </div>
            <div className="col-md-6">
                <h5 className="text-right text-secondary">
                    Total Admins{' '}
                    <span className="text-primary">
                        {admins.length}
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
                <th></th>
              </tr>
            </thead>

            <tbody>
              {admins.map(admin => (
                <tr key={admin.id}>
                  <td> {admin.firstName} {admin.lastName} </td>
                  <td> {admin.email} </td>
                  <td> {admin.phone} </td>
                  <td> 
                    <Link to={`/admin/${admin.id}`} className="btn btn-secondary btn-sm">
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

Admins.propTypes={
  firestore: PropTypes.object.isRequired,
  admins: PropTypes.array.isRequired
}

export default compose(
  firestoreConnect([{ collection : 'admins'}]),
  connect((state, props) => ({
    admins: state.firestore.ordered.admins
  }))
)(Admins);
