import React, { useEffect, useState } from 'react';
import { Global } from '../../helpers/Global';
import { getDataLocal } from '../../helpers/LocalStorage';
import { UserList } from './UserList';

export const People = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [more, setMore] = useState(true);
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);

  // Obtener token
  const token = getDataLocal('token');

  useEffect(() => {
    getUsers(1);
  }, []);

  const getUsers = async (nextPage = 1) => {

    // Efecto cargando
    setLoading(true);

    // Petición para sacar usuarios
    const request = await fetch(Global.url + 'user/list/' + nextPage, {
      method: 'GET',
      headers: {
        Authorization: token,
        'Content-type': 'application/json',
      },
    })

    const data = await request.json();

    // Crear estado para listarlos

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
        <h1 className="content__title">Gente</h1>
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
