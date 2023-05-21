import { useEffect, useState } from 'react';
import './category.css'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Category from './Category';


const ShopByCategory = () => {
   const [toys,settoys]=useState([])
   console.log(toys)
    const [categorys,setCategory]=useState("Army men");
    const handleCategory=category=>{
          setCategory(category)
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/category/${categorys}`)
        .then(res =>res.json())
        .then(data =>settoys(data))
    },[categorys])


    return (
        <div>
            <h1 className='text-3xl text-center font-bold text-sky-400'>Shop by category</h1>
            <div>
        <Tabs className="my-6">


          <TabList className="font-semibold bg-sky-500 rounded-lg p-4 text-white text-center">
            <Tab onClick={()=>handleCategory("Army men")}>Army men</Tab>
            <Tab onClick={()=>handleCategory("He-Man")}>He-Man</Tab>
            <Tab onClick={()=>handleCategory("Lego")}>Lego</Tab>
          </TabList>


          <TabPanel>
            <div className="w-full md:grid  md:grid-cols-2 gap-4 my-20  mb-5">
            {
              toys.map(toy=><Category
              key={toy?._id} 
              toy={toy}
              >
              </Category>)
            }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="w-full md:grid  md:grid-cols-2 gap-4 my-20 mb-5">
            {
              toys.map(toy=><Category
              key={toy?._id} 
              toy={toy}
              >
              </Category>)
            }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="w-full md:grid  md:grid-cols-2 gap-4 my-20 mb-5">
            {
              toys.map(toy=><Category
              key={toy?._id} 
              toy={toy}
              >
              </Category>)
            }
            </div>
          </TabPanel>
        </Tabs>
      </div>
        </div>
    );
};

export default ShopByCategory;