import { Button } from "../Component/button";
import { InputBox } from "../Component/InputBox";

const Signin = () => {
    return (
    <div className="bg-red-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center ">
            <div className="bg-white w-80 rounded-lg text-center px-2 py-3 h-max">
            <InputBox placeholder="ris@gmail.com" label={"email"} />
            <InputBox label={"Password"} />
            <Button label={"Login"} />
            </div>
        </div>
    </div>  
)}

export default Signin;