import { fetchCoffees } from '@/helpers/apicalls/fetchCoffees'
import React from 'react'

async function fetchSingleDrink(id) {
    try {
        const resp = await fetch(`https://api.sampleapis.com/coffee/hot/${id}`,
        );
        const data = await resp.json();
        return data

    } catch (error) {
        console.error(error)
    }
}

export default async function page({ params }) {

    const singleDrink = await fetchSingleDrink(params.id)
    console.log(singleDrink)

    return (
        <div>
            <h1>{singleDrink.title}</h1>
        </div>
    )
}
