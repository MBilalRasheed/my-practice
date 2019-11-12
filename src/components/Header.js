import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
    render() {
        const {branding}=this.props;
        return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className='container'>
            <a href="/" className='navbar-brand'>{branding}</a>
            </div>
<ul className='navbar-nav mr-auto'>
<li className='nav-item'>
<Link to='/' className='nav-link' > <i className='fas fa-home'/>home</Link>
    
         </li>
         <li className='nav-item'>
     <Link to='/contact/contacts' className='nav-link' >
     <i className='fas fa-plus'/>contact</Link>

            </li>
         <li className='nav-item'>
     <Link to='/about' className='nav-link' >
     <i className='fas fa-question'/>about</Link>

            </li>
            </ul>
            </nav>
            </div>
           
        );
    }
}

export default Header;
