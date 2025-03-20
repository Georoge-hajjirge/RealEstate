import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ApiResponse, RegistrationFormData } from "../types/interfaces";
import { postFormDataRequest,  } from "../services/endpoints";

// 'http://localhost:5000/api/auth/register'

const Register = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<RegistrationFormData>();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);  
    const submitHandler = async (data: RegistrationFormData) => {
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append("firstName", data.firstName);
            formData.append("lastName", data.lastName);
            formData.append("email", data.email);
            formData.append("password", data.password);
            formData.append("confirmPassword", data.confirmPassword);
            formData.append("role", data.role);
            formData.append("phoneNumber",  data.phoneNumber.toString());
            if (imageFile) {
                formData.append("profilePicture", imageFile); 
            }

            const response = await postFormDataRequest<ApiResponse>('/register', formData, 
            );

            console.log('response', response);
            alert('Registration successful');
            navigate('/login');
        } catch (error: any) {
            if (error.response) {
                alert(`Error: ${error.response.data.message}`);
            } else if (error.request) {
                alert('Network error, please try again');
            } else {
                alert('An error occurred');
            }
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            setImageFile(file); 
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 ">First Name:</label>
                        <input
                            type="text"
                            {...register('firstName', {
                                required: 'First name is required',
                                minLength: { value: 6, message: 'First name must be at least 6 characters long' }
                            })}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
                        <input
                            type="text"
                            {...register('lastName', {
                                required: 'Last name is required',
                                minLength: { value: 6, message: 'Last name must be at least 6 characters long' }
                            })}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/, message: 'Invalid email' }
                            })}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be at least 6 characters long' }
                            })}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
                        <input
                            type="password"
                            {...register('confirmPassword', {
                                required: 'Confirm Password is required',
                                validate: value => value === watch('password') || 'Passwords must match'
                            })}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role:</label>
                        <select
                            {...register('role', { required: 'Role is required' })}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value=''>Select a role</option>
                            <option value='admin'>Admin</option>
                            <option value='buyer'>Buyer</option>
                            <option value='seller'>Seller</option>
                        </select>
                        {errors.role && <span className="text-red-500 text-sm">{errors.role.message}</span>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number:</label>
                        <input
                            type="tel"
                            {...register('phoneNumber', {
                                required: 'Phone number is required',
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: 'Invalid phone number'
                                }
                            })}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image:</label>
                        <input
                            type="file"
                            {...register('image', { required: 'Image is required' })}
                            accept="image/*"
                            onChange={handleImageChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.image && <span className="text-red-500 text-sm">{errors.image.message}</span>}
                    </div>

                    {imagePreview && (
                        <div className="mb-4">
                            <img src={imagePreview} alt="Preview" className="w-full h-auto object-cover" />
                        </div>
                    )}

                    <button type="submit"
                        disabled={isLoading}
                        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Register</button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link></p>
            </div>
        </div>
    );
};

export default Register;
