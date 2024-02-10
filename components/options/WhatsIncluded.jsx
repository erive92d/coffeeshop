"use client"

import { useEffect, useState } from "react"

const espressoOptions = [
    {
        espressoShot: 0
    },
    {
        espressoRoast: [
            "signature",

            "blonde",

            "decaf"


        ],
        milk: [

            "whole milk"

            ,
            "almond milk"

            ,
            "oat milk"


        ]
    }
]

export default function WhatsIncluded({ drink }) {
    const [typeOfDrink, setTypeOfDrink] = useState(
        {
            type: "",
            options: []
        }
    )

    useEffect(() => {
        const checkTypeOfDrink = () => {
            if (drink.ingredients.includes("Espresso")) {
                setTypeOfDrink(
                    {
                        ...typeOfDrink,
                        type: "espresso",
                        options: espressoOptions
                    }
                )
            } else {
                setTypeOfDrink(
                    {
                        ...typeOfDrink,
                        type: null,
                        options: null
                    }
                )
            }
        }

        checkTypeOfDrink()
    }, [])

    if (!typeOfDrink.type) {
        return <h1>Options coming soon..</h1>
    }


    return (
        <div className=" lg:w-2/3">
            <h1 className='text-2xl font-bold border-b-4'>
                Whats Included
            </h1>
            <div className="flex gap-6 lg:flex-row flex-col justify-between lg:items-center">
                <div >
                    <h1>
                        Espresso Shots
                    </h1>
                    <input type="range" min={0} max="5" name="espressoShot" className="range" step="25" />
                    <div className="w-full flex justify-between text-xs px-2">
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                    </div>

                </div>
                <div >
                    <h1>Milk Type</h1>
                    <select className="select select-ghost w-full lg:max-w-xs">

                        {typeOfDrink?.options[1]?.milk?.map((mlk, index) => (
                            <option key={index}>{mlk}</option>
                        ))}
                    </select>
                </div>
                <div >
                    <h1>
                        Espresso Roast
                    </h1>
                    <select className="select select-ghost w-full lg:max-w-xs">
                        {typeOfDrink?.options[1]?.espressoRoast?.map((esp, index) => (
                            <option key={index}>{esp}</option>
                        ))}
                    </select>
                </div>



            </div>
        </div>
    )
}
