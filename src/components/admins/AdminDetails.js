import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import {compose} from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';
//import classnames from 'classnames';

class AdminDetails extends Component {
  render() {
      const { admin }=this.props;

      if(admin){
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
                        <Link to={`/admin/edit/${admin.id}`} className="btn btn-dark">
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
                    {admin.firstName} {admin.lastName}
                </h3>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-8 col-sm-6">
                            <h4>Client ID:{' '} <span className="text-secondary">{admin.id}</span></h4>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            {/* <h3 className="pull-right">
                                Balance: 
                                <span 
                                    className={classnames({
                                        'text-danger':client.balance > 0,
                                        'text-success': client.balance===0
                                    })}>
                                    ${parseFloat(client.balance).toFixed(2)}
                                </span>
                                <small>
                                    <a href="#!" onClick={()=>this.setState({ showBalanceUpdate: !this.state.showBalanceUpdate})}>
                                        <i className="fas fa-pencil-alt"></i>
                                    </a>
                                </small>
                            </h3>       
                            {balanceForm} */}
                        </div>
                    </div>

                    <hr />
                    <ul className="list-group">
                        <li className="list-group-item">Contact Email: {admin.email}</li>
                        <li className="list-group-item">Contact Phone: {admin.phone}</li>
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

AdminDetails.propTypes={
    firestore: PropTypes.object.isRequired
}

export default compose(
    firestoreConnect(props => [
        { collection:'admins', storeAs:'admin', doc: props.match.params.id}
    ]),
    connect(({ firestore: { ordered }}, props) => ({
      admin: ordered.admin && ordered.admin[0]
    }))
  )(AdminDetails);
  