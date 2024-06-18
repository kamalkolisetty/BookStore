import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser, setAuthUser] = useContext(AuthContext);

    const handleLogout = () => {
        try {
            setAuthUser(null); // Set authUser to null to log out the user
            localStorage.removeItem("Users");
            toast.success("Logout Success!");
        } catch (error) {
            console.error("Error during logout:", error);
            toast.error("Error during logout");
        }
    }

    return (
        <div>
            <button 
                onClick={handleLogout}
                className='ml-4 px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
            >
                Logout
            </button>
        </div>
    );
}

export default Logout;
