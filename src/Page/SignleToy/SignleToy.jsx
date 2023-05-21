import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignleToy = ({ data }) => {
    console.log(data)
    const { user } = useContext(AuthContext);
    const sellername = user?.displayName;
    const selleremail = user?.email;

    const { toyName, image, price, quantity, rating ,detail} = data

    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-3" className="btn">View Details </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="card ">
                        <figure><img src={image} alt="toy" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Toy Name:{toyName}</h2>
                            <p>Seller Name:{sellername}</p>
                            <p>Seller Email:{selleremail}</p>
                            <p>Price:${price}</p>
                            <p>Rating:{rating}</p>
                            <p>available quantity:{quantity}</p>
                            <div>
                                <p>Detail Description: {detail}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignleToy;
