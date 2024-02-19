import Image from 'next/image'
import OrderOptions from '@/components/options/OrderOptions'


export async function generateStaticParams() {
    const fetchDrinks = await fetch('https://api.sampleapis.com/coffee/hot')
    const drinks = await fetchDrinks.json()
    return drinks.map((coffee) => ({
        id: coffee.id.toString(),
    }))
}

export async function fetchSingleDrink(id) {
    const resp = await fetch(`https://api.sampleapis.com/coffee/hot/${id}`, {
        cache: "no-store"
    }
    );
    return await resp.json();

}

export default async function page({ params }) {
    const singleDrink = await fetchSingleDrink(params.id)
    return (
        <div className='min-h-screen bg-white flex flex-col py-10'>
            <div className='bg-stone-700 px-6 py-4 flex flex-col  lg:flex-row justify-center items-center '>
                <div className=' w-96 space-y-4 py-4 lg:space-y-0'>
                    <h1 className='text-3xl font-bold text-white text-center lg:text-start'>{singleDrink.title}</h1>
                </div>
                <div className=''>
                    <Image priority alt="image" className="rounded-full h-60 w-60 lg:w-80 lg:h-80 border-black" src={singleDrink.image} height={200} width={400} />
                </div>
            </div>
            <OrderOptions />
        </div>
    )
}
