import Header from "@/components/Header"
import { optionsExctractOre, options } from "../../../constants";

type Cargo = {
    data: {
        capacity: number,
        units: number,
        inventory: {
            symbol: string,
            name: string,
            desription: string,
            units: number,
        }[]
    }
}

export default async function Extract(shipId: string) {

    const cargoInventory: Cargo = await (await fetch(`https://api.spacetraders.io/v2/my/ships/BLADEN-3/cargo`, options)).json()
    // const goExtract = await (await fetch(`https://api.spacetraders.io/v2/my/ships/${shipId}/extract`, optionsExctractOre)).json()
    console.log(cargoInventory.data.inventory)

    return (
        <>
            <Header />
            <div className='w-fit h-fit'>
                Name of the ship SHIP
                <br />
                Cargo capacity: {cargoInventory.data.capacity}
                <br />
                Cargo units: {cargoInventory.data.units}
                <br />
                    <span className="font-bold">Inventory: </span>
                    {cargoInventory.data.inventory.map((item) => (
                        <ul key={item.name} className="font-semibold">
                            <li> - {item.name} - {item.units}</li>
                        </ul>
                    ))}
                </div>
            {/* <button onClick={goExtract}></button> */}
        </>
    );
}