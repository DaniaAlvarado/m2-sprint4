import React from 'react'
import Logo from '../img/logo.png';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import { actionLoginAsync, loginProviderAsync, } from '../../redux/actions/userAction';
import './LandR.scss';
import { loginProvider } from '../../services/data';

const schema = yup.object({
  email: yup
    .string()
    .email("Debe ingresar un email")
    .required("Por favor ingresar su email"),
  password: yup.string().required("Por favor ingresar contraseña"),
});

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { error, errorMessage } = useSelector((store) => store.userStore);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(actionLoginAsync(data));
    if (error) {
      Swal.fire("Oops!", `Ha ocurrido un error: ${errorMessage}`, "error");
    } else {
      Swal.fire("Good job!", "Bienvenido", "success");
    }
  };

  const handleLoginGoogle = (provider) => {
    dispatch(loginProviderAsync(provider))
  }

  return (
    <main className='main'>
      <div>
        <img src={Logo} alt="logo" />
        <h1>Sing in</h1>
        <p>Login or create an account with your
          phone number to start ordering</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Email
            <input type="Email" {...register("email")} />
            {errors.email?.message}
          </label>
          <hr />
          <label>
            Password
            <input type="password" {...register("password")} />
            {errors.password?.message}
          </label>
          <hr />
          <button type='submit'>Sing In</button>
        </form>
        <div>
          {loginProvider.map((provider, index) => (
            <img
              key={index}
              src={provider.image}
              alt={provider.name}
              style={{ width: "40px", cursor: "pointer" }}
              onClick={() => {
                handleLoginGoogle(provider.provider);
              }}
            />
          ))}
        </div>
      </div>
      <Link to='/register'><button>Register</button></Link>
    </main>
  )
}

export default Login
