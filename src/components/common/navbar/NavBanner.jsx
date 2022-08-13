import { Link } from 'gatsby';
import React from 'react'
import { FiArrowRight } from 'react-icons/fi';
import { GiPartyPopper } from 'react-icons/gi';


export default function NavBanner() {
  return (
    <Link to='/anniversary/message-wall-2022'>
      <div className='bg-standard-blue py-1 flex flex-row items-center justify-center'>
          <p className='text-white text-center'>
            <GiPartyPopper className='inline' /> Happy 4th Founding Anniversary! View our anniversary message wall here <FiArrowRight className='inline' />
          </p>
      </div>
    </Link>
  )
}
