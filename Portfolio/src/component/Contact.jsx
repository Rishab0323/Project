import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function Contact() {
  return (
    <section id="contact" className="mt-20">

      {/* TITLE */}
      <h2 className="text-white text-3xl font-bold mb-10">
        Contact Me
      </h2>

      {/* CONTACT CARD */}
      <div className="bg-[#111827] p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">

        <p className="text-gray-400 max-w-md">
          I'm always open to discussing new projects, collaborations,
          or opportunities. Feel free to reach out!
        </p>

        {/* CONTACT BUTTONS */}
        <div className="flex gap-4">

          <a
            href="srishbh574@email.com"
            className="flex items-center gap-2 bg-[#1dfb83] text-black px-4 py-2 rounded-lg font-medium"
          >
            <FaEnvelope />
            srishbh574@email.com
          </a>

          <a
            href="https://github.com/Rishab0323"
            className="flex items-center gap-2 bg-[#1f2937] text-gray-300 px-4 py-2 rounded-lg"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rishabshukla0703"
            className="flex items-center gap-2 bg-[#1f2937] text-gray-300 px-4 py-2 rounded-lg"
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact