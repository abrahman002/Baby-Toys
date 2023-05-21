import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DataCard from './DataCard';

const Alltoys = () => {
    const loadedAllData=useLoaderData()
    return (
        <div>
            <h1 className='text-3xl text-center mb-3 '>All Toys</h1>
           
            <div className="overflow-x-auto w-full mt-5 mb-5">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                           
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            loadedAllData.map(data =><DataCard
                               key={data._id}
                               data={data}
                            ></DataCard>)
                        }
                    </tbody>
                </table>
            </div>
           
        </div>
    );
};

export default Alltoys;