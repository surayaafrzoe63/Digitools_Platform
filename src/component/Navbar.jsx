import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = ({newCards}) => {
  const [open,setOpen]=useState(true)
  return (
   <div className='bg-base-100 shadow-sm w-full'>
     <div className="navbar  flex justify-between px-9">
  <div className='flex gap-2  '>

     <span className='flex md:hidden'onClick={()=>setOpen(!open)}>
         {open?<Menu ></Menu> : <X></X>}
     </span>
    <ul className={`font-bold md:hidden absolute duration-1000 bg-white text-black px-4 m-0  ${open?"-top-64" :"top-12"}`}>
    <li className='hover:bg-amber-300 lg:m-10 lg:p-10'><a href="/home">Products</a></li>
    <li className='hover:bg-amber-300'><a href="/Features">Features</a></li>
    <li className='hover:bg-amber-300'><a href="/Pricing">Pricing</a></li>
    <li className='hover:bg-amber-300'><a href="/Testimonials">Testimonials</a></li>
    <li className='hover:bg-amber-300'><a href="/FAQ">FAQ</a></li>
  </ul>

   <div className='flex justify-center items-center'> <img className='md:w-full w-20' src="/assest_component/DigiTools.png"  alt="" /></div>
  </div>
<div>
  
  <ul className='md:flex hidden justify-between gap-8 font-bold'>
    <li><a href="/home">Products</a></li>
    <li><a href="/Features">Features</a></li>
    <li><a href="/Pricing">Pricing</a></li>
    <li><a href="/Testimonials">Testimonials</a></li>
    <li><a href="/FAQ">FAQ</a></li>
  </ul>
</div>
  <div className="flex justify-between items-center gap-3">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
       {newCards.length>0 && <span className="badge badge-sm indicator-item text-white bg-red-600 font-bold ">{newCards.length}</span>}

        </div>
      
    <button className='btn rounded-xl'>Login</button>
    <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full p-2.5 text-white w-30.5 md:flex hidden'>Get started</button>

  </div>
  
</div>
   </div>
  );
};

export default Navbar;