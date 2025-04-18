import React from 'react'
import { TripForm } from './TripForm'
import { MapView } from './MapView';
import ELDLog from './EldLog';

const logData = [
  {
    start: "00:00",
    end: "02:00",
    status: "Off Duty",
    hours: 2.0
  },
  {
    start: "02:00",
    end: "03:37",
    status: "Driving",
    hours: 1.6233888888888888
  },
  {
    start: "03:37",
    end: "04:37",
    status: "On Duty",
    hours: 1.0
  },
  {
    start: "04:37",
    end: "12:37",
    status: "Driving",
    hours: 8.0
  },
  {
    start: "12:37",
    end: "13:37",
    status: "On Duty",
    hours: 1.0
  },
  {
    start: "13:37",
    end: "00:00",
    status: "Off Duty",
    hours: 10.376611111111112
  }
]
export const DashboardItemsContainer = () => {
  return (
    <div className='grid grid-cols-1 gap-5.5 p-5.5 h-full ml-[20%] mt-12'>
      
      <MapView />
      <ELDLog logData={logData} />
    </div>
  )
};


