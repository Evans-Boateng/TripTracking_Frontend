import { Form } from "react-router";

export const TripForm = () => {
  return (
    <div className='bg-white p-5 rounded-lg'>
      <h1 className="font-[550] mb-3">New Trip Details</h1>
      <Form className="flex flex-col">
        <label className="text-sm text-slate-500 font-medium">Current Location</label>
        <input type="text"
          placeholder="Enter current location"
          className="border border-gray-200 text-[14px] w-full px-3 py-[8px] focus:border-blue-600 placeholder-slate-400 rounded-md mt-2 mb-4  focus:outline-none focus:ring-[3px] focus:ring-blue-300 focus:ring-opacity-50"
        />
        <label className="text-sm text-slate-500 font-medium">Pickup Location</label>
        <input type="text"
          placeholder="Enter pickup location"
          className="border border-gray-200 text-[14px] w-full px-3 py-[8px] focus:border-blue-600 placeholder-slate-400 rounded-md mt-2 mb-4  focus:outline-none focus:ring-[3px] focus:ring-blue-300 focus:ring-opacity-50"
        />
        <label className="text-sm text-slate-500 font-medium">Drop-off Location</label>
        <input type="text"
          placeholder="Enter drop-off location"
          className="border border-gray-200 text-[14px] w-full px-3 py-[8px] focus:border-blue-600 placeholder-slate-400 rounded-md mt-2 mb-4  focus:outline-none focus:ring-[3px] focus:ring-blue-300 focus:ring-opacity-50"
        />
        <label className="text-sm text-slate-500 font-medium">Cycle Hours Used</label>
        <input type="text"
          placeholder="Enter hours"
          className="border border-gray-200 text-[14px] w-full px-3 py-[8px] focus:border-blue-600 placeholder-slate-400 rounded-md mt-2 mb-4  focus:outline-none focus:ring-[3px] focus:ring-blue-300 focus:ring-opacity-50"
        />
        <button 
          type="submit"
          className="bg-blue-600 text-white font-medium text-[15px] py-2 rounded-md w-full cursor-pointer hover:bg-blue-500 transition duration-300 ease-in-out shadow-sm"
        >
          Start Trip
        </button>
      </Form>
    </div>
  )
};