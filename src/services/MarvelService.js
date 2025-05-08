import { useCallback } from "react";
import useHttp from "../hooks/http.hook"


const useMarvelService = () => {

    const {loading, request, error, clearError} = useHttp();


    const _apiBase = 'https://marvel-server-zeta.vercel.app/';
    const _apiKey = 'apikey=d4eecb0c66dedbfae4eab45d312fc1df';
    const _baseLimit = 9;

     
    const getAllCharacters = useCallback(async (limit) => {
        const res = await request(`${_apiBase}characters?limit=${limit}&${_apiKey}`);

        return res.data.results.map(_transformCharacter);
    }, [request]);

    const getCharacter = useCallback(async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);

        return _transformCharacter(res.data.results[0]);

    }, [request]); 


    const getAllComics = useCallback(async (limit)=>{
        const res = await request(`${_apiBase}comics?limit=${limit}&${_apiKey}`)
        return res.data.results.map(_transformComics);
    },[request]);

    const getComics = useCallback(async (id)=>{
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`)

        return res.data.results.map(_transformComics);
    },[request]);


    const _transformCharacter = (char) => {
        return {
            id: char.id,
            title: char.name,
            description: char.description,
            thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
    
    const _transformComics = (comics) => {
        return {
            id: comics.id,
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            title: comics.title,
            description: comics.description,
            price: comics.prices[0].price,
            pageCount: comics.pageCount,
            lang: comics.textObjects.languages,
        }
    }

    return {loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComics}
}

export default useMarvelService;