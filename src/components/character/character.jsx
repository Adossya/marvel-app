import { useState,useEffect } from 'react';

import Buttons from '../buttons/buttons';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

import useMarvelService from '../../services/MarvelService';

import './style.scss';

const Character = () => {

    const [char, setChar] = useState({});


    const {loading, error, getCharacter, clearError} = useMarvelService();

    useEffect(() => {
        updateChar();
        const timerId = setInterval(updateChar, 25000);

        return () => {
            clearInterval(timerId);
        }
    },[]);
   
    const onCharLoaded = (char) => {
         setChar(char);

    }



    const updateChar = () => {
        clearError;
        const id = Math.floor(Math.random()* 20 + 1);

        getCharacter(id).then(onCharLoaded);
        
    }

    const handleClick = () => {
        updateChar();

    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;

    const content = !(loading || error) && Object.keys(char).length != 0? <View  char={char} /> : null;

    return ( 
        <div className="character">
            <div className="container">
                <div className="character__wrapper">
                    {errorMessage}
                    {spinner}
                    {content}
                    <div className="random__wrapper">
                        <div className="random__description">
                            <p>Random character for today!</p>
                            <p>Do you want to get to know him better?</p>
                            <p>Or choose another one</p>
                        </div>
                        <div className="random__btn">
                            <Buttons onClick={handleClick} src="#" name="TRY IT" />
                        </div>
                        <img src="./images/shield.png" alt="Captian_America_shield" className="random__img-shield" />
                        <img src="./images/mjolnir.png" alt="Thor_mjolnir" className="random__img-mjolnir"/>
                    </div>
                </div>
            </div>
        </div>
        );


}

const View = ({char}) => {
    const {title, description, thumbnail, homepage, wiki} = char;

    let desc = description === '' ? 'There is no data about this character.' : description;
    return (
        <div className="character__info">
            <div className="character__main">
                <div className="character__img">
                    <img src={thumbnail} alt="Name_of_character" className="character__img"/>
                </div>
                <div className="character__hero">
                    <div className="character__text">
                        <h2 className="character__title">{title}</h2>
                        <div className="character__description">{desc}</div>
                    </div>

                    <div className="character__btns">
                        <Buttons src={homepage} name="homepage" />
                        <Buttons src={wiki} color="green" name="WIKI" />
                    </div>
                </div>
            </div>
        </div>
    )
}


  
 
export default Character;