import React from 'react';
import Product from '../product/Product';
import "../productList/productList.css"
import { products } from '../../data';

const ProductList = () => {
  return <div className='pl'>
            <div className="pl-texts">
                <h1 className='pl-title'>Create and learn</h1>
                <p className='pl-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, impedit. Laboriosam sunt numquam distinctio. At incidunt aspernatur maxime minima inventore reprehenderit delectus, eveniet exercitationem dicta maiores iste consectetur voluptates voluptatibus.</p>
            </div>
            <div className='pl-list'>
                {products.map(item=>(
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>

        </div>;
};

export default ProductList;
