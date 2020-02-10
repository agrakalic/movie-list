import React from 'react';

export const FormControlGroup = ({ label, children }) => {
  
  return (
    <div className="form__group">
      <label>{label}</label>
      {children}
    </div>
  )

}

export const FormInput = ({ id, name, type = 'text', value, placeholder, onChange = ()=>{} }) => {
  
  return (
    <input id={id} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} />
  )

}

export const FormSelect = ({ id, name, options, value, onChange = ()=>{} }) => {
  
  return (
    <select id={id} name={name} value={value} onChange={onChange}>
      <option value="">Select one...</option>
      {options.map((option,key) => (        
        <option key={key}>{option}</option>      
      ))}
    </select>
  )

}

export const FormSelectTrueFalse = ({ id, name, value, onChange = ()=>{} }) => {
  
  return (
    <select id={id} name={name} value={value} onChange={onChange}>
      <option value="">Select one...</option>
      <option value="false">No</option>
      <option value="true">Yes</option>
    </select>
  )

}

export const FormActions = ({ children }) => {
  
  return (
    <div className="form__actions">
      {children}
    </div>
  )

}

export const FormButton = ({ type = 'submit', text }) => {
  
  return (
    <button type={type}>{text}</button>
  )

}

