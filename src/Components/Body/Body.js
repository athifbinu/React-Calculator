import React, { useState } from 'react'

function Body() {

 const [count,setcount]=useState(0)


 function addcount(){
  setcount(count+1)
 }


 console.log(count)








  return (
    <div>

    <button className='button-number' onClick={addcount} >7</button>
    <button className='button-number' >8</button>
    <button className='button-number' >9</button>
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
