import { fetchCoffees } from '@/helpers/apicalls/fetchCoffees'
import Image from 'next/image'

export async function generateStaticParams() {
    const fetchDrinks = await fetch('https://api.sampleapis.com/coffee/hot')
    const drinks = await fetchDrinks.json()
    return drinks.map((coffee) => ({
        id: coffee.id.toString(),
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
    return await resp.json();

}

export default async function page({ params }) {
    const singleDrink = await fetchSingleDrink(params.id)

    return (
        <div className='h-screen bg-white flex flex-col justify-center items-center'>
            <div className='flex flex-col space-y-6  lg:flex-row justify-around items-center'>
                <div className='lg:w-1/3 w-96 space-y4'>
                    <h1 className='text-3xl font-bold text-black'>{singleDrink.title}</h1>
                    <p className='text-gray-500 italic font-thin py-4'>{singleDrink.description}</p>
                </div>
                <div className=''>
                    <Image alt="image" className="rounded-full h-60 w-60 lg:w-80 lg:h-80 border-4 border-black" src={singleDrink.image} height={200} width={400} />

                </div>
            </div>
        </div>
    )
}
