import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import avatar from '../../assets/img/user.png';
import { GetProfile } from '../../helpers/GetProfile';
import { Global } from '../../helpers/Global';
import { getDataLocal } from '../../helpers/LocalStorage';
import useAuth from '../../hooks/useAuth';

export const Profile = () => {
    const params = useParams();
    const [userProfile, setUserProfile] = useState({});
    const [counters, setCounters] = useState({});
    const [iFollow, setIFollow] = useState(false);
    const [publications, setPublications] = useState([]);
    const token = getDataLocal('token');
    const { auth } = useAuth();

    useEffect(() => {
        getDataUser();
        getCounters();
        getPublications(1);
    }, [params]);

    const getDataUser = async () => {
        let dataUser = await GetProfile(params.userId, setUserProfile);

        if (dataUser.followwing && dataUser.followwing._id) setIFollow(true);
    }

    const getCounters = async () => {
        const request = await fetch(Global.url + 'user/counters/' + params.userId, {
            method: 'GET',
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });

        const data = await request.json();

        if (data.status === 'success') {
            setCounters(data);
        }
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
            setIFollow(true);
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

        // Actualizar estado following
        if (data.status === 'success') {
            setIFollow(false);
        }

    }

    const getPublications = async (nextPage = 1) => {
        const request = await fetch(Global.url + 'publication/user/' + params.userId + '/' + nextPage, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            }
        })

        const data = await request.json();

        if (data.status === 'success') {
            setPublications(data.publications);
        }

        console.log(publications)
    }

    return (
        <>

            <header className="aside__profile-info">
                <div className="profile-info__general-info">
                    <div className="general-info__container-avatar">
                        {userProfile.image !== 'default.png' &&
                            <img src={Global.url + "user/avatar/" + userProfile.image} className="post__user-image" alt="Foto de perfil" />
                        }

                        {userProfile.image === 'default.png' &&
                            <img src={avatar} className="post__user-image" alt="Foto de perfil" />
                        }
                    </div>

                    <div className="general-info__container-names">
                        <div className="container-names__name">
                            <h1>{userProfile.name} {userProfile.surname}</h1>
                            {userProfile._id != auth._id
                                ?
                                iFollow
                                    ?
                                    <button className="content__button content__button--right post__button" onClick={() => unFollow(userProfile._id)}>Dejar de seguir</button>
                                    :
                                    <button className="content__button content__button--right" onClick={() => follow(userProfile._id)}>Seguir</button>
                                :
                                <></>
                            }
                        </div>
                        <h2 className="container-names__nickname">{userProfile.nick}</h2>
                        <p>{userProfile.bio}</p>
                    </div>
                </div>

                <div className="profile-info__stats">

                    <div className="stats__following">
                        <Link to={'/social/siguiendo/' + userProfile._id} className="following__link">
                            <span className="following__title">Siguiendo</span>
                            <span className="following__number">{counters.followind}</span>
                        </Link>
                    </div>
                    <div className="stats__following">
                        <Link to={'/social/seguidores/' + userProfile._id} className="following__link">
                            <span className="following__title">Seguidores</span>
                            <span className="following__number">{counters.followed}</span>
                        </Link>
                    </div>


                    <div className="stats__following">
                        <Link to={'/social/perfil/' + userProfile._id} className="following__link">
                            <span className="following__title">Publicaciones</span>
                            <span className="following__number">{counters.publications}</span>
                        </Link>
                    </div>

                </div>
            </header>

            <div className="content__posts">
                {publications.map(publication =>
                    <article key={publication._id} className="posts__post">

                        <div className="post__container">

                            <div className="post__image-user">
                                <a href="#" className="post__image-link">
                                    {userProfile.image !== 'default.png' &&
                                        <img src={Global.url + "user/avatar/" + userProfile.image} className="post__user-image" alt="Foto de perfil" />
                                    }

                                    {userProfile.image === 'default.png' &&
                                        <img src={avatar} className="post__user-image" alt="Foto de perfil" />
                                    }
                                </a>
                            </div>

                            <div className="post__body">

                                <div className="post__user-info">
                                    <a href="#" className="user-info__name">Victor Robles</a>
                                    <span className="user-info__divider"> | </span>
                                    <a href="#" className="user-info__create-date">Hace 1 hora</a>
                                </div>

                                <h4 className="post__content">{publication.text}</h4>

                            </div>
                        </div>

                        <div className="post__buttons">

                            <a href="#" className="post__button">
                                <i className="fa-solid fa-trash-can"></i>
                            </a>

                        </div>

                    </article>
                )}


            </div>

            <div className="content__container-btn">
                <button className="content__btn-more-post">
                    Ver mas publicaciones
                </button>
            </div>

        </>
    )
}
