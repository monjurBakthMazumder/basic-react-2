import { useEffect, useRef } from "react";


const RefForm = () => {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    useEffect(()=>{
        nameRef.current.focus()
    },[])

    const handleSubmit = event => {
        event.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div className="flex flex-col justify-center items-center gap-5 min-h-screen">
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" name="name"/>
                <input defaultValue={'example@email.com'} ref={emailRef} type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" name="email"/>
                <input ref={passwordRef} type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" name="password"/>
                <input className="btn btn-success" type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default RefForm;