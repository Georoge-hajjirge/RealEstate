import React from "react";
import { UseFormRegister, FieldErrors, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { RegistrationFormData } from "../../../types/interfaces";
import InputField from "../../atoms/InputField";
import SelectField from "../../atoms/SelectField";
import FileUpload from "../../atoms/fileUpdload";

interface RegisterFormFieldsProps {
  register: UseFormRegister<RegistrationFormData>;
  errors: FieldErrors<RegistrationFormData>;
  setValue: UseFormSetValue<RegistrationFormData>;
  watch: UseFormWatch<RegistrationFormData>;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RegisterFormFields: React.FC<RegisterFormFieldsProps> = ({ register, errors, setValue, watch, handleImageChange }) => {
  return (
    <div>
      <InputField 
        label="First Name" 
        type="text" 
        name="firstName" 
        value={watch("firstName")}
        onChange={(e) => setValue("firstName", e.target.value)}
        error={errors.firstName?.message}
      />

      <InputField 
        label="Last Name" 
        type="text" 
        name="lastName" 
        value={watch("lastName")}
        onChange={(e) => setValue("lastName", e.target.value)}
        error={errors.lastName?.message}
      />

      <InputField 
        label="Email" 
        type="email" 
        name="email" 
        value={watch("email")}
        onChange={(e) => setValue("email", e.target.value)}
        error={errors.email?.message}
      />

      <InputField 
        label="Password" 
        type="password" 
        name="password" 
        value={watch("password")}
        onChange={(e) => setValue("password", e.target.value)}
        error={errors.password?.message}
      />

      <InputField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={watch("confirmPassword")}
        onChange={(e) => setValue("confirmPassword", e.target.value)}
        error={errors.confirmPassword?.message}
      />

      <SelectField 
        label="Role"
        name="role"
        value={watch("role")}
        onChange={(e) => setValue("role", e.target.value)}
        options={[
          { value: "admin", label: "Admin" },
          { value: "buyer", label: "Buyer" },
          { value: "seller", label: "Seller" },
        ]}
        error={errors.role?.message}
      />

<InputField 
  label="Phone Number" 
  type="tel" 
  name="phoneNumber" 
  value={watch("phoneNumber") ? String(watch("phoneNumber")) : ""} 
  onChange={(e) => setValue("phoneNumber", e.target.value as unknown as number, { shouldValidate: true })} 
  error={errors.phoneNumber?.message}
/>


      <FileUpload onChange={handleImageChange} />
    </div>
  );
};

export default RegisterFormFields;
