
import Character from '../character/character'
import Catalog from '../catalog/catalog'

import FunctionalErrorBoundary from '../ErrorBoundary/FunctionalErrorBoundary';


const MainPage = () => {
    return (
        <>
            <FunctionalErrorBoundary>
                <Character/>
            </FunctionalErrorBoundary>
            
            <FunctionalErrorBoundary>
                <Catalog /> 
            </FunctionalErrorBoundary>
        </>

      );
}
 
export default MainPage;