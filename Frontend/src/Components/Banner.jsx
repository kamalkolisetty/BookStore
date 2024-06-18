import React from 'react'
import banner from '../assets/banner.png'
const Banner = () => {
    return (
        <>
            <div className="max-w-screen-2xl mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 dark:bg-slate-900 dark:text-white ">
                <div className='md:w-1/2 order-2 md:order-1 w-full mt-16 mb-6 md:mt-32'>
                    <div className='space-y-12'>
                        <h1 className='font-bold text-4xl'>Hello , Welcoming here to learn something <span className='text-pink-500' >new everyday!!!</span> </h1>
                        <p className='text-xl'>
                            Books hold a profound significance in shaping our intellect and imagination. Through books, we explore the depths of human knowledge, unraveling mysteries, and encountering profound truths. They ignite our curiosity, broaden our horizons, and inspire us to dream beyond limits.they are gateways to enlightenment, companions on life's journey, and custodians of wisdom. Embrace the power of books and embark on a voyage of discovery, where each page turns into an adventure of its own.
                        </p>

                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                    </div>
                    <button class=" mt-6 btn btn-secondary"> <a href="/">Get Started </a> </button>



                </div>
                <div className='order-1 md:order-2 md:w-1/2 w-full'>
                    <img src={banner} className='w-100 h-100 p-9 m-4' alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner