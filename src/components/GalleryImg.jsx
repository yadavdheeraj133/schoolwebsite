const GalleryImg = () => {

  const images = [
 "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaG9vbCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww",
 "https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xhc3Nyb29tfGVufDB8fDB8fHww",
 "https://plus.unsplash.com/premium_photo-1663099814676-72cfabfb91f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBsYWJ8ZW58MHx8MHx8fDA%3D",
 "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D",
 "https://plus.unsplash.com/premium_photo-1664302037070-0e836891a79e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnQlMjBkYXklMjByYWNlfGVufDB8fDB8fHww",
 "https://images.unsplash.com/photo-1629192848422-6bb37ed58f52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxhZyUyMGhvc3Rpbmd8ZW58MHx8MHx8fDA%3D",
 "https://plus.unsplash.com/premium_photo-1685015993397-a013c5c7c6ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFuY2UlMjBwZXJmb3JtYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
 "https://images.unsplash.com/photo-1744178173167-5bf201681dd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpY2UlMjBkaXN0cmlidXRpb258ZW58MHx8MHx8fDA%3D",
 "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2NpZW5jZSUyMGV4cGVyaW1lbnR8ZW58MHx8MHx8fDA%3D",
 "https://images.unsplash.com/photo-1641320201668-1b2bedb4a066?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZSUyMHBsYW50YXRpb258ZW58MHx8MHx8fDA%3D",
 "https://media.istockphoto.com/id/1146902225/photo/students-celebrating-success.webp?a=1&b=1&s=612x612&w=0&k=20&c=UbSfyVdcSIykero7VjUSiTbkKVvUuK7GGtrr5CuLS7Q=",
 "https://media.istockphoto.com/id/1343473005/photo/teacher-teaching-concepts-of-windmill-in-the-classroom-to-students.webp?a=1&b=1&s=612x612&w=0&k=20&c=5Fg8kxgI9HIz7TSA4I8L0adzprCs4uLXNq4T_EgvyJA=",
 "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaG9vbCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww",
 "https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xhc3Nyb29tfGVufDB8fDB8fHww",
 "https://plus.unsplash.com/premium_photo-1663099814676-72cfabfb91f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBsYWJ8ZW58MHx8MHx8fDA%3D",
 "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D",
 "https://plus.unsplash.com/premium_photo-1664302037070-0e836891a79e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnQlMjBkYXklMjByYWNlfGVufDB8fDB8fHww",
 "https://images.unsplash.com/photo-1629192848422-6bb37ed58f52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxhZyUyMGhvc3Rpbmd8ZW58MHx8MHx8fDA%3D",
 "https://plus.unsplash.com/premium_photo-1685015993397-a013c5c7c6ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFuY2UlMjBwZXJmb3JtYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
 "https://images.unsplash.com/photo-1744178173167-5bf201681dd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpY2UlMjBkaXN0cmlidXRpb258ZW58MHx8MHx8fDA%3D",
 "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2NpZW5jZSUyMGV4cGVyaW1lbnR8ZW58MHx8MHx8fDA%3D",
 "https://images.unsplash.com/photo-1641320201668-1b2bedb4a066?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZSUyMHBsYW50YXRpb258ZW58MHx8MHx8fDA%3D",
 "https://media.istockphoto.com/id/1146902225/photo/students-celebrating-success.webp?a=1&b=1&s=612x612&w=0&k=20&c=UbSfyVdcSIykero7VjUSiTbkKVvUuK7GGtrr5CuLS7Q=",
 "https://media.istockphoto.com/id/1343473005/photo/teacher-teaching-concepts-of-windmill-in-the-classroom-to-students.webp?a=1&b=1&s=612x612&w=0&k=20&c=5Fg8kxgI9HIz7TSA4I8L0adzprCs4uLXNq4T_EgvyJA="
]

  return (
    <div className="min-h-screen bg-gray-100 py-5 px-2">
<h1 className="text-center text-4xl mb-5 font-bold text-gray-800">School Gallery</h1>
     
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">

        {images.map((img, index) => (
          <div  key={index}  className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300" >
           
            <img src={img}  alt="school" className="w-full rounded-xl hover:scale-105 transition duration-300"/>
          </div>
        ))}

      </div>
    </div>
  )
}

export default GalleryImg