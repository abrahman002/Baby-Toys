import React from 'react';
import { HiBeaker,HiOutlineSupport,HiOutlineGlobe,HiOutlineTruck } from "react-icons/hi";

const Delivery = () => {
    return (
        <div className='grid lg:grid-cols-4 bg-slate-200 p-5 rounded  '>
            <div className='lg:flex gap-2  '>
                <div className='text-4xl'>
                <HiBeaker />
                </div>
                <div>
                <h1>Free Shipping</h1>
                <p className='text-sm'>Free shipping on all UK orders</p>
                </div>
            </div>
            <div className='lg:flex gap-2 '>
                <div className='text-4xl'>
                    <HiOutlineSupport/>
                </div>
                <div>
                <h1>Money Guarantee</h1>
                <p className='text-sm'>We are guarantee to your money</p>
                </div>
            </div>
            <div  className='lg:flex gap-2 '>
                <div className='text-4xl'>
                  <HiOutlineGlobe/>
                </div>
               <div>
               <h1>Premium Support</h1>
                <p className='text-sm'>24 Hour online Support</p>
               </div>
            </div>
            <div  className='lg:flex gap-2 '>
                <div className='text-4xl'>
                  <HiOutlineTruck/>
                </div>
                <div>
                <h1>Black Friday</h1>
                <p className='text-sm'>Shocking discount on every</p>
                </div>
            </div>
        </div>
    );
};

export default Delivery;