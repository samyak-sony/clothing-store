import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import './categories-preview.styles.scss';
const CategoriesPreview=()=>{
    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <div className="CategoriesPreview-container">
        {Object.keys(categoriesMap).map((title)=>{
            const products = categoriesMap[title];
            return(<CategoryPreview key={title} title={title} products={products}/>)
        })}
        </div>
    )
}
export default CategoriesPreview;