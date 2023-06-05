import React from 'react';


function Navbar({size, setShow}){
  return (
    <div>
        <nav>
            <span>cart</span>
            <span>{size}</span>
        </nav>
    </div>
  )
}

export default Navbar