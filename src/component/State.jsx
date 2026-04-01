import React from 'react';

const State = () => {
  return (
    <div className='grid md:grid-cols-3 md:p-10 mt-9 justify-center items-center md:gap-14 gap-8 bg-linear-to-r from-[#4F39F6] to-[#9514FA]  p-4'>
      <div className='lg:border-r border-white md:px-14 px-7 md:space-y-5 space-y-3 text-center'>
<h2 className='md:text-5xl text-3xl font-bold text-white'>50K+</h2>
<p className='text-xl text-white '>Active Users</p>
      </div>
      <div className='lg:border-r border-white md:px-14 px-7 md:space-y-5 space-y-3  text-center '>
<h2 className='md:text-5xl text-3xl font-bold text-white '>200+</h2>
<p className='text-xl text-white'>Premium Tools</p>
      </div>
      <div className='md:px-14 px-7 md:space-y-5 space-y-3 text-center'>
<h2 className='md:text-5xl text-3xl font-bold text-white'>4.9</h2>
<p className='text-xl text-white'>Rating</p>
      </div>
      
    </div>
  );
};

export default State;