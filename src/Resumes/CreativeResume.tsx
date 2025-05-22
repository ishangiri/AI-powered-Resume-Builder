import { forwardRef } from 'react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-6">
    <h2 className="text-lg font-semibold text-indigo-600 border-b border-gray-300 mb-2">
      {title}
    </h2>
    {children}
  </div>
);

const Experience = ({ title, company, period, location, descriptions } : {title : string, company : string, period : string, location : string, descriptions : string[]}) => (
  <div className="mb-4">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-700">{company} – {location}</p>
      </div>
      <span className="text-sm text-gray-500">{period}</span>
    </div>
    <ul className="list-disc text-sm text-gray-700 ml-5 mt-1 space-y-1">
      {descriptions.map((d, i) => <li key={i}>{d}</li>)}
    </ul>
  </div>
);

const TemplateCreative = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>((props, ref) => {
  const resume = {
    personal: {
      name: 'Jane Doe',
      title: 'Full Stack Developer',
      email: 'jane.doe@example.com',
      phone: '(123) 456-7890',
      linkedin: 'linkedin.com/in/janedoe',
      location: 'New York, NY',
    },
    summary: 'Creative and detail-oriented developer with experience in full stack projects across e-commerce and productivity tools.',
    experience: [
      {
        title: 'Software Engineer',
        company: 'Tech Solutions',
        period: '2021 – Present',
        location: 'Remote',
        descriptions: ['Built scalable REST APIs using FastAPI', 'Led frontend redesign using Tailwind CSS', 'Improved load time by 40%']
      }, 
          {
        title: 'Software Engineer Intern',
        company: 'Innovatech',
        period: '2020 – 2021',
        location: 'Remote',
        descriptions: ['Built scalable REST APIs using FastAPI', 'Led frontend redesign using Tailwind CSS', 'Improved load time by 40%']
      }
    ],
    education: [
      {
        degree: 'BSc Computer Science',
        institution: 'NYU',
        period: '2017 – 2021',
        location: 'New York, NY'
      }
    ],
    skills: [
      { category: 'Frontend', skills: ['React', 'Tailwind', 'Next.js'] },
      { category: 'Backend', skills: ['FastAPI', 'Node.js', 'Express'] },
      { skills: ['Git', 'Docker', 'Vercel'] } // Without category
    ],
    certifications: ['AWS Developer Associate', 'Google Web Dev Certificate'],
    projects: [
      { name: 'AI Resume Builder', description: 'Generated resumes with GPT & React. Open source on GitHub.' },
      { name: 'Crypto Tracker', description: 'Tracked real-time crypto data with Chart.js and WebSockets.' },
      {name : 'E-commerce Platform', description: 'Developed a full-stack e-commerce platform with Next.js and FastAPI.'}
    ]
  };

  return (
    <div
      ref={ref}
      {...props}
      className="w-[900px] h-[1200px] bg-white shadow-md border border-gray-300 grid grid-cols-4 font-sans text-gray-900"
    >
      {/* Sidebar */}
      <div className="col-span-1 bg-indigo-50 p-8 flex flex-col items-start">
        <h1 className="text-2xl font-bold text-indigo-800">{resume.personal.name}</h1>
        <h2 className="text-sm font-medium text-indigo-600 mb-4">{resume.personal.title}</h2>
        <div className="text-sm text-gray-700 space-y-2">
          <p>{resume.personal.email}</p>
          <p>{resume.personal.phone}</p>
          <p>{resume.personal.linkedin}</p>
          <p>{resume.personal.location}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-3 p-8 mb-0 space-y-6">
        <Section title="Summary">
          <p className="text-sm text-gray-800">{resume.summary}</p>
        </Section>

        <Section title="Projects">
          {resume.projects.map((p, i) => (
            <div key={i} className="mb-2">
              <strong>{p.name}</strong>: <span className="text-sm">{p.description}</span>
            </div>
          ))}
        </Section>

        <Section title="Certifications">
          <ul className="list-disc text-sm ml-5 text-gray-700">
            {resume.certifications.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </Section>

        <Section title="Experience">
          {resume.experience.map((e, i) => <Experience key={i} {...e} />)}
        </Section>

        <Section title="Education">
          {resume.education.map((edu, i) => (
            <div key={i} className="mb-2">
              <div className="flex justify-between text-sm">
                <div className="font-medium">{edu.degree}</div>
                <div className="text-gray-500">{edu.period}</div>
              </div>
              <div className="text-sm text-gray-700">{edu.institution} – {edu.location}</div>
            </div>
          ))}
        </Section>

        <Section title="Skills">
          {resume.skills.map((s, i) =>
            s.category ? (
              <div key={i} className="mb-2">
                <strong className="text-sm text-gray-700">{s.category}</strong>
                <p className="text-sm text-gray-800">{s.skills.join(', ')}</p>
              </div>
            ) : (
              <p key={i} className="text-sm text-gray-800">{s.skills.join(', ')}</p>
            )
          )}
        </Section>
      </div>
    </div>
  );
});

TemplateCreative.displayName = 'TemplateCreative';
export default TemplateCreative;
