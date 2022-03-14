import React from 'react'
import Button from '../components/common/buttons/Button'
import arrowIcon from "../images/svg/arrow-forward-white.svg"

export default function components() {
  
  const Foo = () => null;

  return (
    <div className="border-2 p-6">
        <Button
          callBack={() => Foo()}
          text="Explore our members" 
          textColor="text-white" 
          color="bg-darkish-blue" 
          glow={false}
          icon={<object data={arrowIcon} type="image/svg+xml" aria-label="button icon"></object>}/>
    </div>
  )
}
