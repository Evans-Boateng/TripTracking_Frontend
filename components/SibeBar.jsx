import { useState } from "react";
import { PiTruckTrailerFill } from "react-icons/pi";
import { RiDashboard3Fill } from "react-icons/ri";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { FaRoute } from "react-icons/fa";
import { NavLink } from "react-router";
export const SideBar = () => {
  const items = [
    {
      name: 'Dashboard',
      icon: <RiDashboard3Fill />
    },
    
  ]
  return (
    <div className="bg-white fixed w-[20%] min-h-dvh m-0 px-2 border-r-1 border-gray-200">
      <div className="flex items-center gap-3 py-2 px-2 border-b-1 border-gray-200 mb-2.5">
        <PiTruckTrailerFill className="text-blue-600 text-3xl" />
        <h1 className="text-lg font-bold">TruckPlanner</h1>
      </div>
      <ul>
        <li className="rounded-md overflow-hidden">
          <NavLink to="/">
            {({isActive}) => (
              <div className={isActive ? 'flex items-center gap-3 py-2 px-3 bg-blue-50 text-blue-600' : 'flex items-center gap-3 py-2 px-3'}>
                <RiDashboard3Fill className={isActive ? "text-lg text-blue-600" : "text-lg text-black/70"} />
                <span className="font-[470]">Dashboard</span>
              </div>
            )}
          </NavLink>
        </li>
        <li className="rounded-md overflow-hidden">
          <NavLink to="/trips">
            {({isActive}) => (
              <div className={isActive ? 'flex items-center gap-3 py-2 px-3 bg-blue-50 text-blue-600' : 'flex items-center gap-3 py-2 px-3'}>
                <FaRoute className={isActive ? "text-lg text-blue-600" : "text-lg text-black/70"} />
                <span className="font-[470]">Trips</span>
              </div>
            )}
          </NavLink>
        </li>
        <li className="rounded-md overflow-hidden">
          <NavLink to="/logs">
            {({isActive}) => (
              <div className={isActive ? 'flex items-center gap-3 py-2 px-3 bg-blue-50 text-blue-600' : 'flex items-center gap-3 py-2 px-3'}>
                <PiClockCounterClockwiseBold className={isActive ? "text-lg text-blue-600" : "text-lg text-black/70"} />
                <span className="font-[470]">ELD Logs</span>
              </div>
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  )
}