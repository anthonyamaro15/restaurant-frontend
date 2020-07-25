import React from 'react';
import {useForm} from 'react-hook-form';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";



const ResetPassword = () => {
   const {register, handleSubmit, errrors} = useForm();
   const {token} = useParams();
   const history = useHistory();

   const onSubmit = (value) => {
      const {password} = value;
      const newPass = {
            password
      }
     
      axiosWithAuth()
         .patch(`/api/auth/resetpassword/${token}`, newPass)
            .then(res => {
               console.log('res here ', res.data);
               alert(res.data.message);
               history.push('/')

            }).catch(err => {
               console.log(err);
            })
   }
   return (
      <div className="ResetPassword">
         <form onSubmit={handleSubmit(onSubmit)}>
           <label htmlFor="password">
            <input type="password" name="password" id="password" ref={register} placeholder="enter password" />
          <p className="error">erorr here</p>

           </label> 

             <label htmlFor="rpassword">
            <input type="password" name="rpassword" id="rpassword" ref={register} placeholder="re enter password" />
             <p className="error">erorr here</p>
           </label> 
         

           <button type="submit">reset</button>
         </form>
      </div>
   )
}

export default ResetPassword;