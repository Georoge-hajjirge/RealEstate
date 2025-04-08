// import { createContext, ReactNode, useContext, useEffect, useState } from "react";
// import { AuthContextType } from "../types/authInterface";
// import { useNavigate } from "react-router-dom";
// import { getRequest } from "../services/endpoints";
// import { ProfileResponse } from "../types/interfaces";


// interface AuthProviderProps {
//   children: ReactNode;
// }
// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [user, setUser] = useState<ProfileResponse["data"] | null>(null);
//   const [token, setToken] = useState<string | null>(null);
//   const navigate = useNavigate();


//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     const storedUserId = localStorage.getItem("userId");

//     if (storedToken && storedUserId) {
//       setToken(storedToken);
//       setUser(null);
//       fetchUserData(storedUserId, storedToken);
//         }
//   }, []);

//   const fetchUserData = async (userId: string, token: string) => {

//     try {
//       const response = await getRequest<ProfileResponse>(`/profile/${userId}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       if (response && response.data) {
//         setUser(response.data);
//       }

//     }
//     catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   }
//   const login = (token: string, userId: string) => {
//     console.log('Logging in with token:', token, 'and userId:', userId);

//     setToken(token);
//     setUser(null);

//     localStorage.setItem('token', token);
//     localStorage.setItem('userId', userId);
//     fetchUserData(userId,token);
//     navigate('/home')

//   };
//   const logout = () => {
//     setToken(null);
//     setUser(null);
//     localStorage.removeItem('token');
//     localStorage.removeItem('userId');
//     navigate('/login');
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   )

// }
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// export default AuthProvider;
export{}