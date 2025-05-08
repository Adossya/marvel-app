import "./style.scss";

const Skeleton = () => {
    return ( 

            <div className="skeleton">
                <p>Please select a character to see information</p>
                <div className="skeleton__wrapper">
                    <div className="skeleton__first-line">
                        <div className="skeleton__circle"></div>
                        <div className="skeleton__first"></div>
                    </div>
                    <div className="skeleton__line"></div>
                    <div className="skeleton__line"></div>
                    <div className="skeleton__line"></div>
                </div>
            </div>

    );
}
 
export default Skeleton;