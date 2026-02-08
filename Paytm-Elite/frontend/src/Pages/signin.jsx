import { Button } from "../Component/button";
import { InputBox } from "../Component/InputBox";
import { Heading } from "../Component/heading";
import { Subheading } from "../Component/subheading";
import { BottomWarning } from "../Component/buttomWarning";

const Signin = () => {
    return (
    <div className="bg-red-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center ">
            <div className="bg-white w-80 rounded-lg text-center p-2 space-y-2 h-max">
            <Heading label={"Signin"} />
            <Subheading label={"enter your credentials to login"} />
            <InputBox placeholder="ris@gmail.com" label={"email"} />
            <InputBox label={"Password"} />
            <Button label={"Login"} />
            <div>
                <BottomWarning label={"don't have an account ? "} label2={"Signup"} />
            </div>
            </div>
        </div>
    </div>  
)}

export default Signin;