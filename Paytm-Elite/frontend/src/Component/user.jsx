import {useState}  from "react"
import { Button } from "./button"

export const User = () => {
    const [users,setUsers] = useState([{
        firstname:"",
        lastname : "",
        _id: 1
    }]);

    return<>
        <div className="font-bold mt-6 text-lg">
            users
        </div>
        <div className="my-2">
            <input type="text"  placeholder="Seacrh user" className="w-full px-2 py-1 border rounded border-slate-200" id="" />
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </>
}