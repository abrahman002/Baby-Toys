import React, { useState } from 'react';
import Swal from 'sweetalert2'

const ToyModal = ({ toy,setAddToy }) => {

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const detail = form.detail.value;
        const updated = {
            price, quantity, detail
        }
        const url = `https://baby-toys-server-psi.vercel.app/addatoy?email=${user.email}`

        fetch(`https://baby-toys-server-psi.vercel.app/addatoy/${toy._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    
                    // Swal.fire({
                    //     title: 'Items Updated Successfull',
                    //     text: 'Do you want to continue',
                    //     icon: 'success',
                    //     confirmButtonText: 'Cool'
                    // })
                    fetch(url)
                        .then(res => res.json())
                        .then(data => {
                            setAddToy(data)
                        })
                }
            })

    }

    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-3" className="btn btn-warning">Update</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleUpdate}>
                        <div className='grid grid-cols-1 md:grid-cols-1 gap-6'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Price" name='price' className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available quantity</span>
                                </label>
                                <input type="text" name='quantity' placeholder="Available quantity" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Detail description</span>
                                </label>
                                <input type="text" name='detail' placeholder="Detail description" className="input input-bordered" required />
                            </div>
                        </div>
                        <input type="submit" value="Update" className='btn btn-success mt-5 w-full text-center' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ToyModal;



