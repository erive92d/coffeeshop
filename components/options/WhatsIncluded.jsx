"use client"

import { useEffect, useState } from "react"
import EspressoOptions from "./EspressoOptions"
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

    return (
        <div className="">
            {typeOfDrink.type === "espresso" ? <EspressoOptions typeOfDrink={typeOfDrink} />
                :
                <h1>Coming soon</h1>
            }
        </div>
    )
}
