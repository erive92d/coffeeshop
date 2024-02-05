import BackgroundImage from "@/components/BackgroundImg"
import { fetchCoffees } from "@/helpers/apicalls/fetchCoffees"
import Image from "next/image"

export default async function CoffeesDisplay() {
    const grabCoffees = await fetchCoffees()

    return (
        <div className="min-h-screen bg-white text-black flex flex-wrap items-center">
            {grabCoffees ?
                grabCoffees.map((coff) => (
                    <div className=" w-1/4 flex flex-col justify-center" key={coff.id}>
                        <div className="text-center p-8">
                            <Image className="rounded-lg" src={coff.image} height={400} width={400} />
                            <h1 className="text-2xl py-2 font-light">{coff.title}</h1>
                        </div>
                    </div>
                )) :
                <h1>Loading..</h1>
            }
        </div>
    )
}