import { createFileRoute } from '@tanstack/react-router'
import { useReactToPrint } from 'react-to-print';
// import ProfessionalTemplate from '../Resumes/ProfessionalResume';
import  ResumeTemplate    from '../Resumes/MCreativeResume';
import { useRef } from 'react';
import ResumeForm from '../components/Form';

function Template1Page() {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  
  const onSubmit = async () => {
    console.log("Form submitted");
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Side - Form */}
      <div className="w-1/2 p-6 bg-white shadow-lg overflow-y-auto">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Edit Resume</h1>
          <ResumeForm onSubmit={onSubmit} />
          
          {/* Print Button */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md"
              onClick={reactToPrintFn}
            >
              Print Resume
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Resume Preview */}
      <div className="w-1/2 bg-gray-100 p-4">
        <div className="h-full flex flex-col">
          <div className="mb-2">
            <h2 className="text-lg font-semibold text-gray-700">Live Preview</h2>
            <p className="text-xs text-gray-500">Changes will appear here in real-time</p>
          </div>
          
          {/* Resume Container - fits exactly in viewport */}
          <div className="flex-1 bg-white rounded-lg shadow-xl overflow-hidden flex items-center justify-center">
            <div className="transform scale-50 origin-center" style={{ width: '200%', height: '200%' }}>
              <div className="w-full h-full flex items-center justify-center">
                <ResumeTemplate ref={contentRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute('/Template1')({
  component: Template1Page,
});