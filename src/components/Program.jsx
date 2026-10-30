import React from "react";

const Program = () => {
  const programs = [
    {
      id: 1,
      title: "Concept-Based Learning",
      description:
        "We focus on clear understanding, not memorization. Interactive and activity-based methods to make learning fun and effective.",
      imagePosition: "left",
      icon: "📖",
    },
    {
      id: 2,
      title: "Skill & Personality Growth",
      description:
        "We help students develop confidence, communication, and teamwork skills for overall personality development",
      imagePosition: "right",
      icon: "🎯",
    },
    {
      id: 3,
      title: "Skill & Personality Growth",
      description:
        "We help students develop confidence, communication, and teamwork skills for overall personality development.",
      imagePosition: "left",
      icon: "🌟",
    },
    {
      id: 4,
      title: "Real-Life Application Classes",
      description:
        "Connecting lessons with real-world situations through practical examples and projects.",
      imagePosition: "right",
      icon: "🌍",
    },
  ];

  return (
    <section id="Program" className="md:pt-17 pt-7 z-0 relative pb-5  bg-linear-to-br from-gray-50 to-blue-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-[30px] md:text-[40px] font-bold font-poppins text-slate-900 text-center mb-4">
          Our Learning Approach
        </h2>
        <p className="text-lg md:text-xl text-gray-700 text-center mb-12 font-medium">
          Building strong foundation with practical and personal growth
        </p>

        <div className="flex flex-col gap-12">
          {programs.map((program, index) => {
            const isRight = program.imagePosition === "right";
            const boxDir = isRight ? "md:flex-row-reverse" : "md:flex-row";
            return (
              <div
                key={program.id}
                className={`flex flex-col ${boxDir} items-center gap-8 bg-white rounded-2xl p-6 md:p-8 shadow-md stack-card`}
                style={{ ['--i']: index }}
              >
                <div className="flex-none w-full md:w-2/5 flex justify-center items-center">
                  <div className="w-80 md:w-96 h-36 md:h-56 flex items-center justify-center text-5xl md:text-6xl bg-linear-to-br from-gray-100 to-blue-100 rounded-xl">
                    {program.icon}
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 inline-block">
                    {program.title}
                  </h3>
                  <div className="w-full h-1 bg-gray-300 rounded mb-5" />
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                    {program.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Program;