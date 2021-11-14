import React from 'react';
import { useForm } from "react-hook-form";
import "./AddCars.css";


const AddCars = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="car">
            <h1>Add Cars</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input {...register("img",)} placeholder="image url" />
                <textarea {...register("description",)} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddCars;