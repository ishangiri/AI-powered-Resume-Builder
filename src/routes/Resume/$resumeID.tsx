import { createFileRoute } from '@tanstack/react-router'
import { useReactToPrint } from 'react-to-print';
import ProfessionalTemplate from '../../Resumes/ProfessionalResume';
import ModernTemplate from '../../Resumes/ModernResume';
import TemplateCreative from '../../Resumes/CreativeResume';
import  ResumeTemplate    from '../../Resumes/MCreativeResume';
import { useRef } from 'react';
import ResumeForm from '@/components/ResumeForm';
import { useParams } from '@tanstack/react-router';
import Button from '@/components/ui/Button';

function Resumepage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const { resumeID } = useParams({ from: '/Resume/$resumeID' });


  const chooseResumeTemplate = () => {
    switch (resumeID) {
      case 'Professional':
        return <ProfessionalTemplate  ref={contentRef} />;
      case 'Modern':
        return <ModernTemplate ref={contentRef} />;
      case 'Creative':
        return <TemplateCreative ref={contentRef} />;
      case 'Mcreative':
        return <ResumeTemplate ref={contentRef} />;
        default:
        return <div className="text-center text-gray-500">No template selected</div>;
    }
  }
  
  const onSubmit = async () => {
    console.log("Form submitted");
  }

  return (
    <div className="flex  bg-gray-50">
      {/* Left Side - Form */}
        <div className="w-1/2 p-6 bg-white shadow-lg h-screen overflow-y-auto">
        <div className=" mx-auto">
          <ResumeForm onSubmit={onSubmit} />

          {/* Print Button */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Button onSubmit={reactToPrintFn} text="Generate PDF" />
          </div>
        </div>
      </div>

      {/* Right Side - Resume Preview */}
      <div className="w-1/2 bg-gray-100 p-4">
        <div className="max-h-full flex flex-col">
          <div className="mb-2">
            <h2 className="text-lg font-semibold text-gray-700">Live Preview</h2>
            <p className="text-xs text-gray-500">Changes will appear here in real-time</p>
          </div>
          
          {/* Resume Container - fits exactly in viewport */}
          <div className="flex-1 bg-white rounded-lg shadow-xl overflow-hidden flex items-center justify-center">
            <div style={{ width: '100%', height: '100%' }}>
              <div className="w-full h-full flex items-center">
              {chooseResumeTemplate()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute('/Resume/$resumeID')({
  component: Resumepage,
});