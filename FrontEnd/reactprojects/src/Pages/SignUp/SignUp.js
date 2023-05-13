import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-[800px] flex justify-center items-center">
      {" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center">Sign Up Here</h2>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: "Name is Required"
            })}
          />
          {errors.name && (
            <span className="text-red-800">{errors.name.message}</span>
          )}
        </div>
        <br />
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Email Pattern Not Matched"
              }
            })}
          />

          {errors.email && (
            <span className="text-red-800">{errors.email.message}</span>
          )}
        </div>
        <br />
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            {...register(
              "password",

              {
                required: "Password is Required",

                minLength: {
                  value: 8,
                  message: "Min lLength is 2"
                }
              }
            )}
          />
          {errors.password && (
            <span className="text-red-800">{errors.password.message}</span>
          )}
        </div>
        <button className="btn btn-info">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
