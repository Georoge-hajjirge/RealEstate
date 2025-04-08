import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 
import { RegistrationFormData } from "../../../types/interfaces";
import Button from "../../atoms/Button";
import { RegisterFormFields } from "../../molecules/RegisterFormFields";
import { postFormDataRequest } from "../../../services/endpoints"; 
import { useLoader } from "../../../util/LoaderContext";
const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<RegistrationFormData>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null); 
  const { showLoader, hideLoader } = useLoader();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ?? new DataTransfer().files; 
    if (files.length > 0) {
      setValue("image", files);
      setImageFile(files[0]); 
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(files[0]);
    }
  };

  const submitHandler = async (data: RegistrationFormData) => {
    showLoader();
    try {
      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("confirmPassword", data.confirmPassword);
      formData.append("role", data.role);
      formData.append("phoneNumber", data.phoneNumber.toString()); 
      if (imageFile) {
        formData.append("profilePictures", imageFile); 
      }

      const response = await postFormDataRequest("/register", formData);

      console.log("response", response);
      alert("Registration successful");
      navigate("/login"); 
    } catch (error: any) {
      if (error.response) {
        alert(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        alert("Network error, please try again");
      } else {
        alert("An error occurred");
      }
      console.error(error);
    } finally {
      hideLoader();
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <RegisterFormFields 
        register={register} 
        errors={errors} 
        setValue={setValue} 
        watch={watch} 
        handleImageChange={handleImageChange} 
      />
      {imagePreview && <img src={imagePreview} alt="Preview" className="w-full h-auto object-cover mb-4" />}
      <Button text={ "Register"} type="submit" />
    </form>
  );
};

export default RegisterForm;
