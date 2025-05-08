
import PropTypes from "prop-types";

import Buttons from "../buttons/buttons";
import Skeleton from "../skeleton/skeleton";


const CatalogHero = ({info}) => {
    if(!info){
        return (
            <div className="catalog__hero">
                <Skeleton/>
            </div>
            )

    }
    let {title, thumbnail, description, homepage, wiki, comics} = info;


    return ( 
  
        <div className="catalog__hero">
            <div className="catalog__hero-header">
                <div className="catalog__hero-img">
                    <img src={thumbnail} alt="Hero_img" className="catalog__hero-img" />
                </div>
                <div className="catalog__hero-wrapper">
                    <h3 className="catalog__hero-name">{title} </h3>
                    <Buttons src={homepage} color="red" name="HOMEPAGE"/>
                    <Buttons src={wiki} color="green" name="WIKI"/>
                </div>
            </div>
            <div className="catalog__hero-descr">{description}</div>
            <div className="catalog__hero-comics">
                Comics:
            </div>
            <div className="catalog__hero-items">
                {comics.length === 0 ? "No comics with your character" : null}
                {comics.map((item, i) => {
                    if (i >= 9) {
                        return;
                    } else {
                        return <div key={item} className="catalog__hero-item">
                                    {item}
                                </div>
                    }
                    }) 
                }


            </div>
        </div>

     );
}
 


export default CatalogHero;