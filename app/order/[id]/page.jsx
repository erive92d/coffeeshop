import SizeOptions from '@/components/options/SizeOptions'
import WhatsIncluded from '@/components/options/WhatsIncluded'
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
        <div className='h-screen bg-white flex flex-col'>
            <div className='bg-green-950 px-6 py-4 flex flex-col  lg:flex-row justify-center items-center '>
                <div className=' w-96 space-y-4 py-4 lg:space-y-0'>
                    <h1 className='text-3xl font-bold text-white text-center lg:text-start'>{singleDrink.title}</h1>
                </div>
                <div className=''>
                    <Image alt="image" className="rounded-full h-60 w-60 lg:w-80 lg:h-80 border-black" src={singleDrink.image} height={200} width={400} />
                </div>
            </div>
            <div className='flex space-y-4 flex-col lg:flex-row justify-between w-2/3 mx-auto p-2 my-2'>
                <SizeOptions />
                <WhatsIncluded />
            </div>
        </div>
    )
}
