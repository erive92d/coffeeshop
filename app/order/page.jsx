import { fetchCoffees } from "@/helpers/apicalls/fetchCoffees"
import Image from "next/image"
import Link from "next/link"

export default async function CoffeesDisplay() {
    const grabCoffees = await fetchCoffees()
    // console.log(grabCoffees.map(coff => coff.ingredients.includes("Coffee")))
    return (

        <div className="min-h-screen w-2/3 mx-auto">
            <div >
                <h1 className="text-4xl p-8 italic font-serif text-center">Menu</h1>
            </div>
            <div className="flex  flex-col lg:flex-row lg:flex-wrap items-center">
                {grabCoffees ?
                    grabCoffees.map((coff) => (
                        <Link href={`/order/${coff.id}`} className=" lg:w-2/4  flex flex-col justify-center items-center" key={coff.id}>
                            <div className="text-center p-8">
                                <Image alt="image" className="rounded-full h-60 w-60 lg:w-60 lg:h-30 border-black" src={coff.image} height={200} width={400} />
                                <h1 className="text-xl py-2 font-light">
                                    {coff.title}
                                </h1>
                            </div>
                        </Link>
                    )) :
                    <h1>Loading..</h1>
                }
            </div>

        </div>
    )
}