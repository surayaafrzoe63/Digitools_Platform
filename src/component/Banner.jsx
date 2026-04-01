import React from 'react';

const Banner = () => {
  return (
    <div className=' flex flex-col md:flex-row justify-around gap-14 p-10 mx-w-10/12 mx-auto items-center '>
      <div className='space-y-6 flex flex-col md:items-start items-center'>
<div className="badge badge-info bg-[#E1E7FF] border-none p-4 rounded-full">
  <img src="/assest_component/assets/Group 5.png" alt="" />
  
  <p className='text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500 font-bold text-[10px] md:text-[16px]'>New: AI-Powered Tools Available</p>
</div>

<h1 className='md:text-5xl  md:font-bold font-bold md:leading-16 leading-13 text-3xl text-center md:text-left'>Supercharge Your <br />Digital Workflow</h1>
<p className='leading-8 text-center md:text-left'>Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today. <br />

Explore Products
</p>
<div className=' md:flex-row  gap-3   flex flex-col justify-center items-center'>
  <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-white rounded-full w-fit '>Explore Products</button>
  <button className='btn text-transparent bg-clip-text bg-linear-to-r from-[#3928b8] to-[#36015e] font-bold rounded-full w-fit'>Watch Demo</button>
</div>
      </div>



      <div>
        <img className='md:h-147.5 md:w-125 shadow overflow-hidden rounded-xl' src="/assest_component/assets/banner.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;