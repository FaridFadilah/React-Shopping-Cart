import { faChevronDown, faChevronUp, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Hero({Cart, setCart}){
  const [cartToggle, setCartToggle] = React.useState(false)
  const [price, setPrice] = React.useState(0);

  const handleCartToggle = (e) => {
    if(e === true) return setCartToggle(true)
    return setCartToggle(false)
  }
  
  const handleDeleteAll = () => {
    setCart([])
  }

  const handleChange = (Id, value) => {
    const getId = Cart.indexOf(Id)
    const arr = Cart
    
    arr[getId].qty += value
    if(arr[getId].qty === 0) arr[getId].qty = 1
    setCart([...Cart])
  }

  const handlePrice = () => {
    let ans = 0
    Cart.map((data) => ans += data.qty * data.price)
    setPrice(ans)
  } 
  
  React.useEffect(() => handlePrice())

  const handleDeleteById = (Id) => {
    const cartList = Cart.filter((data) => data.id !== Id)
    setCart(cartList) 
  }

  return (
    <div className="px-5 py-11 ">
        <div className="block lg:flex items-center lg:justify-between gap-4">
            <div className="w-full lg:w-3/5">
                <div className="relative flex items-center justify-center p-5">
                    <img className='lg:aspect-video aspect-square object-cover rounded-xl' src={require("../img/Waffle.jpg")} alt="" />
                    <div className="absolute flex justify-center lg:justify-between ">
                        <div className=" block bg-red-900 bg-opacity-40 w-4/5 rounded-lg lg:w-3/5 p-3 items-center">
                            <span className='text-md text-white'>React Store</span>
                            <h1 className='text-4xl text-white py-3 leading-tight'>Lorem ipsum dolor sit amet consectetur.</h1>
                            <p className='text-sm w-3/4 text-white py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis corporis iusto quod.</p>
                            <button className='py-1.5 px-4 bg-gray-100 text-black rounded-lg shadow shadow-gray-900 hover:bg-gray-200'>Getting Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-5 w-full lg:w-2/5">
                <div className="block items-center bg-gray-700 rounded-lg p-5">
                    <div className="flex items-center justify-between">
                        <h1 className='text-2xl text-gray-100'>Cart</h1>
                        {cartToggle === false ? <button value={true} onClick={() => handleCartToggle(true)} className='text-2xl text-gray-100 lg:hidden'>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </button> : 
                        <button onClick={() => handleCartToggle()} className='text-2xl text-gray-100 lg:hidden'>
                            <FontAwesomeIcon icon={faChevronUp}/>
                        </button>}
                    </div>
                    <div className="hidden lg:block h-52 items-center justify-center overflow-y-auto divide-y-2 rounded-xl">
                    {Cart.length > 0 ? Cart.map((data) => (
                    <div key={data.id} className=" flex items-center w-full bg-gray-400 py-1.5 justify-between hover:bg-gray-500 text-gray-100">
                        <button onClick={() => handleDeleteById(data.id)} className='pl-2.5 text-xl'><FontAwesomeIcon icon={faTrash}/></button>
                        <div className="block items-center pt-1">
                            <h1 className='text-xl'>{data.name}</h1>
                            <span className='text-sm'>Rp {data.price * data.qty}</span>
                        </div>
                        <div className="flex items-center bg-gray-300 rounded-xl mx-2">
                            <button onClick={() => handleChange(data, -1)} className="px-4 bg-blue-900 rounded-l-xl"><FontAwesomeIcon icon={faMinus}/></button>
                            <span className='px-4 text-gray-700'>{data.qty}</span>
                            <button onClick={() => handleChange(data, 1)} className="px-4 bg-blue-900 rounded-r-xl"><FontAwesomeIcon icon={faPlus}/></button>
                        </div>
                    </div>
                )) : 
                    <div className="flex flex-col items-center justify-center py-20">
                        <h1 className='text-2xl text-gray-100 font-thin'>Item not founds</h1>
                    </div>
                }
                    </div>
                    <div className="hidden lg:flex justify-between">
                        <span className="text-2xl text-gray-100">Total</span>
                        <span className="text-2xl text-gray-100">Rp {price}</span>
                    </div>
                    <div className="hidden lg:flex flex-col gap-y-3">
                        <button onClick={() => handleDeleteAll()} className='rounded-xl border-2 border-gray-50 py-2.5 text-xl text-gray-50 hover:bg-gray-100 hover:text-gray-700 hover:transition hover:ease-in hover:duration-200'>Delete all</button>
                        <button className='rounded-xl py-2.5 text-xl text-gray-50 bg-blue-500 hover:bg-blue-600 hover:transition hover:ease-in hover:duration-200'>Buy now</button>
                    </div>
                    {cartToggle && (
                    <>  {Cart.length > 0 ? Cart.map((data) => 
                    <div className=" flex lg:hidden items-center w-full bg-gray-400 py-1.5 justify-between hover:bg-gray-500 text-gray-100">
                    <button onClick={() => handleDeleteById(data.id)} className='pl-2.5 text-xl'><FontAwesomeIcon icon={faTrash}/></button>
                    <div className="block items-center pt-1">
                        <h1 className='text-xl'>{data.name}</h1>
                        <span className='text-sm'>Rp {data.price}</span>
                    </div>
                    <div className="flex items-center bg-gray-300 rounded-xl mx-2">
                        <button onClick={() => handleChange(data, -1)} className="px-4 bg-blue-900 rounded-l-xl"><FontAwesomeIcon icon={faMinus}/></button>
                        <span className='px-4 text-gray-700'>{data.qty}</span>
                        <button onClick={() => handleChange(data, 1)} className="px-4 bg-blue-900 rounded-r-xl"><FontAwesomeIcon icon={faPlus}/></button>
                    </div>
                </div>) : 
                        <div className="flex lg:hidden flex-col items-center justify-center py-20">
                            <h1 className='text-2xl text-gray-100 font-thin'>Item not founds</h1>
                        </div>}
                        <div className="flex lg:hidden justify-between">
                            <span className="text-2xl text-gray-100">Total</span>
                            <span className="text-2xl text-gray-100">Rp 0</span>
                        </div>
                        <div className="flex lg:hidden flex-col gap-y-3">
                            <button className='rounded-xl border-2 border-gray-50 py-2.5 text-xl text-gray-50 hover:bg-gray-100 hover:text-gray-700 hover:transition hover:ease-in hover:duration-200' onClick={() => handleDeleteAll()}>Delete all</button>
                            <button className='rounded-xl py-2.5 text-xl text-gray-50 bg-blue-500 hover:bg-blue-600'>Buy now</button>
                        </div>
                    </>) }
                </div>
            </div>
        </div>
    </div>
  )
}