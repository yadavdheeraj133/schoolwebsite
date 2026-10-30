const TeachersSection = () => {
const teachers = [
  {
    id: 1,
    name: 'Jay',
    role: 'Mathematics Teacher',
    image: 'https://plus.unsplash.com/premium_photo-1683140840845-073fa9638261?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG1hbGUlMjBwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwaW1hZ2UlMjBpd3RoJTIwYm9vayUyMGluJTIwaGFuZHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 2,
    name: 'Abhishek',
    role: 'Science Teacher',
    image: 'https://plus.unsplash.com/premium_photo-1760308095913-53512a86dd5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFsZSUyMHByb2Zlc3Npb25hbCUyMHRlYWNoZXIlMjBpbWFnZSUyMGl3dGglMjBib29rJTIwaW4lMjBoYW5kfGVufDB8fDB8fHww',
  },
  {
    id: 3,
    name: 'Sushmita',
    role: 'English Teacher',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 4,
    name: 'Vivek',
    role: 'History Teacher',
    image: 'https://images.unsplash.com/photo-1769159523714-0b8d6c11d41e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2Zlc3Npb25hbCUyMHRlYWNoZXIlMjBpbWFnZSUyMGl3dGglMjBib29rJTIwaW4lMjBoYW5kfGVufDB8fDB8fHww',
  }
];


  return (
    <section className="bg-gray-50 pt-3 sm:pt-16 md:pt-20 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-3 sm:mb-4">
          Meet With Our <span className="text-red-500">Teachers</span>
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2">
          Our teachers are experienced and passionate, guiding students to achieve their best.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 lg:gap-6 place-items-center">
          {teachers.map((teacher) => (
            <div 
              key={teacher.id} 
              className="group bg-white rounded-3xl sm:rounded-4xl p-2 sm:p-3 w-full sm:w-56 md:w-64 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-200 aspect-4/5">
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="mt-2 sm:mt-3 mb-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-red-500 transition-colors">
                  {teacher.name}
                </h3>
                <p className="text-gray-500 text-xs font-semibold tracking-wider mt-1 uppercase">
                  {teacher.role}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;