import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
const TextInputGroup =({
    label,
    placeholder,
    name,
    error,
    value,
    type,
    onChange}
)=> {
        return (
<div className='form-group'>
<label htmlFor='name'>{label}</label>                
<input className={classnames('is-invalid form-control form-control-lg',{'is-valid':error})}
name={name}
type={type}
placeholder={placeholder}
value={value}
onChange={onChange}
/>
{error &&<div className='invalid-feedback'>this is wrong</div>}
         </div>
        );
        }
        
        
TextInputGroup.propTypes={
    name:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    error:PropTypes.string
}

TextInputGroup.defaultProps={
    type:'text'
}

export default TextInputGroup;