import React, { useState } from 'react'

const Filters = () => {
    const [selectedButton, setSelectedButton] = useState(1)

    return (
        <section className=' text-base p-12 w-5/6 m-auto flex flex-col md:flex-row justify-around font-poppins'>
            <button onClick={() => setSelectedButton(1)} className={`filter-button ${selectedButton === 1 ? 'bg-green-400 text-white' : 'text-slate-500'}`}> Latest </button>
            <button onClick={() => setSelectedButton(2)} className={`filter-button ${selectedButton === 2 ? 'bg-green-400 text-white' : 'text-slate-500'}`}> Best Seller </button>
            <button onClick={() => setSelectedButton(3)} className={`filter-button ${selectedButton === 3 ? 'bg-green-400 text-white' : 'text-slate-500'}`}> Special </button>
        </section>
    )
}

export default Filters