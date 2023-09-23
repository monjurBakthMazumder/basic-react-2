import Brother from "./Brother";
import MySelf from "./MySelf";
import Sister from "./Sister";


const Father = () => {
    return (
        <div className="border-4 rounded-lg p-5">
            <h1>Father</h1>
            <div className="flex justify-center items-center gap-5 mt-5">
                <MySelf/>
                <Brother/>
                <Sister/>
            </div>
        </div>
    );
};

export default Father;