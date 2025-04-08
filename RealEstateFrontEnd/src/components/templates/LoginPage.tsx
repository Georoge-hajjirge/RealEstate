import React from "react";
import LoginForm from "../organisms/LoginForm/LoginForm";
import { DisplayLoader } from "../atoms/DisplayLoader";
import { useLoader } from "../../util/LoaderContext";

const LoginPage: React.FC = () => {
  const { isLoading } = useLoader();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        {isLoading && <DisplayLoader />} 
      <LoginForm/>
    </div>
  );
};

export default LoginPage;
