import React from 'react';
import Product from '../product/Product';
import "../productList/productList.css"
import { products } from '../../data';

const ProductList = () => {
  return <div className='pl'>
            <div className="pl-texts">
                <h1 className='pl-title'>My Creations</h1>
                <p className='pl-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, aliquid!</p>
            </div>
            <div className='pl-list'>
                {products.map(item=>(
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>

        </div>;
};

export default ProductList;
