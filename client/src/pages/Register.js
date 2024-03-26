import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector , useDispatch } from "react-redux";
import { signup } from '../redux/slices/userSlice';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";


const Register = () => {
    const { isAuth,errors: err } = useSelector(state => state.user)
    console.log(isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data);
      dispatch(signup(data))  }
  console.log("errors", errors);
  console.log("err",err);
  useEffect(() => {
      if(isAuth) navigate('/')
  }, [isAuth,navigate])
    

    return (
        <>
            <div id="mainn">
                <form onSubmit={handleSubmit(onSubmit)}><br/>
                    <legend><strong>Register & join us now!</strong></legend> <br/><br/>
                    <input type="text" placeholder="Name" {...register("name", {required: true, max: 20, min: 3})} />
                    <p className='error'>{errors.name && "This field is required!"}</p>
                    <input type="email" placeholder="Email" {...register("email", {required: true})} />
                    <p className='error'>{errors.email && "This email exist! Please try logging in."}</p>
                    <input type="password" placeholder="Password" {...register("password", {required: true})} />
                    <p className='error'>{errors.password && "Weak password!"}</p><br/>
                    <Button variant="success" type="submit" >Submit</Button>{' '}<br/><br/>
                </form>
            </div>
        </>
    )
}


export default Register
