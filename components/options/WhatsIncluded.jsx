"use client"

import { useEffect, useState } from "react"
import EspressoOptions from "./EspressoOptions"
import CoffeeOptions from "./CoffeeOptions"

const coffeeOptions = [
    {
        espressoShot: 0,
        addIns: [
            "no water",
            "light water",
            "extra water",
            "water"
        ],
        espressoShotOptions: [
            "signature",
            "decaf",
            "1/2 decaf"
        ],
    }
]

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
            } else if (drink.ingredients.includes("Coffee")) {
                setTypeOfDrink(
                    {
                        ...typeOfDrink,
                        type: "coffee",
                        options: coffeeOptions
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
    if (typeOfDrink.type === "espresso") {
        return <EspressoOptions typeOfDrink={typeOfDrink} />
    }
    if (typeOfDrink.type === "coffee") {
        return <CoffeeOptions typeOfDrink={typeOfDrink} />
    }


    // return (
    //     <div className="">
    //         {typeOfDrink.type === "espresso" ? <EspressoOptions typeOfDrink={typeOfDrink} />
    //             :
    //             <h1>Coming soon</h1>
    //         }
    //     </div>
    // )
}
