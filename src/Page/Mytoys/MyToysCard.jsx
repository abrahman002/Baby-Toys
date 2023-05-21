import React from 'react';
import ToyModal from './ToyModal';



const MyToysCard = ({ toy ,handleDelete,setAddToy}) => {
    console.log(toy)

    const { _id,toyName, category, details, email, image, price, quantity, rating } = toy;


    return (

        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
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
                <p>$ {price}</p>
            </td>
            <td>{rating}</td>
            <th>
            <ToyModal
              toy={toy}
              setAddToy={setAddToy}
            ></ToyModal>
            </th>
        </tr>

    );
};

export default MyToysCard;