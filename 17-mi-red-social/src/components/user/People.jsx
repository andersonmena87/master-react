import React from 'react';
import avatar from '../../assets/img/user.png';

export const People = () => {
  return (
    <section className="layout__content">

            <header className="content__header">
                <h1 className="content__title">Gente</h1>
            </header>

            <div className="content__posts">

                <article className="posts__post">

                    <div className="post__container">

                        <div className="post__image-user">
                            <a href="#" className="post__image-link">
                                <img src={avatar} className="post__user-image" alt="Foto de perfil" />
                            </a>
                        </div>

                        <div className="post__body">

                            <div className="post__user-info">
                                <a href="#" className="user-info__name">Victor Robles</a>
                                <span className="user-info__divider"> | </span>
                                <a href="#" className="user-info__create-date">Hace 1 hora</a>
                            </div>

                            <h4 className="post__content">Hola, buenos dias.</h4>

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
            </div>

            <div className="content__container-btn">
                <button className="content__btn-more-post">
                    Ver mas personas
                </button>
            </div>

        </section>
  )
}
