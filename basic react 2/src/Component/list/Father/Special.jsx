import { useContext } from "react";
import { AssetContext } from "../GrandFather/GrandFather";


const Special = () => {
    const gift = useContext(AssetContext)
    return (
        <div className="border-4 rounded-lg p-5">
            <h1>Special</h1>
            <p>has: {gift}</p>
        </div>
    );
};

export default Special;