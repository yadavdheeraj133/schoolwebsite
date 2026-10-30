import { FaFacebookF, FaWhatsapp, FaMapMarkerAlt,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-200 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">

        
        <div className="grid md:grid-cols-4 gap-10 portrait-cols-2">

          <div className="portrait-span-2">
            <h2 className="text-2xl font-bold text-white mb-2">
              R.N. PUBLIC SCHOOL
            </h2>
            <p className="text-gray-100 mb-4">
              Building strong foundation for a brighter future.
            </p>

            <div className="space-y-2 text-sm">
              <p>Add : Palshacha Pada, Nallasopara (E), Mumbai</p>
              <p>Phone: 9730753835</p>
              <p>Email: RNschool123@gmail.com</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold font-poppins text-white mb-3 md:ml-20">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2 text-sm md:ml-20  font-semibold font-poppins">
              <a href="#Hero" className="hover:text-red-400 cursor-pointer">Home</a>
              <a href="#Program" className="hover:text-red-400 cursor-pointer">Program</a>
              <a href="#Facilities" className="hover:text-red-400 cursor-pointer">Faciaties</a>
              <a href="#Gallery" className="hover:text-red-400 cursor-pointer">Gallery</a>
              <a href="#Admission" className="hover:text-red-400 cursor-pointer">Admission</a>
              <a href="#Contact" className="hover:text-red-400 cursor-pointer">Contact</a>
            </div>
          </div>

          {/* 3rd Column - Program */}
          <div>
            <h3 className="text-lg font-bold font-poppins text-white mb-4">
              Program
            </h3>
            <ul className="space-y-2">
              <li>Pre-Primary</li>
              <li>Primary</li>
              <li>Secondary</li>
              <li>Activities</li>
            </ul>
          </div>

          <div className="portrait-span-2">
            <h3 className="text-lg font-bold font-poppins text-white mb-4">
              Connect With Us
            </h3>

            <div className="flex space-x-4 text-lg">

              <a
                href="#"
                className="bg-white text-blue-900 p-2 rounded-full hover:bg-red-500 hover:text-white transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://wa.me/919730753835"
                className="bg-white text-blue-900 p-2 rounded-full hover:bg-green-500 hover:text-white transition"
              >
                <FaWhatsapp />
              </a>

               <a
                href="https://www.instagram.com/rnpublicschool"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-blue-900 p-2 rounded-full hover:bg-red-500 hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.google.com/maps?q=Nallasopara%20East%20Mumbai"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-blue-900 p-2 rounded-full hover:bg-red-500 hover:text-white transition"
              >
                <FaMapMarkerAlt />
              </a>
              
             

            </div>
          </div>

         
        

        </div>

        {/* Bottom Line */}
        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} R.N. Public School. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;