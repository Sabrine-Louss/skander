import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector , useDispatch } from "react-redux";
import { signin } from '../redux/slices/userSlice';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

const Login = () => {

    const {errors: err , isAuth} = useSelector(state => state.user)
    const  dispatch = useDispatch()
    const navigate = useNavigate()


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data);
    dispatch(signin(data))};
    console.log("errors" , errors);
    console.log("err" , err);
    useEffect(() => {
        if (isAuth) navigate("/")
    }, [isAuth , navigate , dispatch])
    

    return (
        <>
            <div id="mainn"><br/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <legend><strong>Log In</strong></legend> <br/><br/>
                    <input type="email" placeholder="Email" {...register("email", {required: true})} />
                    <p className='error'>{errors.email && "This email doesn't match!"}</p>
                    <input type="password" placeholder="Password" {...register("password", {required: true})} />
                    <p className='error'>{errors.password && "Wrong password!"}</p><br/>
                    <Button variant="success" type="submit" >Submit</Button>{' '}<br/><br/>
                </form>
            </div>
        </>
    )
}

export default Login
