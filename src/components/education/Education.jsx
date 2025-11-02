import education from "../../data/education";

const Education = () => {
  return (
    <section id="education" className="content px-4 sm:px-6 md:px-12 lg:px-20 py-12">
      <div className="text-center mb-8">
        <p className="section-title">Education</p>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Formal education and training that helped shape my skills.</p>
      </div>

      <div className="relative">
        {/* vertical line for timeline on md+ */}
        <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-gray-200" />

        <div className="space-y-8">
          {education.map((e, idx) => (
            <div key={e.id} className="flex items-start md:items-center">
              {/* dot */}
              <div className="flex-shrink-0 z-10">
                <div className="h-4 w-4 rounded-full bg-picto-primary border-2 border-white shadow-md ml-4 mt-1" />
              </div>

              {/* card */}
              <div className="ml-6 flex-1">
                <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-base">{e.institution}</p>
                      <p className="text-sm text-gray-600 mt-1">{e.degree}</p>
                    </div>
                    <div className="text-sm text-gray-500 ml-4">{e.period}</div>
                  </div>

                  {e.details && <p className="text-sm text-gray-600 mt-3">{e.details}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
