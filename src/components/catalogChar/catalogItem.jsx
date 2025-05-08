import { forwardRef } from "react";

const CatalogItem = forwardRef(({ title, thumbnail, onClick }, ref) => {
    return (
        <div className="catalog__item" ref={ref} onClick={onClick} tabIndex="0">
            <img src={thumbnail} alt={title} className="catalog__item-img" />
            <h3 className="catalog__item-name">{title}</h3>
        </div>
    );
});

export default CatalogItem;