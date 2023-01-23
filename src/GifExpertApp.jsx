import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (data) => {
        if (categories.includes(data)) return;

        setCategories([data, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory  
                onNewCategory={onAddCategory} 
            />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category}/>
                    ))
                }
            </ol>
        </>
    )
}
