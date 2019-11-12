import React, { Component } from 'react';
import TextInputGroup from './TextInputGroup'
import {Consumer} from '../Context';
import uuid from 'uuid';
import axios from 'axios';

class AddContacts extends Component {
    state={
        name:'',
        phone:'',
        email:'',
        errors:{}
    };
    
onChange=e=>this.setState({[e.target.name]:e.target.value});

onSubmit=async (dispatch,e)=>
{
e.preventDefault();

const {name,phone,email}=this.state;

if(name===''){

    this.setState({errors:{name:'name is required'}});

    return;       
}
if(phone===''){
    this.setState({errors:{phone:'phone is required'}});
    return;       
   }
   if(email===''){
    this.setState({errors:{email:'email is required'}});
    return;       
   }
const newContact={
id:uuid(),name,email,phone
};

// axios.post('https://jsonplaceholder.typicode.com/users',newContact)
// .then(res=>dispatch({type:'ADD_CONTACT',payload:newContact}));
const res = await axios.post('https://jsonplaceholder.typicode.com/users',newContact)

dispatch({type:'DELETE_CONTACT', payload :res.data});

};
render(){
    const {errors,name,phone,email}=this.state;
        
    return(
        <Consumer>
            {
                value=>{
                    const {dispatch}=value;
                    return(

<div className='card mb-3'>
<div className='card-header'>Add Contact</div>
 <div className='card-body'>
<form onSubmit={this.onSubmit.bind(this,dispatch)}>
<TextInputGroup 
label='Name'
placeholder='Please enter name'
name='name'
value={name}
type='text'
onChange={this.onChange}
error={errors.name}
/>
<TextInputGroup 
label='Email'
placeholder='Please enter Email'
name='email'
value={email}
type='email'
onChange={this.onChange}
error={errors.email}
/>
<TextInputGroup 
label='Phone'
placeholder='Please enter Phone'
name='phone'
value={phone}
error={errors.phone}
type='text'
onChange={this.onChange}
/>
<div className='form-group'>
<input className='form-control 
form-control-lg'
type='submit'
/>
         </div>
         
     </form>
     </div>           
            </div>
                    )
                }
            }
        </Consumer>
    );

}
}
export default AddContacts;