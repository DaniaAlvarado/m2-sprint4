import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import { actionRegisterAsync } from '../../redux/actions/userAction';

const Register = () => {

    const passwordRegex =
        /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

    const schema = yup.object({
        name: yup.string().required("Por favor ingresar su nombre completo"),
        email: yup
            .string()
            .email("Debe ingresar un email")
            .required("Por favor ingresar su email"),
        password: yup
            .string()
            .required("Por favor ingresar contraseña")
            .matches(passwordRegex, {
                message:
                    "La contraseña al menos debe tener un dígito, una minúscula, una mayúscula y al menos un caracter no alfanumérico",
            })
            .min(8, "La contraseña debe contener al menos 8 caracteres")
            .max(16, "La contraseña debe contener máximo 16 caracteres")
            .oneOf([yup.ref("repeatPassword")], "La contraseña ingresada no coincide"),
        repeatPassword: yup
            .string()
            .required("Por favor confirme la contraseña")
            .oneOf([yup.ref("password")], "La contraseña ingresada no coincide"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch();
    const { error, errorMessage } = useSelector((store) => store.user);

    const onSubmit = async (data) => {
        //const photoURL = await onUpLoadImage(data.photo[0]);
        const user = {
            name: data.name,
            email: data.email,
            password: data.password,
            //avatar: photoURL
        }
        dispatch(actionRegisterAsync(user));
        if (error) {
            Swal.fire("Oops!", `Ha ocurrido un error: ${errorMessage}`, "error");
        } else {
            Swal.fire("Good job!", "Tu cuenta se ha creado exitosamente!", "success");
        }
    };

    return (
        <div className='main'>
            <div className='account'>
                <h2>Create account</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        NAME
                        <input type="text" {...register("name")} />
                        {errors.name?.message}
                    </label>
                    <hr />
                    <label>
                        EMAIL
                        <input type="email" {...register("email")} />
                        {errors.email?.message}
                    </label>
                    <hr />
                    <label>
                        PASSWORD
                        <input type="password" {...register("password")} />
                        {errors.password?.message}
                    </label>
                    <hr />
                    <label>
                         REPEAT PASSWORD
                        <input type="password" {...register("repeatPassword")} />
                        {errors.repeatPassword?.message}
                    </label>
                    <hr />
                    <button type='submit'>Registrarse</button>
                </form>
            </div>
            <Link to='/'><button>Sing in</button></Link>
        </div>
    )
}

export default Register
