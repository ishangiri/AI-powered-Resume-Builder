import { useResumeStore } from '../../store/ResumeStore';

const ExperienceSection = () => {
  const experience = useResumeStore(state => state.experience);
  const setExperience = useResumeStore(state => state.setExperience);

  return (
    <textarea
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 bg-white min-h-[150px]"
      placeholder="Describe your work experience, roles, and achievements"
      value={experience}
      onChange={e => setExperience(e.target.value.split(',').map(experience => experience.trim()).filter(experience => experience.length > 0))}
    />
  );
};

export default ExperienceSection;
