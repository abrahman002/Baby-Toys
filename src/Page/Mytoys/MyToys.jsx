import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToysCard from './MyToysCard';
import Swal from 'sweetalert2'

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


    const handleDelete = (id) => {
        const proceed =
            Swal.fire(
                {title: 'Are You sure you want to delete?',
                text: 'Do you want to continue?',
                icon: 'question',
                confirmButtonText: 'Cool'}
            )
        if (proceed) {
            fetch(`http://localhost:5000/addatoy/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Items Delete Successfull',
                            text: 'Do you want to continue',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        const remaining = addToy.filter(addToys => addToys._id !== id)
                        setAddToy(remaining)
                    }
                })
        }
    }
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
                                handleDelete={handleDelete}
                            ></MyToysCard>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyToys;