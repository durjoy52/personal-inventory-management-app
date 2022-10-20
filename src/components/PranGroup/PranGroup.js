import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const PranGroup = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products/pran')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="container mx-auto">
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-5 gap-6 justify-items-center'>
            
            {
                products.map(product=> <Card key={product._id} product={product}></Card>)
            }
        </div>
        </div>
    );
};

export default PranGroup;