import { useState } from "react";

function ControllerForm() {
    const initialState = {
        fullName : "",
        emailAddress : "",
        passwordData : ""
    }
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [result, setResult] = useState(initialState);



    function submitForm(){
        setResult({
            "fullName" : name,
            "emailAddress" : email,
            "passwordData" : password
        })
        setEmail('')
        setName('')
        setPassword('')
    }

    return (
        <>
        <div>
            <input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter Your Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button type="button" onClick={()=>submitForm()}>Submit</button>
            <p>{result.fullName}</p>
            <p>{result.emailAddress}</p>
        </div>
        </>
    )
}

export default ControllerForm;