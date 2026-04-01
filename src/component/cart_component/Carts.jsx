import React from 'react';
import { toast } from 'react-toastify';


const Carts = ({newCards ,setNewCards}) => {
  console.log(newCards)
  const totalPrice=newCards.reduce((sum,card)=>sum+card.price,0)
 const prices=totalPrice.toFixed(1)

const handelClick=()=>{
  toast.success("Successfully Proceed!")
   setNewCards([])
   
}
  
 const cardFilter=(card)=>{
  const filteredArray=newCards.filter(c=>c.id!==card.id)
  setNewCards(filteredArray)
toast.success(`${card.name} deleted`)
 }


//  const{name,description,price,period,tagType,features,icon}=card;

  return (
    <div className='shadow p-8 rounded-2xl'>
<h2 className='text-2xl font-bold'>Your Cart</h2>

    {
      newCards.length===0? 
      
      <div className='text-center  w-8/12 mx-auto p-7 bg-white rounded-2xl space-y-5'>
        <div className='flex justify-center '>
          <img className="w-20 h-20 bg-[#F2F2F2] rounded-full"  src="/assest_component/assets/cart.png" alt="" />
        </div>
        <h1 className='text-2xl font-bold'>Your cart is 
          empty
        </h1>
        <p className='font-light'>Continue Shopping</p>
        <p className='font-light'>Thank you !</p>
      </div> 
      
      :

       <div>
      {newCards.map(card=><div className=' flex justify-between items-center p-6 bg-[#F2F2F2] rounded-2xl mt-5'>
     <div className='flex gap-4'>
       <div>
        <img src={card.icon} alt="" />
      </div>
      <div>
        <h3 className='font-bold'>{card.name}</h3>
        <p className='font-light'>${card.price}</p>
      </div>
     </div>
      <div>
        <button className='btn text-red-500 rounded-xl' onClick={()=>cardFilter(card)}>remove</button>
      </div>
     </div>)}

      <div className='flex justify-between p-3 pt-5'>
       <h3 className='text-xl'>total</h3>
       <p className='text-xl'>${prices}</p>
    </div>

    <div className='pt-5'>
      <button className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block rounded-full text-white p-3' onClick={handelClick}>Proceed to Checkout</button>
      </div>
     </div>

     
    }
    

   
    
    </div>
  );
};

export default Carts;