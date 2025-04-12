import { useState } from 'react'
import './App.css'
import { SideBar } from '../components/SibeBar';
import { Header } from '../components/Header';
import { DashboardItemsContainer } from '../components/DashboardItemsContainer';

function App() {
  
  return (
    <>
      <div className='flex'>
        <SideBar />
        <div className='flex-1'>
          <Header />
          <DashboardItemsContainer />
        </div>
      </div>
      
      
    </>
  )
}

export default App;
