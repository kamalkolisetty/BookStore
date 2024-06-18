import React from 'react'

const Cards = ({ item }) => {
    return (
        <>

            <div>
                <div className=" card w-100 m-3 bg-base-100 shadow-xl hover:scale-105 duration-200 cursor-pointer dark:bg-slate-900 dark:text-white ">
                    <figure><img src={item.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category} </div>
                        </h2>
                        <p> {item.title} </p>
                        <div className="card-actions  justify-between">
                            <div className="badge badge-outline">${item.price} </div>
                            <div className="badge badge-outline  hover:bg-pink-500 hover:text-white duration-200  hover:p-4">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards