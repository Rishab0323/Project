function Projects() {
  return (
    <section id="projects" className="mt-20">

      {/* SECTION TITLE */}
      <h2 className="text-white text-3xl font-bold mb-10">
        Featured Projects
      </h2>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* PROJECT CARD */}
        <div className="bg-[#111827] rounded-2xl p-6">
          <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
            className="h-40 w-full object-cover"
            />

          <h3 className="text-white text-xl font-semibold">
            Workfit Tracker
          </h3>

          <p className="text-gray-400 mt-2">
            Track workouts, monitor fitness progress and maintain structured training routines.
          </p>
        </div>

        {/* PROJECT CARD */}
        <div className="bg-[#111827] rounded-2xl p-6">
         <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780"
            className="h-40 w-full object-cover"
            />

          <h3 className="text-white text-xl font-semibold">
            AI Mediscan : Eye disease diagnosis
          </h3>

          <p className="text-gray-400 mt-2">
            AI-based system that analyzes eye images to detect early signs of retinal diseases.
          </p>
        </div>

        {/* project 3 */}
        <div className="bg-[#111827] rounded-2xl p-6">

            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
                className="h-40 w-full object-cover rounded-xl mb-4"
                />

            <h3 className="text-white text-xl font-semibold">
                School Assistant (In Progress)
            </h3>

            <p className="text-gray-400 mt-2">
                A smart school management assistant that helps track students,
                manage attendance, and organize academic activities efficiently.
            </p>

            <span className="inline-block mt-4 text-xs bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">
                In Development
            </span>

        </div>
      </div>

    </section>
  )
}

export default Projects