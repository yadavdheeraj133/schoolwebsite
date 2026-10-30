import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#Facilities", label: "Facilities" },
    { href: "#Gallery", label: "Gallery" },
    { href: "#Contact", label: "Contact" },
    { href: "#Program", label: "Program" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1E3A5F]">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 ">
      
        <h1 className="text-white/90 text-[22px] md:text-[26px] font-extrabold">R.N. PUBLIC SCHOOL</h1>

        <nav className="hidden md:flex items-center gap-8 text-white text-[16px] font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:underline">
              {l.label}
            </a>
          ))}
          <a
            href="#Admission"
            className="ml-2 bg-white text-[#1e3a5f] rounded-lg px-4 py-1.5 font-semibold"
          >
            Apply Now
          </a>
        </nav>

        
        <button
          className="md:hidden text-white p-2 rounded-md"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
         
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      
      <div className={`md:hidden bg-[#1E3A5F] text-white px-6 pt-2 pb-6 transition-all ${open ? "block" : "hidden"}`}>
        <nav className="flex flex-col gap-4 text-lg">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block">
              {l.label}
            </a>
          ))}
          <a
            href="#Admission"
            onClick={() => setOpen(false)}
            className="inline-block bg-white text-[#1e3a5f] rounded-lg px-4 py-2 mt-1 font-semibold"
          >
            Apply Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;