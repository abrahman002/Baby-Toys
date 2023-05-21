import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useLocation } from 'react-router-dom';
import SignleToy from '../SignleToy/SignleToy';

const DataCard = ({data}) => {
    // console.log(data)
    const {user}=useContext(AuthContext);
    const location=useLocation();

   const defaultname=user?.displayName;

    const {toyName,image,category,price,quantity}=data

    return (
        <tr>
           
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                        <div className="text-sm opacity-50">{category}</div>
                    </div>
                </div>
            </td>
            <td>
            <p>{defaultname}</p>
            </td>
            <td>
                <p>$ {price}</p>
            </td>
            <td>{quantity}</td>
            <th>
               {
                user?<SignleToy data={data}></SignleToy>: <button><Link to='/login' className='btn' state={{from:location}} replace >View Details</Link></button>
               }
               
            </th>
        </tr>

    );
};

export default DataCard;