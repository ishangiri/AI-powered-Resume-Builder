interface ButtonProps {
  onSubmit: () => void,
  text : string
}

const Button = ({onSubmit, text} : ButtonProps) => {
  return (
          <button
            className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={onSubmit}
          >
            {text}
          </button>
  )
}

export default Button