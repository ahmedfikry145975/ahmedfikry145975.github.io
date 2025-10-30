import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Professional Software Engineer',
      company: 'Datenlotsen Informationssysteme GmbH',
      location: 'Cairo, Egypt',
      period: 'Apr. 2023 – Present',
      type: 'Full-time',
      responsibilities: [
        'Developed enterprise-level applications using .NET C# and Entity Framework',
        'Built business process automation using Windows Workflow Foundation (WF)',
        'Managed CI/CD pipelines via Azure DevOps',
        'Performed unit testing to ensure code reliability and maintainability',
        'Created enhanced user interfaces using DevExpress',
        'Utilized LINQ for efficient data manipulation and queries',
      ],
    },
    {
      title: 'Junior Software Engineer',
      company: 'Datenlotsen Informationssysteme GmbH',
      location: 'Cairo, Egypt',
      period: 'Oct. 2022 – Mar. 2023',
      type: 'Full-time',
      responsibilities: [
        'Assisted in developing enterprise-level applications using .NET C# and Entity Framework',
        'Contributed to business process automation using Windows Workflow Foundation (WF)',
        'Supported CI/CD pipeline management via Azure DevOps',
        'Participated in unit testing and debugging to ensure code reliability',
      ],
    },
    {
      title: 'Intern Software Engineer',
      company: '—',
      location: 'Cairo, Egypt',
      period: 'Oct. 2021 – Jul. 2022',
      type: 'Full-time',
      responsibilities: [
        'Contributed to internal tools and learned best practices in .NET development',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work Experience
            </h2>
            <div className="h-1 w-20 bg-emerald-400 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-lg border border-zinc-700 hover:border-emerald-400 transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-gray-400 mb-2">
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-emerald-400">
                        <Calendar size={16} />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <span className="text-sm px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full border border-emerald-400/30 w-fit">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-300">
                        <span className="text-emerald-400 mt-1">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* {exp.keyProject && (
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <p className="text-sm text-gray-400">
                        <span className="text-cyan-400 font-semibold">
                          Key Project:
                        </span>{' '}
                        {exp.keyProject}
                      </p>
                    </div>
                  )} */}

                  {exp.keyProjects && (
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <p className="text-sm text-emerald-400 font-semibold mb-2">
                        Key Projects:
                      </p>
                      <ul className="space-y-1">
                        {exp.keyProjects.map((project, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex gap-2">
                            <span className="text-emerald-400">•</span>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
