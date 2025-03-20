import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ApiResponse, LoginFormData } from "../types/interfaces";
import { postRequest } from "../services/endpoints";
import { useAuth } from "../util/authProvider";


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
    const navigate = useNavigate();
    const { login } = useAuth();
    const handleLogin = async (data: LoginFormData) => {
        try {
            const response = await postRequest<ApiResponse>('/login', data);
      
                const token = response.data.token;
                const userId = response.data.userId;
                localStorage.setItem('token', token);
                localStorage.setItem('userId', userId);
       
                login(token, userId); 
            alert('Login successful');
            navigate('/home')
            console.log('response', response.data.token);
            console.log('response', response.data.userId);

        }
        catch (error) {
            console.error(error);
            alert('Error during login');
        }
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg w-96">
                <h1 className="text-2xl text-center font-bold  mb-3 ">Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 ">Email:</label>
                        <input
                            type="email"
                            {...register('email', {
                                required: 'email is required',
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/i,
                                    message: 'Invalid email address'
                                }
                            })}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 ">Password:</label>
                        <input
                            type="password"
                            {...register('password', {
                                required: 'password is required',

                            })}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    </div>
                    <button type="submit"
                        className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Login</button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">New User? <Link to="/register" className="text-blue-500 hover:underline">Create an account</Link></p>
            </div>
        </div>
    )
}

export default Login;