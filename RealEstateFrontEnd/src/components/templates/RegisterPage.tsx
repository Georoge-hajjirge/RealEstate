import React from "react";
import { RegisterForm } from "../organisms/RegisterForm";

const RegisterPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
