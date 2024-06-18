import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import axios from 'axios'
import { AuthContext } from '../context/AuthProvider'
import { useContext } from 'react'
const Course = () => {
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

    if (error) {
        return <p>Error fetching data: {error}</p>; // Display error message
    }

    return (
        <div className='min-h-screen'>
            <div className='m-16 p-10'>
                <div className='mt-12 items-center justify-center'>
                    <h1 className='text-2xl font-semibold md:text-4xl text-center'>
                        We're delighted to have you <span className='text-pink-500'>Here!! 😊</span>
                    </h1>
                    <p className='mt-4 text-xl text-center'>
                        Cracked spines hold whispered tales, Adventures bloom on every page.
                        Knowledge blooms, a fragrant field, From history's depths to future's edge.
                        They paint a world beyond our walls, Fueling dreams with every line,
                        A silent friend, a constant guide.
                    </p>
                    <div className='flex justify-center mt-6'>
                        <Link to='/'>
                            <button className='bg-pink-500 text-white p-4 rounded-md'>
                                Back
                            </button>
                        </Link>
                    </div>
                    <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-6'>
                        {new_collection.map((item, idx) => (
                            <Cards item={item} key={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
