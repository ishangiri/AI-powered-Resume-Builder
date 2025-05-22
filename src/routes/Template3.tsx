import { createFileRoute } from '@tanstack/react-router'
import { useReactToPrint } from 'react-to-print';
import TemplateCreative from '../Resumes/CreativeResume';
import ResumeForm from '../components/Form';
import { useRef } from 'react';


function RouteComponent() {


  const contentRef = useRef<HTMLDivElement>(null);

const reactToPrintFn = useReactToPrint({ contentRef });

const onsubmit = async () => {
      console.log("Hello");
      
}

  return <div className="flex flex-row items-center justify-between bg-gray-100 min-h-screen">
       <ResumeForm onSubmit={onsubmit} />
      <div className="shadow-2xl">
        <TemplateCreative ref={contentRef} />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          onClick={reactToPrintFn}
        >
          Print Resume
        </button>
      </div>
    </div>
}

export const Route = createFileRoute('/Template3')({
  component: RouteComponent,
})