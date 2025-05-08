// import { Component } from "react";
// import ErrorMessage from "../errorMessage/errorMessage";


// class ErrorBoundary extends Component{
//     state = {
//         error: false
//     }

//     componentDidCatch(error, errorInfo){
//         console.log(error, errorInfo);
//         this.setState({
//             error: true
//         })
//     }


//     render(){
//         if (this.state.error){
//             return <ErrorMessage/>
//         } 
//         return this.props.children;
//     }

// }
 
// export default ErrorBoundary;

import { ErrorBoundary } from 'react-error-boundary';
import ErrorMessage from '../errorMessage/errorMessage';

function ErrorFallback({ error }) {
  console.log(error); // по аналогии с componentDidCatch
  return <ErrorMessage />;
}

function FunctionalErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => {
        console.log(error, info); // это аналог componentDidCatch
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

export default FunctionalErrorBoundary;
