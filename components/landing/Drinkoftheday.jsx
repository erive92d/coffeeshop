import { drinkOfTheDay } from '@/helpers/apicalls/fetchCoffees'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Drinkoftheday() {
  const drink = await drinkOfTheDay()
  if (!drink) return <h1>Loading...</h1>
  return (
    <div className=' text-black flex flex-col lg:flex-row items-center justify-around min-h-screen gap-4 '>
      <div className=' lg:p-8'>
        <Image alt="image" className="w-96 rounded border-black" src={drink.image} height={200} width={400} />
      </div>
      <div className='w-1/2 space-y-4 text-center py-4'>
        <h1 className='font-bold  text-3xl'>{drink.title}</h1>
        <p className='font-light text-sm'>{drink.description}</p>
        <Link href={`/order/${drink.id}`} className='btn px-4 btn-primary btn-outline text-white'>Order here</Link>
      </div>
    </div >
  )
}
