"use client"

import { useQueryState } from "nuqs"
import OrderOverview from "./OrderOverview"

const options = [
    {
        sizes: [
            "Large", "Medium", "Small"
        ],
        addIns: [
            "No water",
            "Light water",
            "Regular water",
            "Extra water"
        ],
        espressoRoast: [
            "Signature",
            "Decaf",
            "1/2 Decaf"
        ], milk: [
            "Whole",
            "Almond",
            "Oat"
        ]
    }
]



export default function OrderOptions() {

    const [size, setSize] = useQueryState('size')
    const [shots, setShots] = useQueryState('shots')
    const [roast, setRoast] = useQueryState('roast')
    const [milk, setMilk] = useQueryState('milk')

    return (
        <div className=" lg:w-2/3 w-96 mx-auto flex gap-6 flex-col lg:flex-row lg:justify-around py-4">
            <div className=" w-1/3">
                <div className='space-y-4'>
                    <h1 className='text-2xl py-2 font-bold border-b-4'>
                        Size Options
                    </h1>
                    <div className="flex flex-col">
                        {options[0].sizes.map((sze, index) => (
                            <button value={sze} onClick={() => setSize(sze)} className={`btn btn-sm ${size === sze ? "btn-outline text-black" : "btn-ghost"}`} key={index}>
                                {sze}
                            </button>
                        ))}
                    </div>
                </div>
                <div className=" space-y-2">
                    <h1 className='text-2xl py-2 font-bold border-b-4'>
                        Toppings
                    </h1>
                    <div className="">
                        <div>
                            <h1>Espresso Shots <span className="font-bold">{shots}</span></h1>
                            <input value={shots || ''} onChange={(e) => setShots(e.target.value)} name="espressoShot" type="range" min={0} max="5" className="range " />
                        </div>
                    </div>


                    {/* same */}
                    <div>
                        <select onChange={(e) => setRoast(e.target.value)} defaultValue={"temp"} className="select select-ghost w-full max-w-xs">
                            <option value="temp" disabled >Roast</option>
                            {options[0].espressoRoast.map((esp, index) => (
                                <option key={index}>{esp}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <select onChange={(e) => setMilk(e.target.value)} defaultValue={"temp"} className="select select-ghost w-full max-w-xs">
                            <option value="temp" disabled >Milk</option>
                            {options[0].milk.map((esp, index) => (
                                <option key={index}>{esp}</option>
                            ))}
                        </select>
                    </div>

                    {/* same */}

                </div>
            </div>
            <div className="w-1/3">
                <OrderOverview size={size} shots={shots} milk={milk} roast={roast} />
            </div>


        </div>
    )
}
