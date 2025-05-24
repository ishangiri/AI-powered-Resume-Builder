import { useResumeStore } from '../../store/ResumeStore';

const EducationSection = () => {
  const education = useResumeStore(state => state.education);
  const setEducation = useResumeStore(state => state.setEducation);

  const updateEducation = (
    index: number,
    field: keyof typeof education[0],
    value: string
  ) => {
    const newEducation = [...education];
    newEducation[index] = { ...newEducation[index], [field]: value };
    setEducation(newEducation);
  };

  const addEducation = () => {
    if (education.length >= 3) return;
    setEducation([...education, { degree: '', institution: '', period: '', location: '', details: '' }]);
  };

  const removeEducation = (index: number) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Education</h2>

      {education.map((edu, idx) => (
        <div key={idx} className="mb-6 p-4 border rounded-md bg-gray-50">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Education #{idx + 1}</h3>
            <button
              type="button"
              onClick={() => removeEducation(idx)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>

          <input
            type="text"
            placeholder="Degree"
            className="w-full mb-2 px-3 py-2 border rounded"
            value={edu.degree}
            onChange={e => updateEducation(idx, 'degree', e.target.value)}
          />
          <input
            type="text"
            placeholder="Institution"
            className="w-full mb-2 px-3 py-2 border rounded"
            value={edu.institution}
            onChange={e => updateEducation(idx, 'institution', e.target.value)}
          />
          <input
            type="text"
            placeholder="Period (e.g., 2015 - 2019)"
            className="w-full mb-2 px-3 py-2 border rounded"
            value={edu.period}
            onChange={e => updateEducation(idx, 'period', e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full mb-2 px-3 py-2 border rounded"
            value={edu.location}
            onChange={e => updateEducation(idx, 'location', e.target.value)}
          />
          <textarea
            placeholder="Details (optional)"
            className="w-full px-3 py-2 border rounded resize-none min-h-[60px]"
            value={edu.details || ''}
            onChange={e => updateEducation(idx, 'details', e.target.value)}
          />
        </div>
      ))}

      {education.length < 3 && (
        <button
          type="button"
          onClick={addEducation}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Add Education
        </button>
      )}
    </div>
  );
};

export default EducationSection;
