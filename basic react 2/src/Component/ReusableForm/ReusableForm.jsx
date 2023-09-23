

const ReusableForm = ({fromTitle,handleSubmit, submitBtnText="Submit", children}) => {
    
    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name : e.target.name.value,
            email : e.target.email.value,
        }
        handleSubmit(data)
    }
    return (
        <div className="flex flex-col justify-center items-center gap-5 my-20">
            {children}
            <form 
                className="flex flex-col gap-2"
                onSubmit={handleLocalSubmit}
            >
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" name="name"/>
                <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" name="email"/>
                <input className="btn btn-success" type="submit" value={submitBtnText}/>
            </form>
        </div>
    );
};

export default ReusableForm;