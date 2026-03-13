function Navbar(){
    return(
        <div>
        <nav className="flex justify-between items-center px-10 py-5">

        {/* //logo  */}
        <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-green-400 rounded-full"></div>
        <h1 className="font-semibold">Rishab</h1>
      </div>

      {/* menu */}
      <ul className="flex gap-8 text-gray-400">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">About</li>
        <li className="hover:text-white cursor-pointer">Projects</li>
        <li className="hover:text-white cursor-pointer">Contact</li>
      </ul>

      {/* //contact button */}
      <button className="px-4 py-2 bg-white text-black rounded-full">
        Contact
      </button>

        </nav>
        </div>
    )
}


export default Navbar