import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className=" h-[800px] flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email must be Strong"
              }
            })}
            placeholder="First name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>{" "}
        <br />
        {errors.email && (
          <span className="text-red-700">{errors.email.message}</span>
        )}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is Required",
              minLength: {
                value: 5,
                message: "Minimum Length of Password is 5"
              },
              pattern: {
                // value: /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/,
                message: "Password doesn't match pattern"
              }
            })}
            placeholder="Enter Password"
            className="input input-bordered w-full max-w-xs"
          />
        </div>{" "}
        <br />
        {errors.password && (
          <span className="text-red-700">{errors.password.message}</span>
        )}
        <br />
        <button className="btn btn-info">Submit</button>
      </form>
    </div>
  );
};

export default Login;
