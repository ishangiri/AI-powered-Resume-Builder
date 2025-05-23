import { useResumeStore } from '../../store/ResumeStore';

const SkillsSection = () => {
  const skills = useResumeStore(state => state.skills);
  const setSkills = useResumeStore(state => state.setSkills);

  return (
    <textarea
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 bg-white min-h-[100px]"
      placeholder="List your skills (e.g., JavaScript, Python, Teamwork, Leadership)"
      value={skills}
      onChange={e => setSkills(e.target.value.split(',').map(skill => skill.trim()).filter(skill => skill.length > 0))}
    />
  );
};

export default SkillsSection;
