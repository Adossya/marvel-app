import "./style.scss"

const Banner = () => {
    return ( 
        <div className="container">
            <a href="https://www.marvel.com/comics/calendar?dateEnd=2025-04-19&dateStart=2025-04-13&tab=comic&variants=false">
                <div className="banner">
                    <div className="banner__wrapper">
                        <img src="./images/Avengers.png" alt="" className="banner__img--ave" />
                        <div className="banner__descr">New comics every week!
                        Stay tuned!</div>
                    </div>
                    <img src="./images/Avengers logo.png" alt="" className="banner__img--logo" />
                </div>
            </a>

        </div>

     );
}


export default Banner;