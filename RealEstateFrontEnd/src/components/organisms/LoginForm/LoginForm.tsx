import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ApiResponse, LoginFormData } from "../../../types/interfaces";
import { postRequest } from "../../../services/endpoints";
import Button from "../../atoms/Button";
import LoginFormFields from "../../molecules/LoginFormFields/LoginFormFields";
import { useLoader } from "../../../util/LoaderContext";
import { login } from "../../../features/auth";
import { useAppDispatch } from "../../../app/hooks";

const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { showLoader, hideLoader } = useLoader();
  const handleLogin = async (data: LoginFormData) => {
    showLoader(); 
    try {
      const response = await postRequest<ApiResponse>("/login", data);
      console.log('response',response)
      const token = response.data.token;
      const userId = response.data.userId;
      console.log('userfrom login',response)
      dispatch(login({ token, userId }));
      alert("Login successful");
      navigate("/home");
    } catch (error) {
      console.error(error);
      alert("Error during login");
    }finally{
      hideLoader();
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg w-96">
      <h1 className="text-2xl text-center font-bold mb-3">Login</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <LoginFormFields register={register} errors={errors} />
        <Button text="Login" type="submit" variant="primary" />
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        New User? <Link to="/register" className="text-blue-500 hover:underline">Create an account</Link>
      </p>
    </div>
  );
};

export default LoginForm;
