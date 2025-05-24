import React from 'react';
import { useResumeStore } from '../../store/ResumeStore';

const CertificationsSection = () => {
  const certifications = useResumeStore(state => state.certifications);
  const setCertifications = useResumeStore(state => state.setCertifications);

  const updateCertification = (index: number, value: string) => {
    const newCerts = [...certifications];
    newCerts[index] = value;
    setCertifications(newCerts);
  };

  const addCertification = () => {
    if (certifications.length >= 10) return;
    setCertifications([...certifications, '']);
  };

  const removeCertification = (index: number) => {
    setCertifications(certifications.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Certifications</h2>

      {certifications.map((cert, idx) => (
        <div key={idx} className="flex items-center mb-3 gap-2">
          <input
            type="text"
            placeholder="Certification or License"
            className="flex-grow px-3 py-2 border rounded"
            value={cert}
            onChange={e => updateCertification(idx, e.target.value)}
          />
          <button
            type="button"
            onClick={() => removeCertification(idx)}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      ))}

      {certifications.length < 10 && (
        <button
          type="button"
          onClick={addCertification}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Add Certification
        </button>
      )}
    </div>
  );
};

export default CertificationsSection;
