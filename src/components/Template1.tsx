import { forwardRef } from 'react';

// Resume section title component
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-lg font-bold text-gray-800 uppercase tracking-wider border-b-2 border-blue-500 pb-1 mb-3">
    {children}
  </div>
);

// Experience item component
const ExperienceItem = ({
  title,
  company,
  period,
  location,
  descriptions
}: {
  title: string;
  company: string;
  period: string;
  location: string;
  descriptions: string[];
}) => (
  <div className="mb-4">
    <div className="flex justify-between items-baseline mb-1">
      <div className="font-semibold text-gray-800">{title}</div>
      <div className="text-sm text-gray-600">{period}</div>
    </div>
    <div className="flex justify-between items-baseline mb-2">
      <div className="font-medium text-gray-700">{company}</div>
      <div className="text-sm text-gray-600">{location}</div>
    </div>
    <ul className="list-disc ml-5 space-y-1">
      {descriptions.map((desc, index) => (
        <li key={index} className="text-sm text-gray-700">
          {desc}
        </li>
      ))}
    </ul>
  </div>
);

// Education item component
const EducationItem = ({
  degree,
  institution,
  period,
  location,
  details
}: {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details?: string;
}) => (
  <div className="mb-4">
    <div className="flex justify-between items-baseline mb-1">
      <div className="font-semibold text-gray-800">{degree}</div>
      <div className="text-sm text-gray-600">{period}</div>
    </div>
    <div className="flex justify-between items-baseline mb-1">
      <div className="font-medium text-gray-700">{institution}</div>
      <div className="text-sm text-gray-600">{location}</div>
    </div>
    {details && <div className="text-sm text-gray-700">{details}</div>}
  </div>
);

// Skill item component
const SkillCategory = ({ 
  category, 
  skills 
}: { 
  category: string; 
  skills: string[] 
}) => (
  <div className="mb-3">
    <div className="font-medium text-gray-700 mb-1">{category}:</div>
    <div className="text-sm text-gray-700">
      {skills.join(', ')}
    </div>
  </div>
);

// Main resume template
const Template1 = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  (props, ref) => {
    // Sample data - in a real application, this would be passed as props
    const resumeData = {
      personalInfo: {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        phone: "(123) 456-7890",
        linkedin: "linkedin.com/in/janedoe",
        location: "New York, NY"
      },
      summary: "Experienced software developer with 5+ years of expertise in building scalable web applications. Strong focus on front-end development with React and TypeScript. Passionate about creating elegant, user-friendly interfaces and maintaining high code quality.",
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
          category: "Programming Languages",
          skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python"]
        },
        {
          category: "Frameworks & Libraries",
          skills: ["React", "Redux", "Next.js", "TailwindCSS", "Material UI", "Jest"]
        },
        {
          category: "Tools & Platforms",
          skills: ["Git", "Webpack", "npm", "AWS", "Docker", "CI/CD", "Jira"]
        },
        {
          category: "Methodologies",
          skills: ["Agile/Scrum", "Test-Driven Development", "Responsive Design", "Accessibility (WCAG)"]
        }
      ],
      certifications: [
        "AWS Certified Developer – Associate",
        "Google Professional Web Developer"
      ],
      projects: [
        {
          name: "E-commerce Platform",
          description: "Built a full-featured online store with React, Node.js, and MongoDB"
        },
        {
          name: "Task Management App",
          description: "Developed a Kanban-style productivity tool with drag-and-drop functionality"
        }
      ]
    };

    return (
      <div
        {...props}
        ref={ref}
        className="flex flex-col gap-4 p-10 bg-white w-[800px] h-[1100px] font-sans text-gray-800"
      >
        {/* Header Section */}
        <div className="flex flex-col gap-3 mb-2">
          <div className="text-3xl font-bold text-gray-900 text-center">
            {resumeData.personalInfo.name}
          </div>
          <div className="flex flex-row items-center justify-center gap-5 text-sm text-gray-600">
            <p>{resumeData.personalInfo.email}</p>
            <p>•</p>
            <p>{resumeData.personalInfo.phone}</p>
            <p>•</p>
            <p>{resumeData.personalInfo.linkedin}</p>
            <p>•</p>
            <p>{resumeData.personalInfo.location}</p>
          </div>
        </div>
        
        <hr className="border-t border-gray-300 w-full" />
        
        {/* Summary Section */}
        <div>
          <SectionTitle>Professional Summary</SectionTitle>
          <p className="text-sm text-gray-700 mb-4">
            {resumeData.summary}
          </p>
        </div>
        
        {/* Experience Section */}
        <div>
          <SectionTitle>Professional Experience</SectionTitle>
          {resumeData.experience.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              location={exp.location}
              descriptions={exp.descriptions}
            />
          ))}
        </div>
        
        {/* Education Section */}
        <div>
          <SectionTitle>Education</SectionTitle>
          {resumeData.education.map((edu, index) => (
            <EducationItem
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              period={edu.period}
              location={edu.location}
              details={edu.details}
            />
          ))}
        </div>
        
        {/* Skills Section */}
        <div>
          <SectionTitle>Skills</SectionTitle>
          <div className="grid grid-cols-2 gap-x-4">
            {resumeData.skills.map((skill, index) => (
              <SkillCategory
                key={index}
                category={skill.category}
                skills={skill.skills}
              />
            ))}
          </div>
        </div>
        
        {/* Certifications Section */}
        {/* <div>
          <SectionTitle>Certifications</SectionTitle>
          <ul className="list-disc ml-5 space-y-1 mb-4">
            {resumeData.certifications.map((cert, index) => (
              <li key={index} className="text-sm text-gray-700">
                {cert}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Projects Section */}
        {/* <div>
          <SectionTitle>Projects</SectionTitle>
          <div className="space-y-2 mb-4">
            {resumeData.projects.map((project, index) => (
              <div key={index} className="text-sm">
                <span className="font-medium text-gray-800">{project.name}: </span>
                <span className="text-gray-700">{project.description}</span>
              </div>
            ))}
          </div>
        </div> */}
     </div>
    );
  }
);

Template1.displayName = 'ResumeTemplate';
export default Template1;