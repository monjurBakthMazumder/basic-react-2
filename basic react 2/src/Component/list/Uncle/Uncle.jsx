import Cousin from "../Cousin/Cousin";

const Uncle = () => {
    return (
        <div className="border-4 rounded-lg p-5">
            <h1>Uncle</h1>
            <div className="flex justify-center items-center gap-5 mt-5">
                <Cousin name={'rafsan'}/>
                <Cousin name={'Sohona'}/>
            </div>
        </div>
    );
};

export default Uncle;