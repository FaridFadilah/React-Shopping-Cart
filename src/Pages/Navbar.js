import { faChevronDown, faChevronUp, faMugHot, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Navbar(){
    const [dropdown,setDropdown] = React.useState(false)
    function handleDropdown(e){
        if(e) return setDropdown(true)
        else return setDropdown(false)
    }
    return (
        <nav className="px-10 py-3 rounded-b-xl bg-gray-800 ">
            <div className="container">
                <div className="flex flex-wrap items-center justify-between">
                    <button className="flex items-center">
                        <FontAwesomeIcon className='text-3xl text-gray-100 dark:text-blue-300' icon={faMugHot}/>
                        <h1 className='pt-2 text-2xl italic text-gray-100 dark:text-blue-300' >ReactStore</h1>
                    </button>
                    <div className="">
                        <div className="flex items-center rounded-lg border border-gray-100 p-1.5">
                            <FontAwesomeIcon className='bg-gray-100 p-2 rounded-full text-xl text-gray-800 dark:text-blue-300' icon={faUser}/>
                            <div className="block px-5">
                                <p className='text-gray-100'>Farid Fadilah Permana</p>
                                <p className='text-green-500'>Online</p>
                            </div>
                                {dropdown === true ? 
                                 <button onClick={() => handleDropdown()}><FontAwesomeIcon className='text-gray-100 text-xl' icon={faChevronUp}/></button>
                                :
                                <button onClick={() => handleDropdown(true)}><FontAwesomeIcon className='text-gray-100 text-xl' icon={faChevronDown}/></button>
                                }
                        </div>
                        {dropdown && 
                        <div className='absolute px-5 bg-white rounded shadow dark:bg-gray-700'>
                            <li className='list-none'>Logout</li>        
                        </div>}
                    </div>
                </div>
            </div>
        </nav>
    )
}