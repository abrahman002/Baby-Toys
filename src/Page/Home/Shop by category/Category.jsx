import { Link } from "react-router-dom";
import Toys from "./Toys";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Category = ({toy}) => {
    const {user}=useContext(AuthContext)

    const {toyName,price,rating,image}=toy

    return (
        <div >
            <div className="card card-compact w-96 bg-base-100 shadow-xl h-['300px'] md:mt-5">
                <figure><img style={{height:'150px'}} src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-sm">Name: {toyName}</h2>
                    <p>Price:$ {price}</p>
                    <p>Rating:$ {rating}</p>
                    <div className="card-actions justify-end">
                       {
                        user?<Toys toy={toy}></Toys>: <button className="btn"><Link to='/login'>View Details</Link></button>
                       }
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Category;