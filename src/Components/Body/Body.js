import React, { useState } from 'react'
import Screen from '../Screen/Screen'

function Body() {

    const [value,btnclick] =useState()



    function btnclieked(){
      btnclick(value+=value)
    }



       

   

  return (
    <div>

            <Screen value={value} />

    <button className='button-number' onClick={btnclieked}  >7</button>
    <button className='button-number'  onClick={btnclieked}  >8</button>
    <button className='button-number'  onClick={btnclieked}  >9</button>
    <button className='button-number' >/</button>


    <button className='button-number' >6</button>
    <button className='button-number' >5</button>
    <button className='button-number' >4</button>
    <button className='button-number' >*</button>

    <button className='button-number' >3</button>
    <button className='button-number' >2</button>
    <button className='button-number' >1</button>
    <button className='button-number' >+</button>

    <button className='button-number' >c</button>
    <button className='button-number' >0</button>
    <button className='button-number' >=</button>
    <button className='button-number' >-</button>


    </div>


  )
}

export default Body
