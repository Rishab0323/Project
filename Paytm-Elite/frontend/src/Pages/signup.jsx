import { Heading } from "../Component/heading";
import { Subheading } from "../Component/subheading";
import { InputBox } from "../Component/InputBox";
import { Button } from "../Component/button";
import { BottomWarning } from "../Component/buttomWarning";

const Signup = () => {
    return (
    <div className="bg-red-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max space-y-2">
                <Heading label={"Signup"}></Heading>
                <Subheading label={"enter you deatils to create account"} />
                <InputBox placeholder="John" label={"First Name"}/>
                <InputBox placeholder="Wick" label={"Last Name"}/>
                <InputBox placeholder="john@4gmail.com" label={"Email"}/>
                <InputBox placeholder="12344#*45" label={"Password"}/>
                <Button label={"Signup"} />
                <div>
                    <BottomWarning label={"Signup"} />
                </div>
            </div>
        </div>
    </div>
    
)}

export default Signup;