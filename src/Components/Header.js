import React, { useState } from 'react'

const Header = () => {

    const [view, setView] = useState(false)

    const menuClicked = () => {
        console.log('Clicked');
        setView(!view)
    }

    return (
        <header className=' bg-slate-600'>
            <nav className=' py-5 '>
                <div className=' md:flex justify-between w-5/6 mx-auto md:max-w-7xl  '>
                    <div className=' flex justify-between '>
                        <div>
                            <span className="text-green-500 text-4xl font-bold"> Fruit </span>
                            <span className="text-slate-500 text-3xl font-thin "> Shop </span>
                        </div>

                        <div className='md:hidden flex'>
                            <button onClick={menuClicked} >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 hover:text-green-500" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={`flex md:block justify-center ${view ? 'block' : 'hidden'} `}>
                        <ul className='md:flex md:space-x-4 space-y-4 md:space-y-0 font-poppins text-slate-500 text-lg'>
                            <li className='menu border-b-4'>
                                <a href='#' className=' '> Fruits </a>
                            </li>
                            <li className='menu'>
                                <a href='#'> Vegetables </a>
                            </li>
                            <li className='menu'>
                                <a href='#'> More </a>
                            </li>
                            <li className='px-4 py-2'>
                                <a href='#'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 hover:text-green-500" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>


    )
}

export default Header