import React from 'react';

const Transform = () => {
  return (
    <div>
      <div className=' text-center text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-14 space-y-6 mt-7' >
      <h1 className='text-4xl font-bold'>Ready to Transform Your Workflow?</h1>
      <p className='font-light'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
      <div className='flex justify-center gap-3 mt-9'>
        <button className='btn rounded-full border-none'>Explore Products</button>
        <button className='btn rounded-full border-none  '>View Pricing</button>
      </div>
       <p className='font-light text-[16px]'>14-day free trial • No credit card required • Cancel anytime</p>
    </div>
    </div>
  );
};

export default Transform;