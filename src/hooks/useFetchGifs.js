import { useEffect, useState } from "react";
import { fetchGifs } from "../helpers/fetchGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImagesArray = async (category) => {
        const images = await fetchGifs(category);
        setImages(images);
    }
    
    useEffect(() => {
        getImagesArray(category);
        setIsLoading(false);
    }, [])

    return {
        images,
        isLoading
    }
}
