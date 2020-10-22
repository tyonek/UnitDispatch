import React from 'react';
import { useForm } from 'react-hook-form';

export default function SignupForm() {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          ref={register({
            required: "First name is required",
            minLength: { value: 2, message: "First name must be at least 2 characters" },
            pattern: {
              value: /^\S*$/,
              message: "First name cannot contain spaces"
            }
          })} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          ref={register({
            required: "Last name is required",
            minLength: { value: 2, message: "Last name must be at least 2 characters" },
            pattern: {
              value: /^\S*$/,
              message: "Last name cannot contain spaces"
            }
          })} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          ref={register({
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })} />
        {errors.email && errors.email.message}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          ref={register({
            required: "Password is required",
            minLength: { value: 8, message: "Password must be 8 characters" },
            pattern: {
              value: /^\S*$/,
              message: "Password cannot contain spaces"
            }
          })} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <button type="submit">Sign Up</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  )
}