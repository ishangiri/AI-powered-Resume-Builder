import { useResumeStore } from '../../store/ResumeStore';

const SummarySection = () => {
  const summary = useResumeStore(state => state.summary);
  const setSummary = useResumeStore(state => state.setSummary);

  return (
    <textarea
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 bg-white min-h-[120px]"
      placeholder="Write a brief summary about yourself"
      value={summary}
      onChange={e => setSummary(e.target.value)}
    />
  );
};

export default SummarySection;
