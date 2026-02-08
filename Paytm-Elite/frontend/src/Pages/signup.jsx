import { Heading } from "../Component/heading";
import { Subheading } from "../Component/subheading";
import { InputBox } from "../Component/InputBox";
import { Button } from "../Component/button";
import { BottomWarning } from "../Component/buttomWarning";
import { useState } from "react";

const Signup = () => {

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [username,setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
    <div className="bg-red-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max space-y-2">
                <Heading label={"Signup"}></Heading>
                <Subheading label={"enter you deatils to create account"} />
                <InputBox onChange={e => {
                    setFirstName(e.target.value);
                }}  placeholder="John" label={"First Name"}/>
                <InputBox onChange={e => {
                    setLastName(e.target.value);
                }}  placeholder="Wick" label={"Last Name"}/>
                <InputBox onChange={e => {
                    setUserName(e.target.value);
                }}  placeholder="john@4gmail.com" label={"Email"}/>
                <InputBox onChange={e => {
                    setPassword(e.target.value);
                }}  placeholder="12344#*45" label={"Password"}/>
    
                <div>
                    <Button onClick={() => {
                        axios.get("http://localhost:2000/api/user/signup",{
                            firstName,
                            lastName,
                            username,
                            password
                        });
                    }} label={"Signup"} />
                </div>
                <BottomWarning label={"Already have an account ?"} label2={"Login"} />
            </div>
        </div>
    </div>
    
)}

export default Signup;