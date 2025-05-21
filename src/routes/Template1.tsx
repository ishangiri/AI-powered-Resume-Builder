import { createFileRoute } from '@tanstack/react-router'
import { useReactToPrint } from 'react-to-print';
import Template1 from '../components/Template1';
import { useRef } from 'react';
import ResumeForm from '../components/Form';

function Template1Page() {

   const contentRef = useRef<HTMLDivElement>(null);

const reactToPrintFn = useReactToPrint({ contentRef });

const onsubmit = async () => {
      console.log("Hello");
      
}

  return (
    <div className="flex flex-row items-center justify-between bg-gray-100 min-h-screen">
       <ResumeForm onSubmit={onsubmit} />
      <div className="shadow-2xl">
        <Template1 ref={contentRef} />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          onClick={reactToPrintFn}
        >
          Print Resume
        </button>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/Template1')({
  component: Template1Page,
});