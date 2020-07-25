import React from 'react';
import {useForm} from 'react-hook-form';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";



const ResetPassword = () => {
   const {register, handleSubmit, errrors} = useForm();
   const {token} = useParams();
console.log('here ', token);

   const onSubmit = (value) => {
      console.log(value);
   }
   return (
      <div className="ResetPassword">
         <form onSubmit={handleSubmit(onSubmit)}>
           <label htmlFor="password">
            <input type="password" name="password" id="password" ref={register} placeholder="enter password" />
          <p className="error">erorr here</p>

           </label> 

             <label htmlFor="rpassword">
            <input type="password" name="password" id="rpassword" ref={register} placeholder="re enter password" />
             <p className="error">erorr here</p>
           </label> 
         

           <button type="submit">reset</button>
         </form>
      </div>
   )
}

export default ResetPassword;