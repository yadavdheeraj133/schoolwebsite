import heroImage from "./hero.jpeg";

const Hero = () => {
  return (
    <section id="Hero" className="pt-20 px-6 md:px-8 lg:px-16">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        <div className="left w-full lg:w-1/2 text-center flex flex-col justify-center items-center gap-5">
          <h1 className="text-slate-900 text-3xl md:text-[40px] font-bold font-poppins leading-tight">
            A Safe Place to Learn, Play & 
             <span className="text-[#ec0e0e] md:block -mt-2">Grow</span>
          </h1>

          <div className="bg-[#b6baba] h-0.5 w-3/4 md:w-2/3 mb-2"></div>

          <p className="text-[#939595] text-base md:text-lg font-medium font-poppins w-3/4 md:w-2/3">
            Empower young minds with quality education and care for a brighter future.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-[#de2929] text-white md:px-6 md:py-2  p-3 rounded-lg font-medium hover:bg-[#d95959] transition transform hover:scale-105">
              Apply for Admission
            </button>
            <button className="bg-transparent text-[#2784db] border-2 border-[#3987d1] md:px-6 md:py-2  p-3 rounded-lg font-medium hover:bg-[#3b82c4] hover:text-white transition transform hover:scale-105">
              Explore Programs
            </button>
          </div>
        </div>

        <div className="right w-full lg:w-1/2 flex justify-center items-center">
          <div className="h-60 mt-3 sm:h-80 md:h-96 w-[95%] md:w-full rounded-2xl overflow-hidden shadow-lg">
            <img
              src={heroImage}
              alt="Hero"
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
