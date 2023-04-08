import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Global } from '../../helpers/Global';
import { getDataLocal } from '../../helpers/LocalStorage';
import useAuth from '../../hooks/useAuth';
import { PublicationList } from '../../components/publication/PublicationList';

export const Feed = () => {
    const params = useParams();
    const [publications, setPublications] = useState([]);
    const [page, setPage] = useState(1);
    const [more, setMore] = useState(true);
    const token = getDataLocal('token');
    const { auth } = useAuth();

    useEffect(() => {
        getPublications(1, false);
    }, [params]);

    const getPublications = async (nextPage = 1, showNews = false) => {

        if(showNews) {
            setPage(1);
            setPublications([]);
            setMore(true);
        }

        const request = await fetch(Global.url + 'publication/list/' + nextPage, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            }
        })

        const data = await request.json();

        if (data.status === 'success') {
            if (publications.length == 0) {
                setPublications(data.publications);
            } else {
                if(!showNews){
                    setPublications([
                        ...publications,
                        ...data.publications
                    ]);
                }else{
                    setPublications(data.publications);
                }

            }

            if (!showNews && publications.length >= data.total - data.publications.length) {
                setMore(false);
            }

            if (data.pages <= 1) {
                setMore(false);
            }

        }
    }

    return (
        <>

            <header className="content__header">
                <h1 className="content__title">Timeline</h1>
                <button className="content__button" onClick={ () => getPublications(1, true)}>Mostrar nuevas</button>
            </header>

            <PublicationList
                publications={publications}
                getPublications={getPublications}
                page={page}
                setPage={setPage}
                more={more}
                setMore={setMore}
            />

        </>
    )
}
