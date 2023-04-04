import React, { useEffect, useState } from 'react'
import avatar from '../../assets/img/user.png'
import { Global } from '../../helpers/Global'
import { getDataLocal } from '../../helpers/LocalStorage'

export const People = () => {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [more, setMore] = useState(true)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers(1)
  }, [])

  const getUsers = async (nextPage = 1) => {

    // Efecto cargando
    setLoading(true)

    // Obtener token
    const token = getDataLocal('token')

    // Petición para sacar usuarios
    const request = await fetch(Global.url + 'user/list/' + nextPage, {
      method: 'GET',
      headers: {
        Authorization: token,
        'Content-type': 'application/json',
      },
    })

    const data = await request.json()

    // Crear estado para listarlos

    if (data.users && data.status === 'success') {
      if (users.length === 0) {
        setUsers(data.users)
      } else {
        let newUsers = [...users, ...data.users]

        setUsers(newUsers)
      }

      setLoading(false)

      // Paginación
      if (users.length >= data.total) {
        setMore(false)
      }
    }
  }

  const nextPage = () => {
    let next = page + 1
    setPage(next)

    // El estado page tiene un pequeño retraso por eso
    // se envia next como parametro en el getUsers
    getUsers(next)
  }

  return (
    <section className="layout__content">
      <header className="content__header">
        <h1 className="content__title">Gente</h1>
      </header>

      <div className="content__posts">
        {users.map((user) => (
          <article key={user._id} className="posts__post">
            <div className="post__container">
              <div className="post__image-user">
                <a href="#" className="post__image-link">
                  {user.image !== 'default.png' && (
                    <img
                      src={Global.url + 'user/avatar/' + user.image}
                      className="post__user-image"
                      alt="Foto de perfil"
                    />
                  )}

                  {user.image === 'default.png' && (
                    <img
                      src={avatar}
                      className="post__user-image"
                      alt="Foto de perfil"
                    />
                  )}
                </a>
              </div>

              <div className="post__body">
                <div className="post__user-info">
                  <a href="#" className="user-info__name">
                    {user.name} {user.surname}
                  </a>
                  <span className="user-info__divider"> | </span>
                  <a href="#" className="user-info__create-date">
                    {user.create_at}
                  </a>
                </div>

                <h4 className="post__content">{user.bio}</h4>
              </div>
            </div>

            <div className="post__buttons">
              <a href="#" className="post__button post__button--green">
                Seguir
              </a>

              {/* <a href="#" className="post__button">
        Dejar de seguir
    </a> */}
            </div>
          </article>
        ))}
      </div>

    { loading && <div>Cargando...</div>}

      {more && (
        <div className="content__container-btn">
          <button className="content__btn-more-post" onClick={nextPage}>
            Ver mas personas
          </button>
        </div>
      )}
    </section>
  )
}
