import { drinkOfTheDay } from '@/helpers/apicalls/fetchCoffees'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Drinkoftheday() {
    const drink = await drinkOfTheDay()
    if(!drink) return <h1>Loading...</h1>
  return (
    <div className=' space-y-4 p-4 text-center flex flex-col items-center '>
        <h1 className='font-bold text-2xl border-b-2'>Today Drink</h1>
        <Image alt="image" className="rounded-full h-60 w-60 lg:w-80 lg:h-80 border-black" src={drink.image} height={200} width={400} />
        <h1 className='font-bold  text-xl'>{drink.title}</h1>
        <p className='font-light text-sm'>{drink.description}</p>
        <Link href={`/order/${drink.id}`} className='btn px-4 bg-green-700 text-white'>Order here</Link>
    </div>
  )
}
