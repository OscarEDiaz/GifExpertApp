import { useEffect, useState } from "react";
import { fetchGifs } from "../helpers/fetchGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImagesArray = async (category) => {
        const images = await fetchGifs(category);
        setImages(images);
        setIsLoading(false);
    }

    const removeImage = (id) => {
        const newImagesArray = images.filter(img => img.id !== id);
        setImages(newImagesArray);
    }
    
    useEffect(() => {
        getImagesArray(category);
    }, [])

    return {
        images,
        isLoading,
        removeImage
    }
}
