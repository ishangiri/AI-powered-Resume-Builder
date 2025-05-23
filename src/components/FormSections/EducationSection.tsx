import { useResumeStore } from '../../store/ResumeStore';

const EducationSection = () => {
  const education = useResumeStore(state => state.education);
  const setEducation = useResumeStore(state => state.setEducation);

  return (
    <textarea
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 bg-white min-h-[120px]"
      placeholder="List your education background (e.g., University, Degrees, GPA)"
      value={education}
     onChange={e => setEducation(e.target.value.split(',').map(education => education.trim()).filter(education => education.length > 0))}
    />
  );
};

export default EducationSection;
