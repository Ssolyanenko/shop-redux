import React, { useState } from 'react';
import s from './StylesForm.module.css';
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";
import {admin} from "../admin/admin";


const Form = ({ close, logIn }) => {
  const [error, setError] = useState(null);


  const handleSubmit = (event) => {

      event.preventDefault();

      if ( event.target.userName.value === admin.name &&
          event.target.password.value === admin.password) {
          logIn();
          setError(null);

      } else {
          setError('Details do not match')
      }

  }
  return (
    <form onSubmit={handleSubmit}>
      <MyInput
        label='user'
        labelFor='login'
        type='text'
        id='userName'
        placeholder='andersen'


      />

      <MyInput
        label='Password'
        labelFor='password'
        type='password'
        id='password'
        placeholder='andersen'
        current-password='1234'

      />

      <p>{error}</p>

      <div className={s.btn}>
        <MyButton onClick={() => close()} type='button'>
          Cancel
        </MyButton>
        <MyButton  type='submit'>
          Confirm
        </MyButton>
      </div>
    </form>
  );
};

export default Form;
