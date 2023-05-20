import React from 'react';

const ToyModal = () => {
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal" className="btn btn-success">open modal</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form >
                        <div className='grid grid-cols-1 md:grid-cols-1 gap-6'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Price" name='price' className="input input-bordered" />
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available quantity</span>
                                </label>
                                <input type="text" name='quantity' placeholder="Available quantity" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Detail description</span>
                                </label>
                                <input type="text" name='detail' placeholder="Detail description" className="input input-bordered" />
                            </div>
                           
                        </div>
                        <input type="submit" value="Update" className='btn btn-primary text-center w-full mt-5' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ToyModal;