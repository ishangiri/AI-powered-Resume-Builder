import { useResumeStore } from '../../store/ResumeStore';

const CertificationsSection = () => {
  const certifications = useResumeStore(state => state.certifications);
  const setCertifications = useResumeStore(state => state.setCertifications);

  return (
    <textarea
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 bg-white min-h-[100px]"
      placeholder="List any certifications or licenses you have earned"
      value={certifications}
        onChange={e => setCertifications(e.target.value.split(',').map(certifications => certifications.trim()).filter(certifications => certifications.length > 0))}
    />
  );
};

export default CertificationsSection;
