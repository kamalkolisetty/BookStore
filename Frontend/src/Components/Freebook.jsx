import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import  { useState, useEffect } from 'react';

const Freebook = () => {
    const [new_collection, setNew_collection] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4001/allitems')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch');
                }
                return res.json();
            })
            .then((data) => {
                setNew_collection(data);
                console.log(data); // Log fetched data
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError(error.message); // Set error state
            });
    }, []);

    const filterData = new_collection.filter((data) => data.category === "Free")
    console.log(filterData)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>

            <div className='w-full md:max-w-screen-2xl md:px-20 mx-16 px-4'>
                <div>
                    <h1 className='font-bold text-2xl pb-2'>Free Offered Courses</h1>
                    <p className='mb-1'>
                    Free courses provide accessible learning opportunities without financial barriers, empowering individuals to expand their knowledge and skills at no cost.
                    They democratize education, fostering personal growth and professional development worldwide.
                    </p>
                </div>

                <div>
                    <Slider {...settings}>
                     {
                        filterData.map((item,idx)=>(
                            <Cards item={item} key={idx}  />
                        ) )
                     }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Freebook