import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../GrandFather/GrandFather";


const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div className="border-4 rounded-lg p-5">
            <h1>Aunty</h1>
            <div className="flex justify-center items-center gap-5 mt-5">
                <Cousin name={'mamshad'}/>
                <Cousin name={'Rubaya'}/>
            </div>
            <p className="my-5">Money: {money}</p>
            <button onClick={()=> setMoney(money+100)} className="btn">Add Money 100</button>
        </div>
    );
};

export default Aunty;