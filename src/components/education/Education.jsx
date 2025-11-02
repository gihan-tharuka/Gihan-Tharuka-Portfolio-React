import education from "../../data/education";

const Education = () => {
  return (
    <section id="education" className="content px-4 sm:px-6 md:px-12 lg:px-20 py-12">
      <div className="text-center mb-8">
        <p className="section-title">Education</p>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Formal education and training that helped shape my skills.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {education.map((e) => (
          <div key={e.id} className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-base">{e.institution}</p>
                <p className="text-sm text-gray-600 mt-1">{e.degree}</p>
              </div>
              <div className="text-sm text-gray-400">{e.period}</div>
            </div>

            {e.details && <p className="text-sm text-gray-600 mt-3">{e.details}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
