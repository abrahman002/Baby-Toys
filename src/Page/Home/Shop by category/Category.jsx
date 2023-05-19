import React, { useContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Category = ({category}) => {

    const {title,img,Rating,price}=category;
    return (
        <div>
            <div className='tabs mt-5 mb-10'>
                <Tabs>
                    <TabList className={'bg-pink-200 rounded text-2xl text-center'} >
                        <Tab>Army men</Tab>
                        <Tab>He-Man</Tab>
                        <Tab>Lego</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid lg:grid-cols-2 gap-5'>
                            <div className="card w-96 bg-base-100 shadow-sm mt-5">
                                <figure><img src={img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{title}</h2>
                                    <p>Price:$ {price}</p>
                                    <p>Rating: {Rating}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 bg-base-100 shadow-sm mt-5">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    {/* <TabPanel>
                        <div className='grid lg:grid-cols-2 gap-5'>
                            <div className="card w-96 bg-base-100 shadow-sm">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 bg-base-100 shadow-sm">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel> */}
                    {/* <TabPanel>
                        <div className='grid lg:grid-cols-2 gap-5'>
                            <div className="card w-96 bg-base-100 shadow-sm">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 bg-base-100 shadow-sm">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel> */}
                </Tabs>
            </div>
        </div>
    );
};

export default Category;