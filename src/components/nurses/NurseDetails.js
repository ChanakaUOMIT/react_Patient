import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import {compose} from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';
class NurseDetails extends Component {
  render() {
      const { nurse }=this.props;

      if(nurse){
          return(
            <div>
              <div className="row">
                <div className="col-md-6">
                    <Link to="/" className="btn btn-link">
                        <i className="fas fa-arrow-circle-left"></i>Back To Dashboard
                    </Link>
                </div>

                <div className="col-md-6">
                    <div className="btn-group float-right">
                        <Link to={`/admin/edit/${nurse.id}`} className="btn btn-dark">
                        Edit
                        </Link>
                        <button onClick={this.onDeleteClick} className="btn btn-danger" >
                            Delete
                        </button>
                    </div>
                </div>
              </div>
              <hr />
              <div className="card">
                <h3 className="card-header">
                    {nurse.firstName} {nurse.lastName}
                </h3>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-8 col-sm-6">
                            <h4>Client ID:{' '} <span className="text-secondary">{nurse.id}</span></h4>
                        </div>
                        <div className="col-md-4 col-sm-6">

                        </div>
                    </div>

                    <hr />
                    <ul className="list-group">
                        <li className="list-group-item">Contact Email: {nurse.email}</li>
                        <li className="list-group-item">Contact Phone: {nurse.phone}</li>
                    </ul>
                </div>
              </div>
            </div>
          );
      }else{
          return <Spinner />
      }
  }
};

NurseDetails.propTypes={
    firestore: PropTypes.object.isRequired
}

export default compose(
    firestoreConnect(props => [
        { collection:'nurses', storeAs:'nurse', doc: props.match.params.id}
    ]),
    connect(({ firestore: { ordered }}, props) => ({
        nurse: ordered.nurse && ordered.nurse[0]
    }))
  )(NurseDetails);
  