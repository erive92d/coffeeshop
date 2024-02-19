import React from 'react'

export default function OrderOverview({ size, shots, milk, roast }) {

    return (
        <div className="text-gray-700 font-light transition-all duration-300">
            {size || shots || milk || roast ?
                <h1 className='text-2xl py-2 font-bold border-b-4'>
                    Overview
                </h1>
                : null
            }
            <div className='font-light italic space-y-2 py-2'>
                {size ?
                    <h1>
                        {`Size ${size}`}
                    </h1>
                    : null}
                {shots ?
                    <h1>
                        {`Shot(s) ${shots}`}
                    </h1>
                    : null}
                {milk ?
                    <h1>
                        {`Milk type ${milk}`}
                    </h1>
                    : null}
                {roast ?
                    <h1>
                        {`Roast ${roast}`}
                    </h1>
                    : null}
            </div>
            {size && shots && roast && milk ?
                <button className='btn btn-success text-white'>Order</button>
                : null
            }
        </div>
    )
}
