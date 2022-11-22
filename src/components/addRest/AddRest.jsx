import React from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import * as yup from "yup";
import {category, inputList} from '../../services/data';
import {fileUpLoad} from '../../services/fileUpload'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {actionAddRestaurantAsync} from '../../redux/actions/restaurantAction';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        const image = await fileUpLoad(data.image[0]);
        const newRestaurant = {
          name: data.name,
          category: data.category,
          description: data.description,
          before: data.before,
          time: data.time,
          image: image,
        };
        console.log(newRestaurant);
        dispatch(actionAddRestaurantAsync(newRestaurant));
        Swal.fire(
            "Se ha agregado el restaurante",
            "success"
          )      
        navigate("/home");
            
      };

    return (
    <div className="p-5">
      <h1>Agregar nuevo restaurante</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {inputList.map((item, index) => {
          if (item.type === "select") {
            return (
              <FloatingLabel key={index} label={item.label} className="mb-3">
                <Form.Select
                  aria-label="Default select example"
                  {...register(item.name)}
                >
                  <option value="">Open this select menu</option>
                  {category.map((item) => (
                    <option
                      key={item.value}
                      value={item.label}
                      className="text-capitalize"
                    >
                      {item.label}
                    </option>
                  ))}
                </Form.Select>
                <p>{errors[item.name]?.message}</p>
              </FloatingLabel>
            );
          }
          if (item.type === "textarea") {
            return (
              <FloatingLabel key={index} label={item.label} className="mb-3">
                <Form.Control as="textarea" {...register(item.name)} />
                <p>{errors[item.name]?.message}</p>
              </FloatingLabel>
            );
          }

          return (
            <FloatingLabel key={index} label={item.label} className="mb-3">
              <Form.Control
                type={item.type}
                size={item.type === "file" ? "sm" : ""}
                {...register(item.name)}
              />
              <p>{errors[item.name]?.message}</p>
            </FloatingLabel>
          );
        })}

        <Button variant="warning" type="submit" className="mb-3">
          Agregar Restaurante
        </Button>
      </Form>
    </div>
    )
}

export default AddRest
