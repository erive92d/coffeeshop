import React from 'react'
import Dropdown from './Dropdown'
import Link from 'next/link'


export default function Navigation() {

    return (
        <div className=' text-xl flex justify-between border-b bg-stone-700 text-white px-6 py-10'>
            <div>
                <Link href="/" className='font-bold text-2xl lg:text-4xl'>CoffeeShop</Link>
            </div>
            <ul className='hidden lg:flex gap-4 font-thin'>
                <li>
                    Menu
                </li>
                <li>
                    About
                </li>
                <li>
                    <Link href="/order">
                        Order
                    </Link>
                </li>
            </ul>
            <Dropdown />

        </div>
    )
}
