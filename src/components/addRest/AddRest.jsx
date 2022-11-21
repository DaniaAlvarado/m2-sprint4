import React from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import category from '../../services/data'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

const schema = yup.object({
    name: yup.string().required("Debe ingresar el nombre del restaurante"),
    category: yup.string().required("Debe seleccionar una categoría"),
    time: yup
        .string()
        .required("Debe incluir un horario del restaurante"),
    before: yup.string().required("Debe incluir el before del restaurante"),
});

const AddRest = () => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <div>

        </div>
    )
}

export default AddRest
