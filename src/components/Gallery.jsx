import { useNavigate } from "react-router-dom"

const Gallery = () => {
  const navigate = useNavigate()
 const previewData = [
 {image:"https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaG9vbCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww",title:"Annual Day"},
 {image:"https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xhc3Nyb29tfGVufDB8fDB8fHww",title:"Sport Day"},
 {image:"https://plus.unsplash.com/premium_photo-1663099814676-72cfabfb91f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBsYWJ8ZW58MHx8MHx8fDA%3D",title:"Food competition"},
 {image:"https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D",title:"Independence Day"},
 {image:"https://plus.unsplash.com/premium_photo-1664302037070-0e836891a79e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnQlMjBkYXklMjByYWNlfGVufDB8fDB8fHww",title:"Art competition"},
 {image:"https://images.unsplash.com/photo-1629192848422-6bb37ed58f52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxhZyUyMGhvc3Rpbmd8ZW58MHx8MHx8fDA%3D",title:"Flag hosting"},
 ]
  return (
    <section
      id="Gallery"
      className="bg-linear-to-br from-blue-100 via-white  to-indigo-100 h-auto w-full md:pt-17 pt-5 pb-5 flex flex-col items-center"
    >
      <div>
        <h1 className="text-slate-900 md:text-[40px] text-[30px] font-bold font-poppins text-center">
          Our Memories
        </h1>
        <p className="text-gray-700 text-lg font-bold font-poppins  text-center">
          Explore Fun Moments, Festivals, and Gallery.
        </p>
      </div>

    <div className="bg-[#eef4ff] md:w-[65%] w-[90%] rounded-xl p-4 md:p-8 mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">

  {previewData.map((item, index) => (
    <div
      key={index}
      className={`
        relative 
        w-full
        h-48
        overflow-hidden 
        rounded-xl 
        shadow-lg 
        transition duration-300 
        hover:scale-105 hover:rotate-0
        ${index % 2 === 0 ? "md:rotate-2" : "md:-rotate-2"}
        ${index >= 4 ? "hidden md:block" : ""}
      `}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />

    
      <div className="absolute bottom-0 w-full bg-black/60 text-white text-center py-2 text-sm font-semibold">
        {item.title}
      </div>
    </div>
  ))}

</div>


      <button
        onClick={() => navigate("/gallery-images")}
        className="bg-linear-to-r from-blue-600 to-blue-500 mt-5 text-white outline-none px-6 py-3 rounded-xl shadow-lg font-semibold hover:scale-105 hover:shadow-blue-300/50 transition-all duration-300"
      >
        Explore Memories ➡️
      </button>
    </section>
  )
}

export default Gallery