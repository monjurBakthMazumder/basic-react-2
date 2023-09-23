
const SimpleForm = () => {
    const handleSubmit = event => {
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
        console.log('submit');
    }
    return (
        <div className="flex flex-col justify-center items-center gap-5 min-h-screen">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" name="name"/>
                <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" name="email"/>
                <input className="btn btn-success" type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default SimpleForm;