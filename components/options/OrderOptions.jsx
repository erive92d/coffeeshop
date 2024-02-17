"use client"

import { useState } from "react"

const options = [
    {
        size: [
            "large", "medium", "small"
        ],
        espressoShot: 0,

        addIns: [
            "no water",
            "light water",
            "extra water",
            "water"
        ],
        espressoRoast: [
            "signature",
            "decaf",
            "1/2 decaf"
        ], milk: [

            "whole milk"

            ,
            "almond milk"

            ,
            "oat milk"


        ]
    }
]


export default function OrderOptions({ drink }) {

    const [orderDetail, setOrderDetail] = useState({
        espressoShot: 0,
        addins: "",
        milk: "",
        roast: "",
        size: "LARGE"
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
                    {options[0].size.map((sze, index) => (
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

                        {options[0]?.milk?.map((mlk, index) => (
                            <option key={index}>{mlk}</option>
                        ))}
                    </select>


                    <h1>Add Ins</h1>
                    <select name="addins" onChange={handleChange} className="select font-bold  select-ghost w-full lg:max-w-xs">
                        {options[0]?.addIns?.map((addin, index) => (
                            <option key={index}>{addin}</option>
                        ))}
                    </select>


                    <h1>
                        Espresso Roast
                    </h1>
                    <select name="roast" onChange={handleChange} className="select font-bold  select-ghost w-full lg:max-w-xs">
                        {options[0]?.espressoRoast?.map((esp, index) => (
                            <option key={index}>{esp}</option>
                        ))}
                    </select>

                </div>

            </div >

        </div >
    )
}
