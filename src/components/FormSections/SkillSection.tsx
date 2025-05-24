import { useResumeStore } from '../../store/ResumeStore';

const SkillsSection = () => {
  const skills = useResumeStore(state => state.skills);
  const setSkills = useResumeStore(state => state.setSkills);

  const updateCategory = (index: number, field: 'category' | 'skills', value: string) => {
    const newSkills = [...skills];
    if (field === 'category') {
      newSkills[index].category = value;
    } else {
      // Store the raw user input as a single-element array to fit store type
      newSkills[index].skills = [value];
    }
    setSkills(newSkills);
  };

  const addCategory = () => {
    if (skills.length >= 3) return;
    setSkills([...skills, { category: '', skills: [''] }]);
  };

  const removeCategory = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Skills</h2>

      {skills.map((cat, idx) => (
        <div key={idx} className="mb-6 p-4 border rounded-md bg-gray-50">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Category #{idx + 1}</h3>
            <button
              type="button"
              onClick={() => removeCategory(idx)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>

          <input
            type="text"
            placeholder="Category (e.g., Programming Languages)"
            className="w-full mb-2 px-3 py-2 border rounded"
            value={cat.category}
            onChange={e => updateCategory(idx, 'category', e.target.value)}
          />

          <input
            type="text"
            placeholder="Skills (raw input)"
            className="w-full px-3 py-2 border rounded"
            value={cat.skills[0] || ''}
            onChange={e => updateCategory(idx, 'skills', e.target.value)}
          />
        </div>
      ))}

      {skills.length < 3 && (
        <button
          type="button"
          onClick={addCategory}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Add Skill Category
        </button>
      )}
    </div>
  );
};

export default SkillsSection;
