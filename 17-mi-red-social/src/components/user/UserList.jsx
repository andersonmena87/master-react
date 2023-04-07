import React from 'react';
import avatar from '../../assets/img/user.png';
import { Global } from '../../helpers/Global';
import { getDataLocal } from '../../helpers/LocalStorage';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

export const UserList = ({ users, following, setFollowing, loading, more, page, setPage, getUsers }) => {
    const { auth } = useAuth();
    const token = getDataLocal('token');

    const nextPage = () => {
        let next = page + 1;
        setPage(next);

        // El estado page tiene un pequeño retraso por eso
        // se envia next como parametro en el getUsers
        getUsers(next);
    }

    const follow = async (userId) => {
        // Petición al backend para guardar el follow
        const request = await fetch(Global.url + 'follow/save', {
            method: 'POST',
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                followed: userId
            })
        });

        const data = await request.json();

        // Actualizar estado de following, agregando nuevo follow
        if (data.status === 'success') {
            setFollowing([
                ...following,
                userId
            ]);
        }
    }

    const unFollow = async (userId) => {
        // Petición al backend para borrar el follow
        const request = await fetch(Global.url + 'follow/unfollow/' + userId, {
            method: 'DELETE',
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });

        const data = await request.json();

        // Actualizar estado following, filtrando los datos para eliminar el antiguo userId
        if (data.status === 'success') {
            let newFollowing = following.filter(follow => follow !== userId);
            setFollowing(
                newFollowing
            );
        }

    }

    return (
        <>
            <div className="content__posts">
                {users.map((user) => (
                    <article key={user._id} className="posts__post">
                        <div className="post__container">
                            <div className="post__image-user">
                                <Link to={'/social/perfil/' + user._id} className="post__image-link">
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
                                </Link>
                            </div>

                            <div className="post__body">
                                <div className="post__user-info">
                                    <Link to={'/social/perfil/' + user._id} className="user-info__name">
                                        {user.name} {user.surname}
                                    </Link>
                                    <span className="user-info__divider"> | </span>
                                    <Link to={'/social/perfil/' + user._id} className="user-info__create-date">
                                        {user.create_at}
                                    </Link>
                                </div>

                                <h4 className="post__content">{user.bio}</h4>
                            </div>
                        </div>

                        {auth._id != user._id &&
                        
                            <div className="post__buttons">
                                {!following.includes(user._id) &&
                                    <button className="post__button post__button--green"
                                        onClick={() => follow(user._id)}>
                                        Seguir
                                    </button>
                                }
                                {following.includes(user._id) &&
                                    <button className="post__button"
                                        onClick={() => unFollow(user._id)}>
                                        Dejar de seguir
                                    </button>
                                }

                            </div>
                        }
                    </article>
                ))}
            </div>

            {loading && <div>Cargando...</div>}

            {more && (
                <div className="content__container-btn">
                    <button className="content__btn-more-post" onClick={nextPage}>
                        Ver mas personas
                    </button>
                </div>
            )}
            <br />
        </>

    )
}
