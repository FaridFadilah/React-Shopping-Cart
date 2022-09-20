import React from 'react'

export default function Card({item, handleClick}){
  const {name, image, price} = item
  return (
  <div className="w-full">
  <div className='bg-gray-100 border-gray-700 border-2 rounded-lg shadow-inner shadow-white'>
      <div className=" lg:block justify-center items-center">
          <img className='lg:aspect-square object-cover rounded-t-lg' src={require("../img/" + image)} alt={image}/>
          <div className="p-6 flex justify-between items-center ">
              <div className="">
                <p className='text-lg capitalize text-amber-700'>{name}</p>
                <p className='text-lg capitalize text-green-500'>{price}</p>
              </div>
              <button onClick={() => handleClick(item)}  className='bg-blue-400 border-gray-200 text-gray-200 rounded-lg border capitalize px-1.5 py-3 hover:bg-blue-500'>add to cart</button>
          </div>
      </div>
  </div>
</div>
  )
}