import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: '9-Month Professional Diploma in Civil Engineering Informatics',
      institution: 'Information Technology Institute (ITI) – Smart Village',
      department: 'Ministry of Communications and Information Technology (MCIT)',
      period: 'Oct. 2021 – Jul. 2022',
      achievements: [],
    },
    {
      degree: 'Bachelor of Science in Civil Engineering',
      institution: 'Suez Canal University – Faculty of Engineering',
      department: '',
      period: 'Sep. 2014 – May. 2019',
      grade: 'Cumulative Grade: Very Good',
      achievements: [],
    },
  ];

  const internships = [];

  const workshops = [
    'Certified Kubernetes Administrator (CKA) — In Progress',
  ];

  return (
    <section id="education" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Education & Training
            </h2>
            <div className="h-1 w-20 bg-emerald-400 mx-auto"></div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
              <GraduationCap size={28} />
              Academic Degrees
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 hover:border-emerald-400 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-emerald-400">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.department}</p>
                    </div>
                    <span className="text-gray-400 mt-2 md:mt-0">{edu.period}</span>
                  </div>

                  {edu.thesis && (
                    <p className="text-gray-300 mb-2">
                      <span className="text-emerald-400 font-semibold">Thesis:</span>{' '}
                      {edu.thesis}
                    </p>
                  )}

                  {edu.grade && (
                    <p className="text-gray-300 mb-2">
                      <span className="text-emerald-400 font-semibold">Grade:</span>{' '}
                      {edu.grade}
                    </p>
                  )}

                  {edu.achievements.length > 0 && (
                    <div className="mt-3 flex items-start gap-2">
                      <Award size={20} className="text-emerald-400 mt-1 flex-shrink-0" />
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 text-sm">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">
              Intensive Training Programs
            </h3>
            <div className="space-y-6">
              {internships.map((internship, index) => (
                <div
                  key={index}
                className="bg-zinc-900 p-6 rounded-lg border border-zinc-700"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">
                        {internship.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{internship.location}</p>
                    </div>
                    <span className="text-emerald-400 mt-2 md:mt-0">
                      {internship.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {internship.modules.map((module, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-300 text-sm">
                        <span className="text-emerald-400">▹</span>
                        <span>{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">
              Workshops & Courses
            </h3>
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700">
              <div className="grid md:grid-cols-2 gap-4">
                {workshops.map((workshop, index) => (
                  <div
                    key={index}
                    className="flex gap-3 text-gray-300 p-3 bg-zinc-800 rounded"
                  >
                    <span className="text-emerald-400">•</span>
                    <span>{workshop}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
