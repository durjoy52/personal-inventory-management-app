import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import Card from '../Card/Card';

const MuskanGroup = () => {
    const [user,loading] = useAuthState(auth)
    const email = user?.email
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://enigmatic-chamber-33250.herokuapp.com/products/muskan')
        .then(res=>res.json())
        .then(data => {
            const filter = data.filter(product=> product.email === email)
            if(loading){
                return <div className='bg-red-500 text-green-300 absolute top-52'><p>Loading...</p></div>
            }
            setProducts(filter)
        })
    },[email,loading])
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

export default MuskanGroup;