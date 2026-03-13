function InfoCards() {
  return (
    <section className="grid grid-cols-2 gap-6 mt-16">

      {/* CARD 1 */}
      <div className="bg-[#111827] p-6 rounded-2xl">
        <h3 className="text-[#1dfb83] text-3xl font-bold">3+</h3>
        <p className="text-gray-400 mt-2">Projects Completed</p>
      </div>

      {/* CARD 2 */}
      <div className="bg-[#111827] p-6 rounded-2xl">
        <h3 className="text-[#1dfb83] text-3xl font-bold">5+</h3>
        <p className="text-gray-400 mt-2">Technologies</p>
      </div>

    </section>
  )
}

export default InfoCards