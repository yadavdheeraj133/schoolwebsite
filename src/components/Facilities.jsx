const Facilities = () => {
  return (
    <>
 <section id='Facilities' className='w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(239,68,68,0.10),transparent_60%)]'>
    <h1 className='text-3xl sm:text-4xl md:text-5xl text-slate-900 font-bold text-center font-poppins mb-4'>Facilities</h1>
    <p className='text-gray-700 font-medium text-base sm:text-lg md:text-xl px-2 text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12'>Our school offers state-of-the-art facilities to support learning and development.</p>
    
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto'>

     <div className='flex flex-col items-center gap-4 bg-white/10 border border-white/15 backdrop-blur-2xl rounded-xl p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-500'>
        <div className='w-16 sm:w-20 h-16 sm:h-20 bg-blue-500/20 rounded-full flex items-center justify-center text-2xl sm:text-3xl'>📚</div>
        <h3 className='text-lg sm:text-xl font-bold text-slate-900 -mb-2.5'>Library</h3>
        <div className="bg-[#821d1d] h-0.5 w-[21%] mb-1"></div>
        <p className='text-gray-700 text-center text-sm sm:text-base max-w-xs'>A well-stocked library with a wide range of books and digital resources.</p>
      </div>

      <div className='flex flex-col items-center gap-4 bg-white/10 border border-white/15 backdrop-blur-2xl rounded-xl p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-500'>
        <div className='w-16 sm:w-20 h-16 sm:h-20 bg-blue-500/20 rounded-full flex items-center justify-center text-2xl sm:text-3xl'>⚽</div>
        <h3 className='text-lg sm:text-xl font-bold text-slate-900 -mb-2.5'>Sports Facilities</h3>
        <div className="bg-[#821d1d] h-0.5 w-[48%] mb-1"></div>
        <p className='text-gray-700 text-center text-sm sm:text-base max-w-xs'>Modern sports facilities including a gym, playgrounds, and courts.</p>
      </div>

      <div className='flex flex-col items-center gap-4 bg-white/10 border border-white/15 backdrop-blur-2xl rounded-xl p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-500'>
        <div className='w-16 sm:w-20 h-16 sm:h-20 bg-blue-500/20 rounded-full flex items-center justify-center text-2xl sm:text-3xl'>💻</div>
        <h3 className='text-lg sm:text-xl font-bold text-slate-900 -mb-2.5'>Computer Lab</h3>
        <div className="bg-[#821d1d] h-0.5 w-[43%] mb-1"></div>
        <p className='text-gray-700 text-center text-sm sm:text-base max-w-xs'>Fully equipped computer lab with high-speed internet and modern software.</p>
      </div>

      


    </div>

    
   </section>
    </>
  )
}

export default Facilities