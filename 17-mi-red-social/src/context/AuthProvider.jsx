import React, { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Global } from '../helpers/Global';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [ auth, setAuth ] = useState({});
    const { getDataLocal } = useLocalStorage();

    useEffect(() => {
        authUser();
    }, []);

    const authUser = async () => {
        // Sacar datos del usuario de localStorage
        const token = getDataLocal('token');
        const user = getDataLocal('user');

        console.log('user', user)
        console.log('token', token)
        // Comprobar si tengo el token y el user
        if (!token || !user) {
            return false;
        }

        // Petición Ajax al backend que compruebe el token 
        // y que devuelva todos los datos del usuario
        const userId = user.id;
        const request = await fetch(Global.url + 'user/user/' + userId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });

        const data = await request.json();

        // Setear estado de auth
        setAuth(data.user);
    }

    return (
        <AuthContext.Provider
            value={
                {
                    auth,
                    setAuth
                }
            }
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
