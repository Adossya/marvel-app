import {useState, useCallback} from "react";

const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url) => {
        setLoading(true);

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Алярм`);
            }

            const data = await response.json();

            setLoading(false);
            return data;

        } catch(e){
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, []);

    const clearError = useCallback(()=>setError(null),[]);

    return {loading, request, error, clearError};

}

export default useHttp;