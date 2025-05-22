import React from 'react';

const data = {
  name: 'Jane Doe',
  title: 'Creative Designer',
  summary:
    'Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.',
  contact: {
    email: 'jane.doe@example.com',
    phone: '+1234567890',
    location: 'New York, USA',
  },
  skills: ['Adobe Creative Suite', 'UI/UX Design', 'Illustration', 'Branding'],
  education: [
    {
      school: 'Parsons School of Design',
      degree: 'BFA in Graphic Design',
      startYear: '2015',
      endYear: '2019',
    },
  ],
  projects: [
    {
      title: 'Brand Identity for XYZ Corp',
      description: 'Developed a comprehensive brand identity including logo, color palette, and typography.',
    },
    {
      title: 'Website Redesign for ABC Inc',
      description: 'Led the redesign of the company website, improving user experience and increasing traffic by 30%.',
    },
  ],
  certifications: ["Adobe Certified Expert", "UX Design Certification"],
  experience: [
    {
      company: 'Creative Studio',
      position: 'Lead Graphic Designer',
      startDate: 'Jan 2020',
      endDate: 'Present',
      description: [
        'Led the design of a new visual identity for a high-profile client, increasing brand recognition by 40%.',
        'Mentored 3 junior designers and streamlined the team workflow.',
      ],
    },
    {
      company: 'Freelance',
      position: 'Graphic Designer',
      startDate: 'Jun 2018',
      endDate: 'Dec 2019',
      description: [
        'Worked with startups to develop branding and marketing materials.',
        'Created over 30 design projects including logos, brochures, and websites.',
      ],
    },
  ],
};

const TemplateCreative = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="w-full max-w-4xl bg-white font-sans text-gray-900 p-8"
      style={{ 
        printColorAdjust: 'exact',
        WebkitPrintColorAdjust: 'exact',
        fontSize: '12px',
        lineHeight: '1.4'
      }}
    >
      {/* Header */}
      <div className="text-center mb-6 pb-4 border-b-2 border-blue-600">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">{data.name}</h1>
        <p className="text-lg text-blue-600 font-medium mb-3">{data.title}</p>
        <div className="flex justify-center items-center space-x-4 text-sm text-gray-600">
          <span>{data.contact.email}</span>
          <span>•</span>
          <span>{data.contact.phone}</span>
          <span>•</span>
          <span>{data.contact.location}</span>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-blue-600 mb-2 uppercase tracking-wide border-b border-blue-200 pb-1">
          Professional Summary
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed">{data.summary}</p>
      </div>

      {/* Professional Experience */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-blue-600 mb-3 uppercase tracking-wide border-b border-blue-200 pb-1">
          Professional Experience
        </h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="text-base font-bold text-gray-900">{exp.position}</h3>
                <p className="text-sm font-medium text-gray-700">{exp.company}</p>
              </div>
              <p className="text-sm text-gray-600 font-medium">
                {exp.startDate} - {exp.endDate}
              </p>
            </div>
            <ul className="mt-2 space-y-1">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-start">
                  <span className="mr-2 mt-1.5 w-1 h-1 bg-blue-600 rounded-full flex-shrink-0"></span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Skills and Education in two columns */}
      <div className="grid grid-cols-2 gap-8">
        {/* Skills */}
        <div>
          <h2 className="text-lg font-bold text-blue-600 mb-3 uppercase tracking-wide border-b border-blue-200 pb-1">
            Skills
          </h2>
          <ul className="space-y-1">
            {data.skills.map((skill, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-center">
                <span className="mr-2 w-1 h-1 bg-blue-600 rounded-full flex-shrink-0"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-lg font-bold text-blue-600 mb-3 uppercase tracking-wide border-b border-blue-200 pb-1">
            Education
          </h2>
          {data.education.map((edu, index) => (
            <div key={index}>
              <h3 className="text-sm font-bold text-gray-900">{edu.degree}</h3>
              <p className="text-sm text-gray-700 font-medium">{edu.school}</p>
              <p className="text-sm text-gray-600">
                {edu.startYear} - {edu.endYear}
              </p>
            </div>
          ))}
        </div>
            <div>
          <h2 className="text-lg font-bold text-blue-600 mb-3 uppercase tracking-wide border-b border-blue-200 pb-1">
            Projects
          </h2>
          <ul className="space-y-1">
            {data.projects.map((project, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-center">
                {project.title}: {project.description}  
              </li>
            ))}
          </ul>
        </div>
           <div>
          <h2 className="text-lg font-bold text-blue-600 mb-3 uppercase tracking-wide border-b border-blue-200 pb-1">
            Certifications
          </h2>
          <ul className="space-y-1">
            {data.certifications.map((Certification, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-center">
                <span className="mr-2 w-1 h-1 bg-blue-600 rounded-full flex-shrink-0"></span>
                {Certification}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

TemplateCreative.displayName = 'TemplateCreative';

export default TemplateCreative;