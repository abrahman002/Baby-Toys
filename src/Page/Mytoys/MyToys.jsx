import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToysCard from './MyToysCard';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [addToy, setAddToy] = useState([])

    const url = `http://localhost:5000/addatoy?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAddToy(data)
            })
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-center'>My All Toys</h1>
            <div className="overflow-x-auto w-full mt-5 mb-5">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addToy.map(toy => <MyToysCard
                                key={toy._id}
                                toy={toy}
                            ></MyToysCard>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyToys;