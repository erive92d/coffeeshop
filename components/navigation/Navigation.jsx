import React from 'react'
import Dropdown from './Dropdown'



export default function Navigation() {

    return (
        <div className='text-white text-xl flex justify-between bg-black bg-opacity-75 px-6 py-10'>
            <div>
                <h1 className='font-light text-2xl lg:text-4xl'>CoffeeShop</h1>
            </div>
            <ul className='hidden lg:flex gap-4 font-thin'>
                <li>
                    Menu
                </li>
                <li>
                    About
                </li>
                <li>
                    Order
                </li>
            </ul>
            <Dropdown />

        </div>
    )
}