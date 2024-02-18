import React from 'react'

export default function OrderOverview({ orderDetail }) {
    return (
        <div className="text-gray-700 font-light">
            {orderDetail &&
                <>
                    {orderDetail.size ?
                        <h1>
                            Size -
                            {orderDetail.size}
                        </h1>
                        : null}
                    {orderDetail.espressoShot ?
                        <h1>
                            Shots -
                            {orderDetail.espressoShot}
                        </h1>
                        : null}
                    {orderDetail.addins ?
                        <h1>
                            Water -
                            {orderDetail.addins}
                        </h1>
                        : null}
                    {orderDetail.milk ?
                        <h1>
                            Milk -
                            {orderDetail.milk}
                        </h1>
                        : null}
                    {orderDetail.roast ?
                        <h1>
                            Roast -
                            {orderDetail.roast}
                        </h1>
                        : null}
                </>
            }
        </div>
    )
}
