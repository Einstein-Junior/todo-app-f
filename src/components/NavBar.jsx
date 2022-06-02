import React from 'react';
import "../index.css"; 
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({count,error,onLogOut}) => {
  return (
      <>
        <nav className='flex justify-evenly' style={{backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
                {<div> {error && <strong className="bg-red-500 p-4 w-100 rounded-sm">{error}</strong>}</div>}
                <h1 className='m-4 text-green-600 text-xl'>Tasks Completed: {count}</h1>
                <motion.button  whileTap={{ scale: 0.9 }}onClick={onLogOut} className='p-2 m-2 rounded-md text-center bg-red-600 text-white text-lg transition-all ease border-none decoration-none hover:cursor-pointer hover:bg-red-400'><FontAwesomeIcon className='mx-2' icon={faSignOutAlt}/> Log Out</motion.button>
        </nav>
    </>
  )
}

export default NavBar