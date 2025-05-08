import ErrorMessage from "../errorMessage/errorMessage";
import { Link } from "react-router-dom";


const Page404 = () => {
    return ( 
        <>
            <div className="error-page" style={{minHeight: '40rem', backgroundColor: 'skyblue', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <div className="error-page__wrapper" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img src="images/404/404.png" alt="" className="error-page__message" />
                    <img src="images/404/Human.png" alt="" className="error-page__message" />
                </div>

                <Link to="/" style={{display: "inline-block", padding: '.1rem', backgroundColor: '', color: 'rgba(0,0,0,0.7)', textAlign: 'center', fontWeight: 'bold', fontSize: '2.4rem', marginTop: '3rem', border: '1px solid skyblue'}}>
                Back to main page
                </Link>
            </div>

            {/* <p style={{textAlign: "center", fontWeight: "bold", fontSize: "24px", marginTop: "10px"}}>Page doesn't exist</p> */}

        </>
     );
}
 
export default Page404;