import React from 'react';
import "../product/product.css"

const Product = ({img,link}) => {
  return <div className='p'>
            <div className="p-browser">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-circle"></div>
            </div>
            <a href={link}>
              <img src={img} alt="" className="p-image" target="_blank" rel="noreferrer" />
            </a>
        </div>;
};

export default Product;
