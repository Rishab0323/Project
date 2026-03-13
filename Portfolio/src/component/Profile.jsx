function Profile() {
  return (
    <section className="grid grid-cols-3 items-start mt-16 gap-6">

      {/* LEFT COLUMN */}
      <div>
        <h1 className="text-white text-5xl font-bold leading-tight">
          Rishab Shukla
        </h1>
      </div>

      {/* CENTER IMAGE */}
<div className="flex flex-col items-center">

  <img
    src="https://i.pravatar.cc/300"
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