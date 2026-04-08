import { useState } from "react";
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    console.log("render");

    function handleSubmit(e) {
        e.preventDefault();

        console.log(emailRef);
        console.log(passwordRef);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="email" ref={emailRef}/>
            <br></br>
            <input type="password" ref={passwordRef}/>
            <button type="submit">Submit</button>
        </form>
        </>
    );
}

export default Login;