import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Tarjeta } from "./Tarjeta";


export function Tarjetas(){
    const { historias } = useContext(GlobalContext);

    return(
       <div className="container relative mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-2 mt-4">Mis historias</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {historias.map(historia => (
                    <Tarjeta key={historia.id} historia={historia} />
                ))}
            </div>
        </div>
    );    
}