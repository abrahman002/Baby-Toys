import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

const AddAToy = () => {
    const { user } = useContext(AuthContext);
    // console.log(user)

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const toyName = form.toy.value;
        const image = form.image.value;
        const name = form.name.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const addToy = {
            toyName, image, name, email, category, price, rating, quantity, details
        }
        console.log(addToy)

        fetch('https://baby-toys-server-psi.vercel.app/addatoy', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successfully Toy Added ',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className='mt-10 mb-10'>
            <h1 className='text-center text-3xl font-bold  mb-10'>Add A Toy</h1>
            <form onSubmit={handleAddToy} >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name='toy' placeholder="Toy Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture URL</span>
                        </label>
                        <input type="text" name='image' placeholder="Picture URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='Name' defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <input type="text" placeholder="Sub-category" name='category' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name='price' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder="Available quantity" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <input type="text" name='details' placeholder="Detail description" className="input input-bordered " />
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary btn-block" value="Add A Toy" />
                </div>
            </form>
        </div>
    );
};

export default AddAToy;