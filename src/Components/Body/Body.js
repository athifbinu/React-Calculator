import React, { useState } from 'react'
import Screen from '../Screen/Screen'

function Body() {

  const[result,setResult]=useState("")

       //continus click
   const handleClick =(e)=>{

     setResult(result.concat(e.target.name));
     console.log(result)
           
   }

      //clear
   const clear =()=>{
          // setResult(result.slice(0,-1))  //backspace
          setResult("")
   }

          //result
   const calculate =()=>{
    try {
      setResult(eval(result).toString());

    }catch(err) {
        alert("add corect value")
    }
 
   }
    



  return (
    <div>

            <Screen  result={result} />

    <button  name='7' className='button-number' onClick={handleClick}   >7</button>
    <button  name='8' className='button-number' onClick={handleClick}    >8</button>
    <button  name='9' className='button-number' onClick={handleClick}    >9</button>
    <button name='/' className='button-number'onClick={handleClick}   >/</button>

 
    <button name='6' className='button-number' onClick={handleClick}  >6</button>
    <button name='5' className='button-number' onClick={handleClick}  >5</button>
    <button name='4' className='button-number'onClick={handleClick}   >4</button>
    <button name='*' className='button-number' onClick={handleClick}  >*</button>

    <button name='3' className='button-number'onClick={handleClick}   >3</button>
    <button name='2' className='button-number' onClick={handleClick}  >2</button>
    <button name='1' className='button-number'onClick={handleClick}   >1</button>
    <button name='+' className='button-number'onClick={handleClick}   >+</button>

    <button id='clear'   onClick={clear}  >c</button>
    <button name='0' className='button-number' onClick={handleClick}  >0</button>
    <button    className='button-number'onClick={calculate}   >=</button>
    <button name='-' className='button-number'onClick={handleClick}   >-</button>

 
    </div>



  )
}

export default Body
