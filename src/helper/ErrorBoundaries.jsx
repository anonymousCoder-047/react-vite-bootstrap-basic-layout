import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useErrorBoundary = () => {
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  
    const resetApplication = useCallback(() => {
      setHasError(false);
      setError(null);
      navigate("/"); // Redirect to main page
    }, [navigate]);
  
    const ErrorBoundaryWrapper = useCallback(({ children }) => {
      try {
        if (hasError) {
          throw error;
        }
        return children;
      } catch (err) {
        console.error("Caught an error in component:", err);
        setHasError(true);
        setError(err);
        return (
            <div className="alert alert-danger alert-dismissible" role="alert">
                <h2>Something went wrong.</h2>
                <p>{err.message || "The application encountered an error."}</p>
                <button className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={resetApplication}>Go to Home</button>
            </div>
        );
      }
    }, [hasError, error, resetApplication]);
  
    return { ErrorBoundaryWrapper };
  };
  

const ErrorBoundaries = (WrappedComponent) => {
    return function (props) {
        const { ErrorBoundaryWrapper } = useErrorBoundary();
        return (
          <ErrorBoundaryWrapper>
            <WrappedComponent {...props} />
          </ErrorBoundaryWrapper>
        );
    };
};

export default ErrorBoundaries;
