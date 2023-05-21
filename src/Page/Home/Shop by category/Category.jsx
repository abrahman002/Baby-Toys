import Toys from "./Toys";

const Category = ({toy}) => {

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
                        <Toys toy={toy}></Toys>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Category;