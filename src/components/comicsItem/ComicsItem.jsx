import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';


import './style.scss';


const ComicsItem = () => {
    
    const {comicsId} = useParams();
    
    const {getComics} = useMarvelService();
    const [oneComics, setOneComics] = useState(null);   

    useEffect(() => {

        getComics(comicsId).then(res => setOneComics(res));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if(comicsId > 20 || comicsId < 0 || isNaN(comicsId) ){
        return <Navigate to='*'/>;
    }

    if(oneComics) {



        const {title, thumbnail, price, pageCount, description, lang}  = oneComics[0];

        return (

            <div className="container">

                <div className="comics__item">
                    
                    <div className="comics__item-img">
                        <img src={thumbnail} alt="Comics_name" className="comics__item-img" />
                    </div>
                    <div className="comics__wrapper">
                        <h2 className="comics__title">{title}</h2>  
                        <div className="comics__descr">{description}</div>
                        <div className="comics__pages">{`${pageCount} pages`}</div>
                        <div className="comics__lang">{`Language: ${lang}`}</div>
                        <div className="comics__price">{`${price}$`}</div>
                    </div>
                    <Link 
                        to='/comics'
                        className="comics__back">
                        Back to all
                    </Link>
                </div>
            </div>
        )
     } else {

        return(
            <div className="container">
                <div className="comics__item">
                    <Spinner/>
                </div>
            </div>
        )
        
     }

}
 
export default ComicsItem;