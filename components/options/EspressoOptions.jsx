"use client"

import { useState } from "react"

const sizeList = [
    "large", "medium", "small"
]

export default function EspressoOptions({ typeOfDrink }) {

    const [orderDetail, setOrderDetail] = useState({
        espressoShot: 0,
        milk: "",
        roast: "",
        size: ""
    })

    const handleChange = (e) => {
        const { value, name } = e.target
        setOrderDetail(
            {
                ...orderDetail,
                [name]: value
            }
        )
    }


    return (

        <div className="lg:w-2/3 w-96 mx-auto flex gap-6 lg:flex-row flex-col justify-between py-4">
            <div className='space-y-2'>
                <h1 className='text-2xl py-2 font-bold border-b-4'>
                    Size Options
                </h1>
                <select name="size" onChange={handleChange} className="font-bold select select-ghost w-full lg:max-w-xs ">
                    {sizeList.map((sze, index) => (
                        <option key={index}>{sze.toLocaleUpperCase()}</option>
                    ))}
                </select>

            </div>
            <div className="lg:w-2/3 space-y-2">
                <h1 className='text-2xl py-2 font-bold border-b-4'>
                    Toppings
                </h1>
                <div className="lg:w-1/2 ">
                    <h1>
                        Espresso Shots <span className="font-bold">{orderDetail.espressoShot}</span>
                    </h1>
                    <input onChange={handleChange} value={orderDetail.espressoShot} name="espressoShot" type="range" min={0} max="5" className="range " />

                    <h1>Milk Type</h1>
                    <select name="milk" onChange={handleChange} className="select font-bold  select-ghost w-full lg:max-w-xs">

                        {typeOfDrink?.options[1]?.milk?.map((mlk, index) => (
                            <option key={index}>{mlk}</option>
                        ))}
                    </select>

                    <h1>
                        Espresso Roast
                    </h1>
                    <select name="roast" onChange={handleChange} className="select font-bold  select-ghost w-full lg:max-w-xs">
                        {typeOfDrink?.options[1]?.espressoRoast?.map((esp, index) => (
                            <option key={index}>{esp}</option>
                        ))}
                    </select>

                </div>

            </div >

        </div >
    )
}
