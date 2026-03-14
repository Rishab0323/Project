function Profile() {
  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-3 items-start mt-16 gap-6">

      {/* LEFT COLUMN */}
      <div>
        <h1 className="text-white text-5xl font-bold leading-tight">
          Rishab Shukla
        </h1>
      </div>

      {/* CENTER IMAGE */}
<div className="flex flex-col items-center">

  <img
    src="https://media.licdn.com/dms/image/v2/D5603AQF7W9uAzMVcPQ/profile-displayphoto-scale_200_200/B56ZjdX_31G4AY-/0/1756060715061?e=2147483647&v=beta&t=z-MmH2mdPFx_HpC3KINCC2HJ5MdHcDo5L9GUyRZAA9g"
    className="rounded-2xl"
  />

  {/* FLOATING BUTTON */}
  <div className=" w-14 h-14 bg-[#1dfb83] rounded flex items-center justify-center text-black text-2xl font-bold">
    Hi
  </div>

</div>

      {/* RIGHT COLUMN */}
      <div>
        <h1 className="text-white text-6xl font-bold leading-tight">
          MERN
          <br />
          STACK DEVELOPER
        </h1>

        <p className="text-gray-400 mt-6 max-w-xs">
          I build scalable web applications using MongoDB,
          Express, React and Node.js.
        </p>
      </div>

    </section>
  )
}

export default Profile