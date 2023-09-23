import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import { useSearchParams } from "react-router-dom";


export const AssetContext = createContext('Gold')
export const MoneyContext = createContext(1000)
 const GrandFather = () => {
    const [money, setMoney] = useState(1000)
    return (
    <div className="flex justify-center items-center h-screen text-center">
        <div className=" text-3xl font-semibold">
        <h1 className='text-3xl font-bold my-5 underline'>Form Master</h1>

            <div className="border-4 rounded-lg p-5">
                <h1>GrandFather</h1>
                <MoneyContext.Provider value={[money, setMoney]}>
                    <AssetContext.Provider value="Gold">
                        <div className="flex justify-center items-center gap-5 mt-5">
                            <Father/>
                            <Uncle/>
                            <Aunty/>
                        </div>
                    </AssetContext.Provider>
                </MoneyContext.Provider>
            </div>  
        </div>
    </div>
    );
};

export default GrandFather;


/**
 * create a context and export it
 * add Provider for the context with a value, value could be anything
 * use context to access value in the context api
*/