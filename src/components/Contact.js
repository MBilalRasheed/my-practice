import React, { Component } from 'react';
import {Consumer} from '../Context';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Contact extends Component {
    state={showContactInfo:false};
    onShowClick=e=>{
        this.setState({showContactInfo:!this.state.showContactInfo})
    }
    onDeleteClickBtn= async (id,dispatch)=>{
        // axios.delete(
        //     `https://jsonplaceholder.typicode.com/users/${id}`
        // )
        // .then(res => dispatch({type:'DELETE_CONTACT', payload : id}));
        await axios.delete( `https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({type:'DELETE_CONTACT', payload : id});
        
    }
  
    render() {
        const {showContactInfo}=this.state;
        const {id,name,phone}=this.props.contact;
        return (
        <Consumer>
            {value=>{
                const {dispatch}=value;                
                  return(
                    
                    <div className="card card-body mb-3">
                    <h4>{name}<i 
                onClick={this.onShowClick}  className="fa fa-times" />
                <i 
                onClick={this.onDeleteClickBtn.bind(this,id,dispatch)}
                className="fa fa-times" 
                style={{cursor:'pointer',float:'right',
                color:'red'}}/>
                <Link to={`EditContact/${id}`}>
                <i className='fas fa-pencil-alt'
                    style={{cursor:'pointer',float:'right',marginRight:'1rem'}}
                />
                </Link>

                </h4>
                 {showContactInfo?(
                     <ul  className="list-group">
                     <li  className="list-group-item">Name:{name}</li>
                     <li  className="list-group-item">Name:{phone}</li>
                     
                </ul>
                 ):null}  
                </div>
                  )
            }}
        </Consumer>
        );
    }
}

export default Contact;