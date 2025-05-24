import { useState } from 'react';
import AccordionItem from './AccordionItem';
import { User, FileText, Code, Briefcase, GraduationCap, Award, Trophy } from 'lucide-react';
import PersonalDetails from './FormSections/PersonalDetails';
import SummarySection from './FormSections/SummarySection';
import SkillsSection from './FormSections/SkillSection';
import ExperienceSection from './FormSections/ExperienceSection';
import EducationSection from './FormSections/EducationSection';
import ProjectsSection from './FormSections/ProjectSection';
import CertificationsSection from './FormSections/CertificateSection';
import Button from './ui/Button';

const ResumeForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const [openItems, setOpenItems] = useState(['personal-details']);

  const toggleItem = (value: string) => {
    setOpenItems(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [value]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4">
      <div className="min-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Resume Builder</h1>
          <p className="text-gray-600">Create your professional resume in minutes</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 space-y-8">
          <AccordionItem value="personal-details" title="Personal Details" icon={User} openItems={openItems} toggleItem={toggleItem}>
            <PersonalDetails />
          </AccordionItem>

          <AccordionItem value="summary" title="Professional Summary" icon={FileText} openItems={openItems} toggleItem={toggleItem}>
            <SummarySection />
          </AccordionItem>

          <AccordionItem value="skills" title="Skills" icon={Code} openItems={openItems} toggleItem={toggleItem}>
            <SkillsSection />
          </AccordionItem>

          <AccordionItem value="experience" title="Work Experience" icon={Briefcase} openItems={openItems} toggleItem={toggleItem}>
            <ExperienceSection />
          </AccordionItem>

          <AccordionItem value="education" title="Education" icon={GraduationCap} openItems={openItems} toggleItem={toggleItem}>
            <EducationSection />
          </AccordionItem>

          <AccordionItem value="projects" title="Projects" icon={Award} openItems={openItems} toggleItem={toggleItem}>
            <ProjectsSection />
          </AccordionItem>

          <AccordionItem value="certifications" title="Certifications" icon={Trophy} openItems={openItems} toggleItem={toggleItem}>
            <CertificationsSection />
          </AccordionItem>

       <Button onSubmit={onSubmit} text="Generate Summary" />
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
