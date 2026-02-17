import {useEffect, useState}  from "react"
import { Button } from "./button"
import axios from "axios";

export const User = () => {
    const [users,setUsers] = useState([]);
    const [filter,setFilter] = useState("");

    useEffect(() => {
        axios.get("http://localhost:2000/api/user/bulk?filter" +filter)
        .then( response => {
            setUsers(response.data.user)
        })
    },[filter])

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

function User({user}){
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div>
                {user.firstName} {user.lastName}
            </div>
        </div>
    </div>

}