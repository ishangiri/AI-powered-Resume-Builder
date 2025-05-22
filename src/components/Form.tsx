

interface FormProps {
  onSubmit: () => void;
}

const ResumeForm = ({onSubmit} : FormProps) => {
  return (
    <div>
    <div className="flex flex-row justify-center  bg-gray-100 gap-4 p-4">
        <input type="text" placeholder="First Name" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />
        <input type="email" placeholder="Last Name" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />
    </div>
    <div className="flex flex-row justify-center bg-gray-100 gap-4 p-4">
        <input type="text" placeholder="Phone" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />
        <input type="email" placeholder="Email" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />
    </div>
      <div className="flex flex-row justify-center bg-gray-100 gap-4 p-4">
        <input type="text" placeholder="Website Link" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />
        <input type="email" placeholder="Location" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />
    </div>
    <div className="flex flex-row justify-center">
     <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={onSubmit}>Next</button>
     </div>
    </div>
  )
}

export default ResumeForm