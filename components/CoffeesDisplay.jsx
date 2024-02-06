import { fetchCoffees } from "@/helpers/apicalls/fetchCoffees"
import Image from "next/image"

export default async function CoffeesDisplay() {
    const grabCoffees = await fetchCoffees()
    console.log(grabCoffees, "@@")
    return (
        <div className=" flex flex-col items-center">
            {grabCoffees ?
                grabCoffees.map((coff) => (
                    <div className="min-h-screen flex flex-col justify-center" key={coff.id}>
                        <div className="text-center">
                            <Image className="rounded-lg" src={coff.image} height={400} width={400} />
                            <h1 className="text-xl py-2 font-bold font-serif">{coff.title}</h1>
                        </div>
                    </div>
                )) :
                <h1>Loading..</h1>
            }
        </div>
    )
}
