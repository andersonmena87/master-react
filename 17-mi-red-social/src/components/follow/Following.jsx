import React, { useEffect, useState } from 'react';
import { Global } from '../../helpers/Global';
import { getDataLocal } from '../../helpers/LocalStorage';
import { GetProfile } from '../../helpers/GetProfile';
import { UserList } from '../user/UserList';
import { useParams } from 'react-router-dom';

export const Following = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [more, setMore] = useState(true);
    const [following, setFollowing] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ userProfile, setUserProfile ] = useState({});
  
    const params = useParams();

    // Obtener token
    const token = getDataLocal('token');
  
    useEffect(() => {
      getUsers(1);
      GetProfile(params.userId, setUserProfile);
    }, []);
  
    const getUsers = async (nextPage = 1) => {
  
      // Efecto cargando
      setLoading(true);

      // Sacar userId de la URL
      const userId = params.userId;
      
      // Petición para sacar usuarios
      const request = await fetch(Global.url + 'follow/following/'+ userId + "/" + nextPage, {
        method: 'GET',
        headers: {
          Authorization: token,
          'Content-type': 'application/json',
        },
      })
  
      const data = await request.json();
  
      // Recorrer y limpiar follows para quedarme con followed
      let cleanUsers = data.follows.map(follow => follow.followed);
      data.users = cleanUsers;

      if (data.users && data.status === 'success') {
        if (users.length === 0) {
          setUsers(data.users);
        } else {
          let newUsers = [...users, ...data.users];
  
          setUsers(newUsers);
        }
  
        setFollowing(data.user_following);
        setLoading(false);
  
        // Paginación
        if (users.length >= (data.total - data.users.length)) {
          setMore(false);
        }
      }
    }

    return (
      <section className="layout__content">
        <header className="content__header">
          <h1 className="content__title">Usuarios que sigue {userProfile.name} {userProfile.surname}</h1>
        </header>
  
        <UserList
          users={users}
          getUsers={getUsers}
          following={following}
          setFollowing={setFollowing}
          loading={loading}
          more={more}
          page={page}
          setPage={setPage}
        />
  
      </section>
    )
}
