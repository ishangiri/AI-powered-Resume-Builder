import { createFileRoute, Link } from '@tanstack/react-router'


function App() {

  return (
    <div>
    <div className='flex flex-row items-center justify-center bg-gray-100 gap-4 p-4'>
      <div className='flex flex-col items-center gap-2'>
        <h1 className='text-2xl font-bold'>Welcome to the Resume Builder</h1>
        <p className='text-gray-600'>Select a template to get started!</p>
      </div>
    </div>
    <div className='flex flex-row items-center justify-between h-screen bg-gray-100 p-8'>
      <div>
        <Link to='/Template1' className='bg-blue-500 text-white px-4 py-2 rounded'>
           Template 1
        </Link>
      </div>
    </div>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: App,
})