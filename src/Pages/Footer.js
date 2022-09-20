import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
    return (
        <div className="block lg:flex items-center lg:justify-between bg-gray-700 px-10 p-5">
            <div className="flex items-center">
                <a href="https://www.instagram.com/_frdfdlh_._/" rel="noreferrer" className="px-3 mx-3 bg-gray-200 rounded-full border border-orange-700 text-2xl bg-white" target={'_blank'}><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://github.com/FaridFadilah" rel="noreferrer" target={"_blank"} className="px-3 mx-3 bg-gray-200 rounded-full border border-orange-700  text-2xl"><FontAwesomeIcon icon={faGithub}/></a>
            </div>
            <h1 className='text-gray-100'>Created by Farid Fadillah Permana, 2022</h1>
        </div>
    )
}
