import React from 'react';

const MyToysCard = ({ toy }) => {
    console.log(toy)

    const { toyName, category, details, email, image, price, quantity, rating } = toy;
    return (

        <tr>
            <th>
                <button className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-16 h-16">
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
                <p>$ {price}</p>
            </td>
            <td>{rating}</td>
            <th>
                <button className="btn btn-warning">Update</button>
            </th>
        </tr>

    );
};

export default MyToysCard;