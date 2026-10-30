import { useState } from "react"

const Admission = () => {

  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    contact: "",
    email: "",
    className: "",
    message: ""
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setSubmitted(true)

    // Reset form
    setFormData({
      studentName: "",
      parentName: "",
      contact: "",
      email: "",
      className: "",
      message: ""
    })

    // Auto hide success
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="Admission" className="md:min-h-screen md:-mt-2 pb-5 md:flex items-center justify-center px-4  relative overflow-hidden bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(239,68,68,0.10),transparent_60%)]">

      {/* Radial Glow Background */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.25),transparent_40%),
            radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.20),transparent_40%)]">
      </div>

      {/* Form Card */}
      <div className="relative w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl px-10 py-8">

        <h2 className="text-4xl font-bold text-center text-slate-900 mb-2 font-poppins">
          Admission Form
        </h2>

        <p className="text-gray-700 text-lg font-bold font-poppins text-center mb-10">
          Fill the form and our team will contact you.
        </p>

        {submitted && (
          <div className="mb-6 p-3 rounded-lg bg-green-900/40 text-green-400 text-center transition-all duration-300">
            Form submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={formData.studentName}
            onChange={handleChange}
            required
            className="bg-white/80 border border-white/20 text-slate-900 placeholder-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
          />

          <input
            type="text"
            name="parentName"
            placeholder="Parent Name"
            value={formData.parentName}
            onChange={handleChange}
            required
            className="bg-white/80 border border-white/20 text-slate-900 placeholder-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
          />

          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
            className="bg-white/80 border border-white/20 text-slate-900 placeholder-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white/80 border border-white/20 text-slate-900 placeholder-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
          />

          <input
            type="text"
            name="className"
            placeholder="Class"
            value={formData.className}
            onChange={handleChange}
            required
            className="md:col-span-2 bg-white/80 border border-white/20 text-slate-900 placeholder-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="md:col-span-2 bg-white/80 border border-white/20 text-slate-900 placeholder-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
          ></textarea>

          <button
            type="submit"
            className="md:col-span-2 bg-linear-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-500 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-blue-500/30"
          >
            Submit Application
          </button>

        </form>

      </div>

    </section>
  )
}

export default Admission