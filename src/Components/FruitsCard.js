import React from 'react'

const FruitsCard = ({ fruit }) => {
    return (
        <div className=' group rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 duration-100 relative'>
            <img src={require(`../assets/${fruit.image}.jpeg`)} alt={`${fruit.image}`} className=' w-full h-52 object-cover'/>
            <div className='  font-poppins text-slate-500 m-1 p-1 space-y-1 flex flex-col items-center'>
                <span> {fruit.name} </span>
                <span> &#8377; {fruit.price} </span>
                <span className=' uppercase text-lime-400 text-sm text invisible group-hover:visible'> Add to cart </span>
            </div>
            <span className=' absolute top-3 right-2 bg-sky-300 text-white p-1 rounded-lg text-sm'>5% off</span>
            
        </div>
    )
}

export default FruitsCard