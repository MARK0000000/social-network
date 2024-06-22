import React from 'react'
import { Outlet} from 'react-router-dom';
import '../styles/style.scss'
import Header from './main/Header';
import Aside from './main/Aside';
import MobileNav from './main/MobileNav';


export default function Main() {

  
  return (
    <>
    <Header/>
    <div className="container">
      <Aside/>
      <div className='main'>
        <Outlet />
      </div>
    </div>
    <MobileNav/>
    </>
  )
}
