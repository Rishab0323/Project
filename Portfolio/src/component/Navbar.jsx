function Navbar() {
  return (
    <nav className="flex items-center px-10 py-5">

      {/* LEFT SPACER */}
      <div className="flex-1"></div>

      {/* CENTER - Logo + Menu */}
      <div className="flex items-center gap-8 font-medium">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQF7W9uAzMVcPQ/profile-displayphoto-scale_200_200/B56ZjdX_31G4AY-/0/1756060715061?e=2147483647&v=beta&t=z-MmH2mdPFx_HpC3KINCC2HJ5MdHcDo5L9GUyRZAA9g"
            className="w-8 h-8 rounded-full"
          />
          <h1 className="font-semibold">Rishab</h1>
        </div>

        <a href="#home" className="hover:text-purple-500">
          Home
        </a>

        <a href="#projects" className="hover:text-purple-500">
          Projects
        </a>

        <a href="#skills" className="hover:text-purple-500">
          Skills
        </a>

        <a href="#contact" className="hover:text-purple-500">
          Contact
        </a>

      </div>

      {/* RIGHT - Contact Button */}
      <div className="flex-1 flex justify-end">
        <a
          href="#contact"
          className="px-5 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600"
        >
          Contact
        </a>
      </div>

    </nav>
  );
}

export default Navbar;