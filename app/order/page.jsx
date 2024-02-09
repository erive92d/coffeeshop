import ViewInfo from "@/components/ViewInfo"
import { fetchCoffees } from "@/helpers/apicalls/fetchCoffees"
import Image from "next/image"
import Link from "next/link"

export default async function CoffeesDisplay() {
    const grabCoffees = await fetchCoffees()

    return (
        
        <div className="min-h-screen bg-white text-black ">
            <div >
                <h1 className="text-2xl p-12 font-bold ">Coffees and Drinks</h1>
            </div>
            <div className="flex  flex-col lg:flex-row lg:flex-wrap items-center">
                {grabCoffees ?
                    grabCoffees.map((coff) => (
                        <Link href={`/order/${coff.id}`} className=" lg:w-1/4  flex flex-col justify-center" key={coff.id}>
                            <div className="text-center p-8">
                                <Image alt="image" className="rounded-full h-60 w-60 lg:w-80 lg:h-80 border-4 border-black" src={coff.image} height={200} width={400} />
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