import PropTypes from 'prop-types';

import { formatString } from "../helpers/formatString";
import { useFetchGifs } from "../hooks/useFetchGifs";

import { GifItem } from "./GifItem";



export const GifGrid = ({category}) => {
    const {images, isLoading, removeImage} = useFetchGifs(category);

    return (
        <>
            <h3>{formatString(category)}</h3>
            { isLoading && ( <h4>Cargando...</h4> ) }
            <div className="card-grid">    
                {
                    images.map(image => (
                        <GifItem 
                            key={image.id} 
                            onDeletePressed={removeImage}
                            {...image}
                        /> 
                    ))
                }
            </div>    
        </>
    )
}



GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}