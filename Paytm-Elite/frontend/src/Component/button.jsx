export function Button({label,onClick}){
    return (<button  onClick={onClick} type="button"  className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-sky-600 focus:outline-none">
        {label}</button>
)}