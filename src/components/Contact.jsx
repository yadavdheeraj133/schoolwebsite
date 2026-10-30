import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    className: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // normal required validation
    if (
      !formData.parentName ||
      !formData.studentName ||
      !formData.className ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Form Submitted Successfully ✅");

    // form reset
    setFormData({
      parentName: "",
      studentName: "",
      className: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="Contact" className="bg-gray-100 pt-6 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center md:mb-10 mb-7 ">
          <h2 className="md:text-[40px] text-[30px] font-bold text-slate-800">
            Contact <span className="text-red-500 ">R.N. PUBLIC SCHOOL</span>
          </h2>
          <p className="text-gray-600 mt-2 md:px-0 px-2 text-lg font-poppins">
            We are here to help you with admissions and queries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE - School Info */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-slate-900 mb-1 font-poppins">
              School Address:
            </h3>
            <p className="text-gray-700 font-poppins">
              Palshacha Pada, Nallasopara (E), Mumbai, Maharashtra
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-1 font-poppins">
              Phone Number:
            </h3>
            <p className="text-gray-700 font-poppins">9730753835</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-1 font-poppins">
              Email:
            </h3>
            <p className="text-gray-700 font-poppins">RNschool123@gmail.com</p>

            <h3 className="text-xl font-semibold text-slate-900 mb-1 font-poppins">
              School Timings:
            </h3>
            <div className="text-gray-700 font-poppins space-y-1">
              <p>Class 2nd to 10th : 7:30 AM – 12:30 PM</p>
              <p>Class Nr.Kg to 1st : 12:30 PM – 4:00 PM</p>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
              <iframe
                title="school-map"
                src="https://www.google.com/maps?q=Nallasopara%20East%20Mumbai&output=embed"
                width="100%"
                height="220"
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="bg-white py-8 px-5 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
                placeholder="Parent Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
                placeholder="Student Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-400"
              />

              <input
                type="text"
                name="className"
                value={formData.className}
                onChange={handleChange}
                required
                placeholder="Class"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-400"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-400"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
