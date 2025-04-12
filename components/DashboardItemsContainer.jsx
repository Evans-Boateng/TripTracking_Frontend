import React from 'react'
import { TripForm } from './TripForm'
import { MapView } from './MapView';

export const DashboardItemsContainer = () => {
  return (
    <div className='grid grid-cols-1 gap-5.5 p-5.5 h-full'>
      
      <MapView />
    </div>
  )
};
