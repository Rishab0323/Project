import { FaReact, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa"
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss } from "react-icons/si"

function Skills() {
  return (
    <section  id="skills" className="mt-20">

      <h2 className="text-white text-3xl font-bold mb-10">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        <div className="bg-[#111827] p-6 rounded-xl text-center">
          <FaReact className="text-3xl text-[#61DBFB] mx-auto mb-2" />
          <p className="text-gray-300 font-medium">React</p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl text-center">
          <FaNodeJs className="text-3xl text-green-500 mx-auto mb-2" />
          <p className="text-gray-300 font-medium">Node.js</p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl text-center">
          <SiMongodb className="text-3xl text-green-400 mx-auto mb-2" />
          <p className="text-gray-300 font-medium">MongoDB</p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl text-center">
          <SiExpress className="text-3xl text-gray-300 mx-auto mb-2" />
          <p className="text-gray-300 font-medium">Express</p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl text-center">
          <SiJavascript className="text-3xl text-yellow-400 mx-auto mb-2" />
          <p className="text-gray-300 font-medium">JavaScript</p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl text-center">
          <SiTailwindcss className="text-3xl text-sky-400 mx-auto mb-2" />
          <p className="text-gray-300 font-medium">Tailwind CSS</p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl text-center">
          <FaGitAlt className="text-3xl text-orange-500 mx-auto mb-2" />
          <p className="text-gray-300 font-medium">Git</p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl text-center">
          <FaPython className="text-3xl text-yellow-300 mx-auto mb-2" />
          <p className="text-gray-300 font-medium">Python</p>
        </div>

      </div>

    </section>
  )
}

export default Skills