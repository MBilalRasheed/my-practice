import React, { Component } from 'react';
const Context =React.createContext();
 const reducer=(action,state)=>{
     switch(action.type){
         case 'DELETE_CONTACT':{
             return{
                 ...state,contacts:state.contacts.filter(contact=>
                    contact.id!==action.payload)
             };
             
         }
         case 'ADD_CONTACT':{
            return{
                ...state,contacts:[action.payload,...state.contacts]
            }
         }
         default:
             return state;
        }
 }
 class Provider extends Component{
     state={
        contacts: [
            {id:1,name='bilal1',phone:'11111',email:'bilal1@gmail.com'},
        {id:2,name='bilal2',phone:'11111',email:'bilal2@gmail.com'},
        {id:3,name='bilal3',phone:'11111',email:'bilal3@gmail.com'}
    ],dispatch:action=>this.setState=(reducer(action,state))
     }
     render(){
         <Context.Provider value={this.state}>
             {this.props.children}
         </Context.Provider>
     }
 }