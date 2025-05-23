import { useResumeStore } from '../../store/ResumeStore';

const ProjectsSection = () => {
  const projects = useResumeStore(state => state.projects);
  const setProjects = useResumeStore(state => state.setProjects);

  return (
    <textarea
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 bg-white min-h-[120px]"
      placeholder="Mention relevant projects (e.g., title, technologies, outcomes)"
      value={projects}
     
     onChange={e => setProjects(e.target.value.split(',').map(projects => projects.trim()).filter(projects => projects.length > 0))}
    />
  );
};

export default ProjectsSection;
