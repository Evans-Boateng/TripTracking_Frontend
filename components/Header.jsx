import { MdLightMode } from "react-icons/md";

export const Header = () => {
  return (
    <div className="bg-white h-12 w-full border-b-1 border-gray-200 flex items-center px-5 relative">
      <MdLightMode />
      <button 
        className="absolute right-5 bg-blue-600 text-white rounded-md px-3 py-1 hover:bg-blue-500 transition duration-300 ease-in-out shadow-lg focus:outline-blue-600 focus:outline-2 focus:outline-offset-2 cursor-pointer"
      >
        Start New Trip
      </button>
    </div>
  )
};