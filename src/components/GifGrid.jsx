import { formatString } from "../helpers/formatString";
import { useFetchGifs } from "../hooks/useFetchGifs";

import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs(category);
    
    return (
        <>
            <h3>{formatString(category)}</h3>
            { isLoading && <h3>Cargando...</h3> }
            <div className="card-grid">    
                {
                    images.map(image => (
                        <GifItem 
                            key={image.id} 
                            {...image}
                        /> 
                    ))
                }
            </div>    
        </>
    )
}
