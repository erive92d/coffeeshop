import { fetchCoffees } from '@/helpers/apicalls/fetchCoffees'
import React from 'react'

export async function generateStaticParams() {
    const fetchDrinks = await fetch('https://api.sampleapis.com/coffee/hot')
    const drinks = await fetchDrinks.json()
    return drinks.map((coffee) => ({
        id: coffee.id,
    }))
}

export async function fetchSingleDrink(id) {

    const resp = await fetch(`https://api.sampleapis.com/coffee/hot/${id}`,
        {
            next: {
                revalidate: 60
            }
        }
    );
    const data = await resp.json();
    return data
}

export default async function page({ params: { id } }) {
    console.log(id, "pp")
    const singleDrink = await fetchSingleDrink(id)

    return (
        <div>
            <h1>{singleDrink.title}</h1>
        </div>
    )
}
