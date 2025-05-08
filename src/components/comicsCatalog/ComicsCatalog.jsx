import { useEffect, useRef, useState, useCallback } from "react";
import useMarvelService from "../../services/MarvelService";
import "./style.scss"
import Spinner from "../spinner/spinner";
import Buttons from "../buttons/buttons";
import { Link } from "react-router-dom";
import ComicsItem from "../comicsItem/ComicsItem";

const ComicsCatalog = () => {
    const [limitComics, setLimitComics] = useState(8);
    const [comics, setComics] = useState(null);
    const [oneComics, setOneComics] = useState(null);   

    const [disabledBtn, setDisabledBtn] = useState(false);
    const [comicsEnded, setComicsEnded] = useState(false);

 
    const {clearError, error, getAllComics, getComics} = useMarvelService();
    
    let focusRef = null;

    const setInputRef = useRef((elem) => {
        focusRef = elem;
    });
    const focusItem = ()=>{
        if (focusRef){
            focusRef.focus();
        }
    }

    useEffect(() =>{
        clearError;
        getAllComics(limitComics).then(res =>{
            setComics(res);

            if(res.length % 8 != 0 ){
                setComicsEnded(true);
            }
        });
        setDisabledBtn(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[limitComics]);


    const onLoadBtn = () => {
        setDisabledBtn(true);
        setLimitComics(limitComics => limitComics + 8);
    }

    const onClickComics = useCallback((id) => {
        getComics(id).then(res => setOneComics(res));

    }, [getComics]);


    let spinner = null;
    let catalog = null;
    const errorMessage = error ? <ErrorMessage/> : null;
    comics != null ? 
        catalog = comics.map((item)=> {
            return <CatalogItem 
                onClick={onClickComics}
                id={item.id}
                key={item.id}
                comics={item}
                ref={setInputRef}
                focus={focusItem}
            />}):
        spinner =<Spinner/>

    if(oneComics) {

           return (
            <ComicsItem 
            comics={oneComics}
            onBack={() => {setOneComics(null)}}
            />
        )
    } else {
        return ( 
            <div className="container">
                <div className="comics-catalog__wrapper">
                        {errorMessage}
                        {spinner}
                    <div className="comics-catalog__items">
                        {catalog}
                    </div>
                </div>
                            
                <div className="comics-catalog__button">        
                    <Buttons 
                        onClick={onLoadBtn}
                        color="red" 
                        name="LOAD MORE" 
                        disabled={disabledBtn}
                        style={{"display": comicsEnded ? "none" : "block"}}
                    />
                </div>
            </div>

        );
    }
}
 
const CatalogItem = ({comics, id, onClick, ref}) => {

    const {title,thumbnail, price} = comics;
    
    return(
        <li ref={ref} onClick={() => onClick(id)}  tabIndex="0" className="comics-catalog__item">
            <Link to={`/comics/${id}`}>
                <div className="comics-catalog__img">
                    <img src={thumbnail} alt="" className="comics-catalog__img" />
                </div>

                <div className="comics-catalog__descr">{title}</div>
                <div className="comics-catalog__price">{`${price}$`}</div>
            </Link>

        </li>
    )
}



export default ComicsCatalog;