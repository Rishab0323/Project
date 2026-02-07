export function BottomWarning({label}){
    return (
        <div className="text-color-blue ">Not an registered user ? <a  className ="text-blue-700 " href="http://localhost:5173/signin">{label}</a></div>
    )
}