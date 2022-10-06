import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
import Nav from "./nav"
// import { createUser } from "../backend/properties"
// import Backend from "../backend/"

export default function SignUp() {

    const [username, updateUN] = useState("user")
    const [password, updatePW] = useState("password")
    const [email, updateEM] = useState("email")
    const [phone, updateNum] = useState("1231231234")
    const [cookie, setCookie, removeCookie] = useCookies(['nToken'])
    const nav = useNavigate()


    function createUser() {


        fetch("http://localhost:4000/sign-up", {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': "http://localhost:4000/"
            },
            credentials: "include",
            body: JSON.stringify({ username, password, email, phone }),

        })


            .then(res => res.json())
            .then(json => {
                setCookie("nToken", json.token)
                nav("/")

            })
    }


    return (
        <div>
            <div className="signup">
                <h1>Sign up</h1>
                <div className="signInForm">
                    <div>
                        <label htmlFor="username"> username </label>
                        <input type="text" value={username} onChange={e => updateUN(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="phone number"> phone number </label>
                        <input type="number" value={phone} onChange={e => updateNum(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="email"> email </label>
                        <input type="email" value={email} onChange={e => updateEM(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="password"> password </label>
                        <input type="password" value={password} onChange={e => updatePW(e.target.value)} />
                    </div>
                </div>
                <button onClick={() => createUser()}> Go </button>
                <div>
                    <p> <em> Already have an account?  <Link to='/login'>Log in</Link> </em></p>
                </div>
            </div>
        </div>
    )
}