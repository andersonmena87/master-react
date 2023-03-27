import React, { createContext, useEffect, useState } from 'react';
import { getDataLocal } from '../helpers/LocalStorage';
import { Global } from '../helpers/Global';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [ auth, setAuth ] = useState({});
    const [ counters, setCounters ] = useState({});
    const [ loading, setLoading ] = useState(true);
    
    useEffect(() => {
        authUser();
    }, []);

    const authUser = async () => {
        // Sacar datos del usuario de localStorage
        const token = getDataLocal('token');
        const user = getDataLocal('user');

        // Comprobar si tengo el token y el usuario
        if (!token || !user) {
            setLoading(false);
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

        // Petición para los contadores
        const requestCounters = await fetch(Global.url + 'user/counters/' + userId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });

        const dataCounters = await requestCounters.json();

        // Setear estado de auth
        setAuth(data.userStored);
        setCounters(dataCounters);
        setLoading(false);
    }

    return (
        <AuthContext.Provider
            value={
                {
                    auth,
                    setAuth,
                    counters,
                    setCounters,
                    loading
                }
            }
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
