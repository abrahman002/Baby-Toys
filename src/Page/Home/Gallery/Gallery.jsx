import React from 'react';
import './Gallery.css'
import { PhotoAlbum } from 'react-photo-album';


const Gallery = () => {
    const photos = [
        {
            src: "https://i.ytimg.com/vi/_dSL7zoUs6o/maxresdefault.jpg",
            width: 800,
            height: 600
        },
        {
            src: "https://www.babycenter.com.au/ims/2017/01/iStock-475269220_wide.jpg",
            width: 1600,
            height: 900
        },
        {
            src: "https://www.gentlenursery.com/wp-content/uploads/2017/12/non-toxic-toys-for-babies-and-toddlers-1600x900.jpg",
            width: 400,
            height: 400
        },
        {
            src: "https://cdn.shopify.com/s/files/1/1445/6088/files/Untitled_design_18.png?v=1676119977&width=3000",
            width: 400,
            height: 400
        },
        {
            src: "https://media.istockphoto.com/id/912734770/photo/baby-laughing-and-playing-with-toys-on-a-carpet.jpg?s=612x612&w=0&k=20&c=Gu7RC4rXEVlPb-Qfdr2FJMXTwtiFZztwseHOZZ1tuKo=",
            width: 400,
            height: 400
        },
        {
            src: "https://m.media-amazon.com/images/I/71XQs3DuOgL.jpg",
            width: 400,
            height: 400
        }
    ];
    return (
        <div className='mt-10 mb-10 md:'>
            <h1 className='text-3xl font-bold text-center mb-5  text-sky-400'>Image Gallery</h1>
            <div className='images'>
                <PhotoAlbum layout="rows" photos={photos} />

            </div>
        </div>
    );
};

export default Gallery;