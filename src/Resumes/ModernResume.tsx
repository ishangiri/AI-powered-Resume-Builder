import { forwardRef } from 'react';

// Section Title - bold left line style
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-sm font-semibold text-blue-800 border-l-4 border-blue-500 pl-2 mb-2">
    {children}
  </h2>
);

const ExperienceItem = ({
  title,
  company,
  period,
  location,
  descriptions,
}: {
  title: string;
  company: string;
  period: string;
  location: string;
  descriptions: string[];
}) => (
  <div className="mb-4">
    <div className="flex justify-between">
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="text-sm text-gray-500">{period}</div>
    </div>
    <div className="flex justify-between mb-1">
      <div className="text-sm text-gray-700">{company}</div>
      <div className="text-sm text-gray-500">{location}</div>
    </div>
    <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
      {descriptions.map((desc, index) => (
        <li key={index}>{desc}</li>
      ))}
    </ul>
  </div>
);

const EducationItem = ({
  degree,
  institution,
  period,
  location,
  details,
}: {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details?: string;
}) => (
  <div className="mb-3">
    <div className="flex justify-between">
      <div className="font-medium text-gray-900">{degree}</div>
      <div className="text-sm text-gray-500">{period}</div>
    </div>
    <div className="flex justify-between">
      <div className="text-sm text-gray-700">{institution}</div>
      <div className="text-sm text-gray-500">{location}</div>
    </div>
    {details && <p className="text-sm text-gray-600 mt-1">{details}</p>}
  </div>
);

const SkillCategory = ({
  skills,
}: {
  skills: string[];
}) => (
  <div className="mb-3">
    <div className="text-sm text-gray-700 font-semibold">{skills.join(', ')}</div>
  </div>
);

const ModernTemplate = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  (props, ref) => {
    const resumeData = {
      personalInfo: {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        phone: '(123) 456-7890',
        linkedin: 'linkedin.com/in/janedoe',
        location: 'New York, NY',
      },
      summary:
        'Experienced software developer with 5+ years of expertise in building scalable web applications...',
      experience: [
        {
          title: "Senior Frontend Developer",
          company: "Tech Solutions Inc.",
          period: "Jan 2021 - Present",
          location: "New York, NY",
          descriptions: [
            "Lead development of a React-based dashboard used by 50,000+ monthly active users",
            "Implemented responsive design principles, improving mobile user engagement by 35%",
            "Architected state management solution using Redux, reducing UI bugs by 40%",
            "Mentored junior developers and conducted code reviews to ensure best practices"
          ]
        },
        {
          title: "Frontend Developer",
          company: "Digital Innovations",
          period: "Mar 2018 - Dec 2020",
          location: "Boston, MA",
          descriptions: [
            "Developed and maintained multiple client-facing web applications using React",
            "Collaborated with UX designers to implement pixel-perfect interfaces",
            "Reduced initial load time by 30% through code splitting and lazy loading techniques",
            "Integrated RESTful APIs and implemented caching strategies for improved performance"
          ]
        },
        {
          title: "Junior Web Developer",
          company: "WebTech Solutions",
          period: "Jun 2016 - Feb 2018",
          location: "Boston, MA",
          descriptions: [
            "Built responsive websites for clients using HTML, CSS, and JavaScript",
            "Contributed to the development of internal component library",
            "Assisted in debugging cross-browser compatibility issues"
          ]
        }
      ],
      education: [
        {
          degree: "Bachelor of Science in Computer Science",
          institution: "University of Technology",
          period: "2012 - 2016",
          location: "Boston, MA",
          details: "GPA: 3.8/4.0, Dean's List, Computer Science Honor Society"
        }
      ],
      skills: [
        {
          skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python"]
        },
      ],
      certifications: [
        'AWS Certified Developer – Associate',
        'Google Professional Web Developer',
      ],
      projects: [
        {
          name: 'E-commerce Platform',
          description:
            'Built a full-featured online store with React, Node.js, and MongoDB',
        },
        {
          name: 'Task Management App',
          description:
            'Developed a Kanban-style productivity tool with drag-and-drop functionality',
        },
      ],
    };

    return (
      <div
        {...props}
        ref={ref}
        className="w-[800px] h-[1200px] p-8 bg-gray-50 font-sans text-gray-900 shadow-sm border border-gray-200"
      >
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">{resumeData.personalInfo.name}</h1>
          <div className="text-sm text-gray-600 mt-1 flex flex-wrap gap-x-4">
            <span>{resumeData.personalInfo.email}</span>
            <span>{resumeData.personalInfo.phone}</span>
            <span>{resumeData.personalInfo.linkedin}</span>
            <span>{resumeData.personalInfo.location}</span>
          </div>
        </div>


           {/* Summary */}
        <div className="mb-4">
          <SectionTitle>Summary</SectionTitle>
          <p className="text-sm text-gray-800">{resumeData.summary}</p>
        </div>

       
        {/* Projects */}
        <div className="mb-4">
          <SectionTitle>Projects</SectionTitle>
          {resumeData.projects.map((proj, i) => (
            <div key={i} className="mb-1">
              <span className="font-semibold">{proj.name}:</span>{' '}
              <span className="text-sm">{proj.description}</span>
            </div>
          ))}
        </div>

          {/* Skills */}
        <div>
          <SectionTitle>Skills</SectionTitle>
          <div className="grid grid-cols-2 gap-x-8">
            {resumeData.skills.map((skill, i) => (
              <SkillCategory key={i} {...skill} />
            ))}
          </div>
        </div>
     


        {/* Experience */}
        <div className="mb-4">
          <SectionTitle>Professional Experience</SectionTitle>
          {resumeData.experience.map((exp, i) => (
            <ExperienceItem key={i} {...exp} />
          ))}
        </div>

        {/* Education */}
        <div className="mb-4">
          <SectionTitle>Education</SectionTitle>
          {resumeData.education.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </div>

             {/* Certifications */}
        <div className="mb-4">
          <SectionTitle>Certifications</SectionTitle>
          <ul className="list-disc ml-5 text-sm text-gray-700">
            {resumeData.certifications.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        </div>

 </div>
      
    );
  }
);

ModernTemplate.displayName = 'ResumeTemplate2';
export default ModernTemplate;
