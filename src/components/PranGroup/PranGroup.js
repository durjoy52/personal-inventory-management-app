import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const PranGroup = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/pranGroup')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='grid grid-cols-4 gap-4 justify-items-center'>
            
            {
                products.map(product=> <Card key={product._id} product={product}></Card>)
            }
        </div>
    );
};

export default PranGroup;