import React from 'react';

const Product = () => {
  return (
   <div className='bg-[#F9FAFC]'>
     <div className='mx-w-10/12 mx-auto md:p-10 p-3 mt-8 text-center'>
      <div className='space-y-6'>
        <h2 className='md:text-4xl font-bold text-2xl'>Get Started in 3 Steps</h2>
        <p className='text-[#627382] text-[16px]'>Start using premium digital tools in minutes, not hours.</p>
      </div>


      <div className='grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-15 max-w-10/12 mx-auto  pt-8'>

                   {/* card 1111111111111 */}
        <div className='md:p-7 shadow bg-white h-92 mx-w-92 rounded-2xl p-5'>
           <div className='flex justify-end'><p  className='rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center text-white w-10 h-10 '>01</p></div>
          
          <div className='rounded-full bg-linear-to-r from-[#bfbbe0] to-[#c3a7d7] p-2 inline-block'><img className=' object-cover rounded-full w-12 h-12' src="/assest_component/assets/user.png" alt="" /></div>
          <div className='space-y-5 mt-4'>
            <h3 className='text-2xl font-bold'>Create Acount</h3>
            <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.    </p>
          </div>
        </div>

                   {/* card 222222222 */}
        
        <div className='p-7 shadow bg-white h-92 mx-w-92 rounded-2xl'>
          <div className=' flex justify-end'><p  className='rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center text-white items-center w-10 h-10'>02</p></div>
          
          <div className='rounded-full mx-auto flex justify-center items-center bg-linear-to-r from-[#bfbbe0] to-[#c3a7d7] p-2 w-15 h-15 '><img className='  w-8 h-8 items-center ' src="/assest_component/assets/rocket.png" alt="" /></div>
         <div className='space-y-5 mt-4'>
            <h3 className='text-2xl font-bold'>Start Creating</h3>
            <p className='text-[#627382]'>Browse our catalog and select the toolsthat fit your needs.</p>
          </div>
        </div>

                      {/* card 3333333333 */}
        <div className='p-7 shadow bg-white  h-92 mx-w-92 rounded-2xl'>
          <div className='text-right flex justify-end'><p  className='rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center w-10 h-10 text-white'>03</p></div>
          
          <div className='rounded-full bg-linear-to-r from-[#bfbbe0] to-[#c3a7d7] p-2 inline-block'><img className=' object-cover rounded-full w-12 h-12' src="/assest_component/assets/user.png" alt="" /></div>
         <div className='space-y-5 mt-4'>
            <h3 className='text-2xl font-bold'>Choose Products</h3>
            <p className='text-[#627382]'>Download and start using your premium tools immediately</p>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Product;