import { forwardRef } from 'react';
import { useResumeStore } from '../store/ResumeStore';




// Resume section title component - reduced spacing
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-base font-bold text-gray-800 uppercase tracking-wider border-b border-blue-500 pb-1 mb-2">
    {children}
  </div>
);

// Experience item component - condensed layout
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
  <div className="mb-3">
    <div className="flex justify-between items-baseline">
      <div className="font-semibold text-gray-800 text-sm">{title}</div>
      <div className="text-xs text-gray-600">{period}</div>
    </div>
    <div className="flex justify-between items-baseline mb-1">
      <div className="font-medium text-gray-700 text-sm">{company}</div>
      <div className="text-xs text-gray-600">{location}</div>
    </div>
    <ul className="list-disc ml-4 space-y-0">
        <li className="text-xs text-gray-700 leading-tight">
        {descriptions}
        </li>
    </ul>
  </div>
);

// Education item component - more compact
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
  <div className="mb-2">
    <div className="flex justify-between items-baseline">
      <div className="font-semibold text-gray-800 text-sm">{degree}</div>
      <div className="text-xs text-gray-600">{period}</div>
    </div>
    <div className="flex justify-between items-baseline">
      <div className="font-medium text-gray-700 text-sm">{institution}</div>
      <div className="text-xs text-gray-600">{location}</div>
    </div>
    {details && <div className="text-xs text-gray-700">{details}</div>}
  </div>
);

// Skill item component - more compact
const SkillCategory = ({ 
  category, 
  skills 
}: { 
  category: string; 
  skills: string[] 
}) => (
  <div className="mb-2">
    <div className="font-medium text-gray-700 text-sm">{category}:</div>
    <div className="text-xs text-gray-700 leading-tight">
      {skills.join(', ')}
    </div>
  </div>
);

// Main resume template
const ProfessionalTemplate = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  (props, ref) => {

    const firstName = useResumeStore(state => state.firstName);
    const lastName = useResumeStore(state => state.lastName);
    const email = useResumeStore(state => state.email);
    const phone = useResumeStore(state => state.phone);
    const address = useResumeStore(state => state.address);
    const link = useResumeStore(state => state.link);
    const experience = useResumeStore(state => state.experience);
    const summary = useResumeStore(state => state.summary)
    const education = useResumeStore(state => state.education)
    const skills = useResumeStore(state => state.skills)
    const certifications = useResumeStore(state => state.certifications)
    const projects = useResumeStore(state => state.projects)

    // Sample data - in a real application, this would be passed as props
       const resumeData = {
      personalInfo: {
        name: `${firstName || 'John'} ${lastName || 'Doe'}`,
        email: email || 'abc@gmail.com',
        phone: phone || '+1 (123) 456-7890',
        linkedin: link || 'https://www.linkedin.com/in/johndoe',
        location: address || 'New York, NY'
      },
      summary:
        summary ||
        'Experienced software developer with 5+ years of expertise in building scalable web applications. Strong focus on front-end development with React and TypeScript. Passionate about creating elegant, user-friendly interfaces and maintaining high code quality.',
      experience:
        experience.length > 0
          ? experience.map((exp) => ({
              title: exp.title || 'Frontend Developer',
              company: exp.company || 'Tech Company',
              period: `${exp.startDate || 'Jan 2020'} - ${exp.endDate || 'Present'}`,
              location: exp.location || 'Remote',
              descriptions: exp.description?.length
                ? exp.description
                : ['Worked on multiple client projects using React and Node.js']
            }))
          : [
              {
                title: 'Senior Frontend Developer',
                company: 'Tech Solutions Inc.',
                period: 'Jan 2021 - Present',
                location: 'New York, NY',
                descriptions: [
                  'Lead development of a React-based dashboard used by 50,000+ monthly active users',
                  'Implemented responsive design principles, improving mobile user engagement by 35%',
                  'Architected state management solution using Redux, reducing UI bugs by 40%',
                  'Mentored junior developers and conducted code reviews to ensure best practices'
                ]
              }
            ],
      education:
        education.length > 0
          ? education
          : [
              {
                degree: 'Bachelor of Science in Computer Science',
                institution: 'University of Technology',
                period: '2012 - 2016',
                location: 'Boston, MA',
                details: "GPA: 3.8/4.0, Dean's List, Computer Science Honor Society"
              }
            ],
      skills:
        skills.length > 0
          ? skills
          : [
              {
                category: 'Programming Languages',
                skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Python']
              },
              {
                category: 'Frameworks & Libraries',
                skills: ['React', 'Redux', 'Next.js', 'TailwindCSS', 'Material UI', 'Jest']
              },
              {
                category: 'Tools & Platforms',
                skills: ['Git', 'Webpack', 'npm', 'AWS', 'Docker', 'CI/CD', 'Jira']
              },
              {
                category: 'Methodologies',
                skills: ['Agile/Scrum', 'TDD', 'Responsive Design', 'Accessibility (WCAG)']
              }
            ],
      certifications:
        certifications.length > 0
          ? certifications
          : ['AWS Certified Developer – Associate', 'Google Professional Web Developer'],
      projects:
        projects.length > 0
          ? projects
          : [
              {
                name: 'E-commerce Platform',
                description: 'Built a full-featured online store with React, Node.js, and MongoDB'
              },
              {
                name: 'Task Management App',
                description: 'Developed a Kanban-style productivity tool with drag-and-drop functionality'
              }
            ]
    };
    return (
      <div
        {...props}
        ref={ref}
        className="flex flex-col gap-3 p-6 bg-white w-[800px] h-[1200px] font-sans text-gray-800"
      >
        {/* Header Section */}
        <div className="flex flex-col gap-2 mb-1">
          <div className="text-2xl font-bold text-gray-900 text-center">
            {resumeData.personalInfo.name}
          </div>
          <div className="flex flex-row items-center justify-center gap-4 text-xs text-gray-600">
            <span>{resumeData.personalInfo.email}</span>
            <span>•</span>
            <span>{resumeData.personalInfo.phone}</span>
            <span>•</span>
            <span>{resumeData.personalInfo.linkedin}</span>
            <span>•</span>
            <span>{resumeData.personalInfo.location}</span>
          </div>
        </div>
        
        <hr className="border-t border-gray-300 w-full" />
        
        {/* Summary Section */}
        <div>
          <SectionTitle>Professional Summary</SectionTitle>
          <p className="text-xs text-gray-700 mb-2 leading-tight">
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
              period= {exp.period}
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
        <div>
          <SectionTitle>Certifications</SectionTitle>
          <ul className="list-disc ml-4 space-y-0 mb-2">
            {resumeData.certifications.map((cert, index) => (
              <li key={index} className="text-xs text-gray-700">
                {cert}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Projects Section */}
        <div>
          <SectionTitle>Projects</SectionTitle>
          <div className="space-y-1">
            {resumeData.projects.map((project, index) => (
              <div key={index} className="text-xs">
                <span className="font-medium text-gray-800">{project.name}: </span>
                <span className="text-gray-700">{project.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

ProfessionalTemplate.displayName = 'ProfessionalTemplate';
export default ProfessionalTemplate;