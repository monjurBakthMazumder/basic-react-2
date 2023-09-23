import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState('Monjur')
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState('')


    const handleSubmit = event => {
        event.preventDefault();
        if(password.length < 6){
            setError('Password must be 6 character or longer')
        }
        else{
            setError('')
            console.log(name);
            console.log(email);
            console.log(password);
        }
    }

    const handleName = event => {
        setName(event.target.value)
    }
    const handleEmailChang = event => {
        setEmail(event.target.value)
    }
    const handlePasswordChang = event => {
        setPassword(event.target.value)
    }
    return (
        <div className="flex flex-col justify-center items-center gap-5 min-h-screen">
            <form
             onSubmit={handleSubmit}
             className="flex flex-col gap-2"
             >
                <input 
                    onChange={handleName} value={name}
                    type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" name="name"/>
                <input
                    onChange={handleEmailChang}
                    type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" name="email"/>
                <input
                    onChange={handlePasswordChang}
                    type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" name="password" required/>
                <input className="btn btn-success" type="submit" value="submit"/>
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;