import React, { useState, useEffect, useRef, useCallback } from "react";
import { CSSTransition } from "react-transition-group";

import Buttons from "../buttons/buttons";
import useMarvelService from "../../services/MarvelService";
import CatalogItem from "../catalogChar/catalogItem";
import CatalogHero from "../catalogHero/CatalogHero";

import "./style.scss";
import Spinner from "../spinner/spinner";
import FunctionalErrorBoundary from "../ErrorBoundary/FunctionalErrorBoundary";


const Catalog = () => {
    
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState(null);
    const [limit, setLimit] = useState(9);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [charsEnded, setCharsEnded] = useState(false);  
    const [animate, setAnimate] = useState(false);

    const {getAllCharacters, getCharacter, clearError} = useMarvelService();
    
    const updateCatalog = useCallback(()=>{
        clearError;
        getAllCharacters(limit).
            then((characters) => {
                setCharacters(characters);
                setNewItemLoading(false);
                if(characters.length % 9 !=0){
                    setCharsEnded(true);
                }
            })

        }, [getAllCharacters, setCharacters, setNewItemLoading, setCharsEnded, limit, clearError]);

    useEffect(() => {  
        updateCatalog();
    }, [limit])
    
    let myRef = null;
    
    const setInputRef = useRef((elem)=>{
        myRef = elem;
    })

    const focusItem = () => {
        if (myRef){

            myRef.focus();
        }
    }

    const updateCharInfo = (id) => {
            updateInfo(id);
    }

    const updateInfo = (id) => {
        getCharacter(id)
            .then(info => {
                setInfo(info);
        })
    }

    const updateLoadMore = () => {
        setLimit(limit => limit + 9);
        setNewItemLoading(true);
    }

    let spinner = null;
    let catalog = null;
    characters != false ? 
        catalog = characters.map(item =>{
            return <CatalogItem 
                onClick={() => updateCharInfo(item.id)}
                key={item.title}
                title={item.title} 
                thumbnail={item.thumbnail}
                id={item.id}
                ref={setInputRef}
                focus={focusItem}
            />}) : 
        spinner = <Spinner/>;

    console.log(catalog);

    return (
        <main className="catalog">
            <img src="./images/magnetto.png" alt="Magnetto" className="catalog__magnetto" />
            <div className="container">
                <div className="catalog__wrapper">
                    <div className="catalog__list">
                            {spinner}
                        <div className="catalog__items">
                            {catalog}
                        </div>
                        <div className="catalog__btn-wrapper">
                            <Buttons 
                                onClick={() => updateLoadMore()} 
                                color="red" 
                                name="LOAD MORE" 
                                disabled={newItemLoading}
                                style={{"display": charsEnded ? "none" : "block"}}
                            />
                        </div>

                    </div>
                <FunctionalErrorBoundary>
                     <CatalogHero info={info} />
                </FunctionalErrorBoundary>    
                </div>
            </div>
        </main>
    )
}

export default Catalog;

