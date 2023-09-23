import Special from './Special'

const MySelf = () => {
    return (
        <div className="border-4 rounded-lg p-5">
            <h1>My Self</h1>
            <div className="flex justify-center items-center gap-5 mt-5">
                <Special/>
            </div>
        </div>
    );
};

export default MySelf;