import { useEffect, useState } from 'react';
import './category.css'
import Category from './Category';


const ShopByCategory = () => {

    const [categorys,setCategory]=useState([]);

    useEffect(()=>{
        fetch('babytoys.json')
        .then(res =>res.json())
        .then(data =>setCategory(data))
    },[])


    return (
        <div>
            <h1 className='text-3xl text-center font-bold text-sky-400'>Shop by category</h1>
           {
            categorys.map(category=><Category
               key={category.id}
               category={category}
            ></Category>)
           }
        </div>
    );
};

export default ShopByCategory;