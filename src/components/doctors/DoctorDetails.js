import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import {compose} from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';
import classnames from 'classnames';

class DoctorDetails extends Component {
    constructor(props){
        super(props);
        //this.state = {counter : {parseInt(doctor.count)}}
         //this.increment = this.increment.bind(this);
    }
      increment=(e) => {
          e.preventDefault();
          this.setState({
              counter : this.state.counter + 1
          })
      }
    // onIncrease=(e)=>{
    //     this.setState({[e.count]: e.count+1})
    // }

    onDecrease=()=>{
        this.props.doctor.count++;
    }

  render() {
      const { doctor }=this.props;     

      if(doctor){
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
                        <Link to={`/doctor/edit/${doctor.id}`} className="btn btn-dark">
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
                    {doctor.firstName} {doctor.lastName}
                </h3>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-8 col-sm-6">
                            <h4>Client ID:{' '} <span className="text-secondary">{doctor.id}</span></h4>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <h3 className="pull-right">
                             
                                <span 
                                    className={classnames({
                                        'text-danger':doctor.count > 0,
                                        'text-success': doctor.count ===0
                                    })}>
                                    {parseInt(doctor.count)}
                                </span>
    
                                <small>
                                <button onClick={this.increment}>Patient No: {parseInt(doctor.count)}</button>
                                    {/* <a href="#!" onClick={()=>this.onIncrease}>
                                    <i class="fas fa-chevron-up"></i>                                    
                                    </a>
                                    <a href="#!" onClick={()=>this.onDecrease}>
                                    <i class="fas fa-chevron-down"></i>                                    
                                    </a> */}
                                </small>
                            </h3>       
                            {/* {balanceForm} */}
                        </div>
                    </div>

                    <hr />
                    <ul className="list-group">
                        <li className="list-group-item">Contact Email: {doctor.email}</li>
                        <li className="list-group-item">Contact Phone: {doctor.phone}</li>
                        <li className="list-group-item">Contact Phone: {doctor.totalCount}</li>
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

DoctorDetails.propTypes={
    firestore: PropTypes.object.isRequired
}

export default compose(
    firestoreConnect(props => [
        { collection:'doctors', storeAs:'doctor', doc: props.match.params.id}
    ]),
    connect(({ firestore: { ordered }}, props) => ({
        doctor: ordered.doctor && ordered.doctor[0]
    }))
  )(DoctorDetails);
  