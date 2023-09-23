import UseInputState from "../../Hocks/UseInputState";


const HockForm = () => {
    // const [name, handleNameChange] = UseInputState('monjur')
    const emailState = UseInputState('example@email.com')
    const handleSubmit = e => {
        e.preventDefault();
        // console.log(name);
        console.log(emailState.value);
    }
    return (
        <div className="flex flex-col justify-center items-center gap-5 min-h-screen">
            <form onSubmit={handleSubmit}>
                {/* <input
                    value={name}
                    onChange={handleNameChange}
                    type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" name="name"/> */}
                <input {...emailState} type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" name="email"/>
                <input className="btn btn-success" type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default HockForm;