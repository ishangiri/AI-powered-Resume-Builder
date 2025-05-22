import { createFileRoute, Link } from '@tanstack/react-router'

function App() {

   return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="flex flex-row items-center justify-center bg-gray-100 gap-4 p-8">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to the Resume Builder</h1>
          <p className="text-gray-600 text-lg">Select a template to get started!</p>
        </div>
      </div>

      {/* Templates Section */}
      <div className="flex flex-row items-center justify-center gap-12 px-8 pb-8">
        {/* Template 1 */}
        <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-96 h-96 border border-gray-200 overflow-hidden bg-white hover:scale-150 transition-transform">
            <img 
              src="/ResumeTemplate1.pdf.png" 
              alt="Template 1" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-800">Professional Template</h3>
            <Link 
              to="/Template1" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Choose Template
            </Link>
          </div>
        </div>

        {/* Template 2 */}
        <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-auto h-auto border border-gray-200 overflow-hidden bg-white hover:scale-150 transition-transform">
            <img 
              src="/ModernResume.pdf.svg" 
              alt="Template 2" 
              className="w-96 h-96 object-contain"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-800">Modern Template</h3>
            <Link 
              to="/Template2" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Choose Template
            </Link>
          </div>
        </div>

        {/* Template 3 */}
        <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-96 h-96 border border-gray-200 overflow-hidden bg-white hover:scale-150 transition-transform">
            <img 
              src="/creativeResume.svg" 
              alt="Template 3" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-800">Creative Template</h3>
            <Link 
              to="/Template3" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Choose Template
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute('/')({
  component: App,
})






