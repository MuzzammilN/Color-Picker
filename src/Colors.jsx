import React, { useState } from 'react'

import './index.css';


const Colors = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#1da1f2');

    function handleCreateRandomHexColor(){
      const colors = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","f"];
      let hexColor = "#";

      for(let i = 0; i < 6; i++){
      hexColor += colors[Math.floor(Math.random() * colors.length)]
      }
    
      setColor(hexColor);

    }


    function handleCreateRandomRGBColor(){
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      setColor(`rgb(${r},${g},${b})`);



      }
    

    

  

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center" style={{ backgroundColor : color}}>
    <div>
        
        <button className='bg-white rounded-md p-2 font-bold font-sans m-2' onClick={() =>setTypeOfColor('hex')}>Create HEX Color</button>
        <button className='bg-white rounded-md p-2 font-bold font-sans m-2' onClick={() =>setTypeOfColor('rgb')} >Create RGB Color</button>
            <button className='bg-white rounded-md p-2 font-bold font-sans m-2' onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRGBColor}>Generate Random Color</button>

            </div>
            <h1 className='font-sans font-bold text-2xl mt-2 text-white'>
              {color}
            </h1>

            </div> 
  )

}

export default Colors;