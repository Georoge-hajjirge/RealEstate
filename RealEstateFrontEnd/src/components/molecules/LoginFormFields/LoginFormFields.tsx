import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import InputField from "../../atoms/InputField";

interface LoginFormFieldsProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const LoginFormFields: React.FC<LoginFormFieldsProps> = ({ register, errors }) => {
  return (
    <>
      <InputField
        label="Email"
        type="email"
        name="email"
        register={register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/i,
            message: "Invalid email address",
          },
        })}
        error={errors.email?.message as string | undefined} 
      />

      <InputField
        label="Password"
        type="password"
        name="password"
        register={register("password", { required: "Password is required" })}
        error={errors.password?.message as string | undefined}  
      />
    </>
  );
};

export default LoginFormFields;
