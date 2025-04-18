import { MdLightMode } from "react-icons/md";
import { useState } from 'react';
import { TripForm } from './TripForm';

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-white h-12 w-[80%] border-b-1 border-gray-200 flex items-center px-5 ml-[20%] fixed">
        <MdLightMode />
        <button
          onClick={() => setOpen(true)} 
          className="absolute right-5 bg-blue-600 text-white rounded-md px-3 py-1 hover:bg-blue-500 transition duration-300 ease-in-out shadow-lg focus:outline-blue-600 focus:outline-2 focus:outline-offset-2 cursor-pointer"
        >
          Start New Trip
        </button>
      </div>
      <TripForm open={open} onClose={() => setOpen(false)}/>
    </>
  )
};